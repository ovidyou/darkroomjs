;(function (window, document, Darkroom, fabric, $) {
  'use strict';

  function joinAttributes(attributesArray) {
    var attributes = [];
    for (var i in attributesArray) {
      attributes.push(i + '="' + attributesArray[i] + '"');
    }
    return attributes.join(' ');
  }

  function ControlContainer(element) {
    this.element = element;
  }

  ControlContainer.prototype = {
    createControlGroup: function (options) {
      var $group = $('<div class="darkroom-control-group"></div>');
      this.element.append($group);

      return new ControlGroup($group);
    }
  };

  function ControlGroup(element) {
    this.element = element;
  }

  ControlGroup.prototype = {
    createControl: function(properties) {
      var defaults = {
        label: '',
        type: 'text',
        attributes: {
          id: 'darkroom-control-' + new Date().getTime() + '-' + Math.round(Math.random() * 100000),
          class: 'darkroom-control-element'
        },
        value: '',
        options: {},
        scope: [],
        group: 'default',
        hide: false,
        disabled: false
      };

      properties = $.extend(true, defaults, properties);

      switch (properties.type) {
        case 'color':
        case 'text':
        case 'range':
          return this.createInputControl(properties);

        case 'select':
          return this.createSelectControl(properties);
      }

      return null;
    },
    createInputControl: function(properties) {
      var attributes = joinAttributes(properties.attributes);

      var $input = $('<input type="'+ properties.type +'" ' + attributes +' value="'+ properties.value +'">');
      var $label = null;
      if (properties.label) {
        $label = $('<label class="darkroom-control-label" for="'+ properties.attributes.id +'">'+ properties.label +'</label>');
      }

      this.element.append($label).append($input);

      return new Control($input, $label, properties);
    },
    createSelectControl: function(properties) {
      var attributes = joinAttributes(properties.attributes);

      var $select = $('<select ' + attributes +'>');
      var $label = null;
      if (properties.label) {
        $label = $('<label class="darkroom-control-label" for="'+ properties.attributes.id +'">'+ properties.label +'</label>');
      }
      var options = '';
      for (var i in properties.options) {
        var row = properties.options[i];
        var selected = row.value == properties.value ?  'selected="selected"' : '';

        options += '<option value="'+ row.value +'" '+ selected +'>'+ row.title +'</option>';
      }

      $select.append(options);

      this.element.append($label).append($select);

      return new Control($select, $label, properties);
    },
    createButtonControl: function(properties) {
      var attributes = joinAttributes(properties.attributes);

      var $button = $('<button type="button" ' + attributes +'>'+ properties.title +'</button>');

      this.element.append($button);

      return new Control($button, null, properties);
    }
  };

  function Control(element, labelElement, properties) {
    this.element = element;
    this.labelElement = labelElement;
    this.properties = properties;

    this.hide(properties.hide);
    this.disable(properties.disabled);
  }

  Control.prototype = {
    active: function (value) {
      if (value) {
        this.element.addClass('darkroom-control-active');
      }
      else {
        this.element.removeClass('darkroom-control-active');
      }
    },
    hide: function (value) {
      if (value) {
        this.element.addClass('darkroom-control-hidden');
        if (this.labelElement) {
          this.labelElement.addClass('darkroom-control-hidden');
        }
      }
      else {
        this.element.removeClass('darkroom-control-hidden');
        if (this.labelElement) {
          this.labelElement.removeClass('darkroom-control-hidden');
        }
      }
    },
    disable: function (value) {
      this.element.prop('disabled', value);
    }
  };

  var AVAILABLE_FONTS = (function() {

    var ALL_FONTS = ["Cursive", "Monospace", "Serif", "Sans-serif", "Fantasy", "Arial", "Arial Black",
      "Arial Narrow", "Arial Rounded MT Bold", "Bookman Old Style", "Bradley Hand ITC", "Century",
      "Century Gothic", "Comic Sans MS", "Courier", "Courier New", "Georgia", "Gentium", "Impact",
      "King", "Lucida Console", "Lalit", "Modena", "Monotype Corsiva", "Papyrus", "Tahoma", "TeX",
      "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Verona", "Ubuntu", "Ubuntu Mono",
      "Ubuntu Condensed", "Helvetica"].sort();

    var fontDetector = (new Detector()).detect;

    return ALL_FONTS.filter(function(font) { return fontDetector(font); });
  })();

  function getObjectStyle(styleName, object) {
    if (!object) return '';

    return (object.getSelectionStyles && object.isEditing)
      ? (object.getSelectionStyles()[styleName] || '')
      : (object[styleName] || '');
  }

  function setObjectStyle(styleName, value, object) {
    if (!object) return;

    if (object.setSelectionStyles && object.isEditing) {
      var style = {};
      style[styleName] = value;
      object.setSelectionStyles(style);
      object.setCoords();
    }
    else {
      object[styleName] = value;
    }

    object.setCoords();
  }


  function getObjectProp(name, object) {
    if (!object) return '';

    return object[name] || '';
  }

  function setObjectProp(name, value, object) {
    if (!object) return;

    object.set(name, value).setCoords();
  }

  function getColor(object) {
    var type = object.get('type');
    if (type == 'text' || type == 'i-text') {
      return getObjectStyle('fill', object);
    }
    return getObjectStyle('stroke', object);
  }

  function setColor(object, color) {
    var type = object.get('type');
    if (type == 'text' || type == 'i-text') {
      return setObjectStyle('fill', color, object);
    }
    return setObjectStyle('stroke', color, object);
  }

  function getSize(object) {
    var type = object.get('type');
    if (type == 'text' || type == 'i-text') {
      return Math.round((getObjectStyle('fontSize', object) - 12) / 2);
    }
    return getObjectStyle('strokeWidth', object);
  }

  function setSize(object, size) {
    var type = object.get('type');
    if (type == 'text' || type == 'i-text') {
      setObjectStyle('fontSize', 12 + size * 2, object);
    }
    else {
      setObjectStyle('strokeWidth', size, object)
    }
    object.setCoords();
  }




  Darkroom.plugins['controls'] = Darkroom.Plugin.extend({
    undoTransformations: [],

    initialize: function InitDarkroomControlsPlugin() {
      this.darkroom.canvas.on('object:selected', this._onObjectSelected.bind(this));
      this.darkroom.canvas.on('selection:cleared', this._onObjectSelectionCleared.bind(this));

      var $container = $('<div class="darkroom-controls-container"></div>');
      $(this.darkroom.containerElement).prepend($container);

      this.controlsContainer = new ControlContainer($container);
      this._initControls();
    },

    _initControls: function () {
      var self = this;

      var controlGroup = this.controlsContainer.createControlGroup();

      var colorInput = controlGroup.createControl({
        label: 'Color',
        type: 'color',
        value: '#ff0000'
      });

      colorInput.element.on('input change', function (ev) {
        var activeObject = self.darkroom.canvas.getActiveObject();
        if (activeObject != null) {
          setColor(activeObject, this.value);
          self.darkroom.canvas.renderAll();
        }
        else {
          colorInput.properties.value = this.value;
        }
      });

      this.colorInput = colorInput;

      var sizeRange = controlGroup.createControl({
        label: 'Size',
        type: 'range',
        value: '2',
        attributes: {
          min: 1,
          max: 16,
          step: 1
        }
      });

      sizeRange.element.on('input change', function (ev) {
        var activeObject = self.darkroom.canvas.getActiveObject();
        if (activeObject != null) {
          var size = parseInt(this.value, 10);
          setSize(activeObject, size);
          self.darkroom.canvas.renderAll();
        }
        else {
          sizeRange.properties.value = this.value;
        }
      });

      this.sizeRange = sizeRange;

      var fontOptions = {};

      for (var i in AVAILABLE_FONTS) {
        var name = AVAILABLE_FONTS[i];
        fontOptions[name] = {
          value: name,
          title: name
        };
      }

      var fontSelection = controlGroup.createControl({
        label: 'Font',
        type: 'select',
        value: 'Monospace',
        options: fontOptions,
        hide: true
      });

      fontSelection.element.on('change', function(ev){
        var activeObject = self.darkroom.canvas.getActiveObject();
        if (activeObject != null) {
          setObjectProp('fontFamily', this.value, activeObject);
          self.darkroom.canvas.renderAll();
        }
        else {
          fontSelection.properties.value = this.value;
        }
      });

      this.fontSelection = fontSelection;

      this.darkroom.canvas.on('object:added', function (ev) {
        if (!self.darkroom.initialized) {
          return;
        }
        var obj = ev.target;
        var color = self.colorInput.properties.value;
        var size = parseInt(self.sizeRange.properties.value, 10);

        if (obj.selectable) {
          setColor(obj, color);
          setSize(obj, size);

          self.darkroom.canvas.renderAll();
          self.darkroom.canvas.setActiveObject(obj);
        }

      });

      var deleteButton = controlGroup.createButtonControl({
        label: '',
        type: 'button',
        value: '',
        title: 'DELETE',
        attributes: {
          class: 'darkroom-delete-button'
        },
        hide: true
      });

      deleteButton.element.click(this.deleteActiveObject.bind(this));

      this.deleteButton = deleteButton;

      return this;
    },

    _onObjectSelected: function(ev) {
      var obj = ev.target;
      var color = getColor(obj);
      var size = getSize(obj);
      var type = obj.get('type');

      this.colorInput.element.val(color);
      this.sizeRange.element.val(size);

      if (type == 'text' || type == 'i-text') {
        var fontFamily = getObjectProp('fontFamily', obj);
        this.fontSelection.element.val(fontFamily);
        this.fontSelection.hide(false);
      }

      this.deleteButton.hide(false);
    },

    _onObjectSelectionCleared: function(ev) {
      if (this.colorInput) {
        this.colorInput.element.val(this.colorInput.properties.value);
      }
      if (this.sizeRange) {
        this.sizeRange.element.val(this.sizeRange.properties.value);
      }
      this.fontSelection.hide(true);
      this.deleteButton.hide(true);
    },

    deleteActiveObject: function() {
      var activeObject = this.darkroom.canvas.getActiveObject();
      if (activeObject != null) {
        activeObject.remove();
      }
      this.deleteButton.hide(true);
    }
  });
})(window, document, Darkroom, fabric, jQuery);
