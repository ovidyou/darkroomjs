(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="arrow" viewBox="0 0 24 24"><path d="M24 11.871L19 7v3H0v4h19v3z"/></symbol><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="line" viewBox="0 0 24 24"><path d="M0 10h24v4H0z"/></symbol><symbol id="padding" viewBox="0 0 24 24"><path d="M22 6v12H6V6h16zm2-6H4v20h20V0zM2 22V3H0v21h21v-2H2z"/></symbol><symbol id="rect" viewBox="0 0 24 24"><path d="M22 2v20H2V2h20zm2-2H0v24h24V0z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="text" viewBox="0 0 24 24"><path d="M22 0H2v6h1.999c0-1.174.397-3 2.001-3h4v16.874C10 21.048 9.175 22 8 22H7v2h9.999v-2H16c-1.174 0-2-.952-2-2.126V3h4c1.649 0 2.02 1.826 2.02 3H22V0z"/></symbol><symbol id="trash-can" viewBox="0 0 24 24"><path d="M16 9v4.501a6.522 6.522 0 0 0-2 1.319V9a1 1 0 1 1 2 0zm-4 0v10a1 1 0 1 1-2 0V9a1 1 0 1 1 2 0zm1.82 15H2V6h2v16h8.502a6.507 6.507 0 0 0 1.318 2zM7 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm14-4H1V2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2H21v2zm-1 2v7.182A6.45 6.45 0 0 0 18.5 13l-.5.025V6h2zm3 13.5c0 2.485-2.017 4.5-4.5 4.5S14 21.985 14 19.5s2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122L18.5 18.792l-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol></svg><!-- endinject -->';
document.body.appendChild(element);

})();
;(function($) {
'use strict';

window.Darkroom = Darkroom;

// Core object of DarkroomJS.
// Basically it's a single object, instanciable via an element
// (it could be a CSS selector or a DOM element), some custom options,
// and a list of plugin objects (or none to use default ones).
function Darkroom(element, options, plugins) {
  return this.constructor(element, options, plugins);
}

// Create an empty list of plugin objects, which will be filled by
// other plugin scripts. This is the default plugin list if none is
// specified in Darkroom'ss constructor.
Darkroom.plugins = [];

Darkroom.prototype = {
  // Reference to the main container element
  containerElement: null,

  // Reference to the Fabric canvas object
  canvas: null,

  // Reference to the Fabric image object
  image: null,

  // Reference to the Fabric source canvas object
  sourceCanvas: null,

  // Reference to the Fabric source image object
  sourceImage: null,

  // Track of the original image element
  originalImageElement: null,

  // Stack of transformations to apply to the image source
  transformations: [],

  // Initialized state
  initialized: false,

  // Default options
  defaults: {
    // Canvas properties (dimension, ratio, color)
    minWidth: null,
    minHeight: null,
    maxWidth: null,
    maxHeight: null,
    ratio: null,
    backgroundColor: '#eeeeee',

    // Plugins options
    plugins: {},

    // Post-initialisation callback
    initialize: function() { /* noop */ }
  },

  // List of the instancied plugins
  plugins: {},

  // This options are a merge between `defaults` and the options passed
  // through the constructor
  options: {},

  constructor: function(element, options, plugins) {
    this.options = Darkroom.Utils.extend(options, this.defaults);

    if (typeof element === 'string')
      element = document.querySelector(element);
    if (null === element)
      return;

    var image = new Image();
    image.onload = function() {
      // Initialize the DOM/Fabric elements
      this._initializeDOM(element);
      this._initializeImage();

      // Then initialize the plugins
      this._initializePlugins(Darkroom.plugins);

      // Public method to adjust image according to the canvas
      this.refresh(function() {
        // Execute a custom callback after initialization
        this.options.initialize.bind(this).call();
        this.initialized = true;
        this.dispatchEvent('darkroom:initialized');
      }.bind(this));

    }.bind(this)

    //image.crossOrigin = 'anonymous';
    image.src = element.src;
  },

  selfDestroy: function() {
    var container = this.containerElement;
    var image = new Image();
    image.onload = function() {
      container.parentNode.replaceChild(image, container);
    }

    image.src = this.sourceImage.toDataURL();
  },

  // Add ability to attach event listener on the core object.
  // It uses the canvas element to process events.
  addEventListener: function(eventName, callback) {
    $(this.canvas.getElement()).on(eventName, callback);
  },

  dispatchEvent: function(eventName) {
    // Use the old way of creating event to be IE compatible
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    var event = document.createEvent('Event');
    event.initEvent(eventName, true, true);

    this.canvas.getElement().dispatchEvent(event);
  },

  // Adjust image & canvas dimension according to min/max width/height
  // and ratio specified in the options.
  // This method should be called after each image transformation.
  refresh: function(next) {
    var clone = new Image();
    clone.onload = function() {
      this._replaceCurrentImage(new fabric.Image(clone, {
        // Some options to make the image static
        selectable: false,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      }));

      if (next) next();
    }.bind(this);
    clone.src = this.sourceImage.toDataURL();
  },

  _replaceCurrentImage: function(newImage) {
    if (this.image) {
      this.image.remove();
    }

    this.image = newImage;

    // Adjust width or height according to specified ratio
    var viewport = Darkroom.Utils.computeImageViewPort(this.image);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;

    if (null !== this.options.ratio) {
      var canvasRatio = +this.options.ratio;
      var currentRatio = canvasWidth / canvasHeight;

      if (currentRatio > canvasRatio) {
        canvasHeight = canvasWidth / canvasRatio;
      } else if (currentRatio < canvasRatio) {
        canvasWidth = canvasHeight * canvasRatio;
      }
    }

    // Then scale the image to fit into dimension limits
    var scaleMin = 1;
    var scaleMax = 1;
    var scaleX = 1;
    var scaleY = 1;

    if (null !== this.options.maxWidth && this.options.maxWidth < canvasWidth) {
      scaleX =  this.options.maxWidth / canvasWidth;
    }
    if (null !== this.options.maxHeight && this.options.maxHeight < canvasHeight) {
      scaleY =  this.options.maxHeight / canvasHeight;
    }
    scaleMin = Math.min(scaleX, scaleY);

    scaleX = 1;
    scaleY = 1;
    if (null !== this.options.minWidth && this.options.minWidth > canvasWidth) {
      scaleX =  this.options.minWidth / canvasWidth;
    }
    if (null !== this.options.minHeight && this.options.minHeight > canvasHeight) {
      scaleY =  this.options.minHeight / canvasHeight;
    }
    scaleMax = Math.max(scaleX, scaleY);

    var scale = scaleMax * scaleMin; // one should be equals to 1

    canvasWidth *= scale;
    canvasHeight *= scale;

    // Finally place the image in the center of the canvas
    this.image.setScaleX(1 * scale);
    this.image.setScaleY(1 * scale);
    this.canvas.add(this.image);
    this.canvas.setWidth(canvasWidth);
    this.canvas.setHeight(canvasHeight);
    this.canvas.centerObject(this.image);
    this.image.setCoords();
    this.dispatchEvent('darkroom:image:replaced');
  },

  // Apply the transformation on the current image and save it in the
  // transformations stack (in order to reconstitute the previous states
  // of the image).
  applyTransformation: function(transformation) {
    this.transformations.push(transformation);

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      this._postTransformation.bind(this)
    );
  },

  _postTransformation: function(newImage) {
    if (newImage)
      this.sourceImage = newImage;

    this.refresh(function() {
      this.dispatchEvent('core:transformation');
    }.bind(this));
  },

  // Initialize image from original element plus re-apply every
  // transformations.
  reinitializeImage: function() {
    this.sourceImage.remove();
    this._initializeImage();
    this._popTransformation(this.transformations.slice())
  },

  _popTransformation: function(transformations) {
    if (0 === transformations.length) {
      this.dispatchEvent('core:reinitialized');
      this.refresh();
      return;
    }

    var transformation = transformations.shift();

    var next = function(newImage) {
      if (newImage) this.sourceImage = newImage;
      this._popTransformation(transformations)
    };

    transformation.applyTransformation(
      this.sourceCanvas,
      this.sourceImage,
      next.bind(this)
    );
  },

  // Create the DOM elements and instanciate the Fabric canvas.
  // The image element is replaced by a new `div` element.
  // However the original image is re-injected in order to keep a trace of it.
  _initializeDOM: function(imageElement) {
    // Container
    var mainContainerElement = document.createElement('div');
    mainContainerElement.className = 'darkroom-container';

    // Toolbar
    var toolbarElement = document.createElement('div');
    toolbarElement.className = 'darkroom-toolbar';
    mainContainerElement.appendChild(toolbarElement);

    // Viewport canvas
    var canvasContainerElement = document.createElement('div');
    canvasContainerElement.className = 'darkroom-image-container';
    var canvasElement = document.createElement('canvas');
    canvasContainerElement.appendChild(canvasElement);
    mainContainerElement.appendChild(canvasContainerElement);

    // Source canvas
    var sourceCanvasContainerElement = document.createElement('div');
    sourceCanvasContainerElement.className = 'darkroom-source-container';
    sourceCanvasContainerElement.style.display = 'none';
    var sourceCanvasElement = document.createElement('canvas');
    sourceCanvasContainerElement.appendChild(sourceCanvasElement);
    mainContainerElement.appendChild(sourceCanvasContainerElement);

    // Original image
    imageElement.parentNode.replaceChild(mainContainerElement, imageElement);
    imageElement.style.display = 'none';
    mainContainerElement.appendChild(imageElement);

    // Instanciate object from elements
    this.containerElement = mainContainerElement;
    this.originalImageElement = imageElement;

    this.toolbar = new Darkroom.UI.Toolbar(toolbarElement);

    this.canvas = new fabric.Canvas(canvasElement, {
      selection: true,
      backgroundColor: this.options.backgroundColor
    });

    this.sourceCanvas = new fabric.Canvas(sourceCanvasElement, {
      selection: true,
      backgroundColor: this.options.backgroundColor
    });
  },

  // Instanciate the Fabric image object.
  // The image is created as a static element with no control,
  // then it is add in the Fabric canvas object.
  _initializeImage: function() {
    this.sourceImage = new fabric.Image(this.originalImageElement, {
      // Some options to make the image static
      selectable: false,
      evented: false,
      lockMovementX: true,
      lockMovementY: true,
      lockRotation: true,
      lockScalingX: true,
      lockScalingY: true,
      lockUniScaling: true,
      hasControls: false,
      hasBorders: false,
    });

    this.sourceCanvas.add(this.sourceImage);

    // Adjust width or height according to specified ratio
    var viewport = Darkroom.Utils.computeImageViewPort(this.sourceImage);
    var canvasWidth = viewport.width;
    var canvasHeight = viewport.height;

    this.sourceCanvas.setWidth(canvasWidth);
    this.sourceCanvas.setHeight(canvasHeight);
    this.sourceCanvas.centerObject(this.sourceImage);
    this.sourceImage.setCoords();
  },

  // Initialize every plugins.
  // Note that plugins are instanciated in the same order than they
  // are declared in the parameter object.
  _initializePlugins: function(plugins) {
    for (var name in plugins) {
      var plugin = plugins[name];
      var options = this.options.plugins[name];

      // Setting false into the plugin options will disable the plugin
      if (options === false)
        continue;

      // Avoid any issues with _proto_
      if (!plugins.hasOwnProperty(name))
        continue;

      this.plugins[name] = new plugin(this, options);
    }
  },
}

})(jQuery);
;(function() {
'use strict';

Darkroom.Plugin = Plugin;

// Define a plugin object. This is the (abstract) parent class which
// has to be extended for each plugin.
function Plugin(darkroom, options) {
  this.darkroom = darkroom;
  this.options = Darkroom.Utils.extend(options, this.defaults);
  this.initialize();
}

Plugin.prototype = {
  defaults: {},
  initialize: function() { }
}

// Inspired by Backbone.js extend capability.
Plugin.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.Transformation = Transformation;

function Transformation(options) {
  this.options = options;
}

Transformation.prototype = {
  applyTransformation: function(image) { /* no-op */  }
}

// Inspired by Backbone.js extend capability.
Transformation.extend = function(protoProps) {
  var parent = this;
  var child;

  if (protoProps && protoProps.hasOwnProperty('constructor')) {
    child = protoProps.constructor;
  } else {
    child = function(){ return parent.apply(this, arguments); };
  }

  Darkroom.Utils.extend(child, parent);

  var Surrogate = function(){ this.constructor = child; };
  Surrogate.prototype = parent.prototype;
  child.prototype = new Surrogate;

  if (protoProps) Darkroom.Utils.extend(child.prototype, protoProps);

  child.__super__ = parent.prototype;

  return child;
}

})();
;(function() {
'use strict';

Darkroom.UI = {
  Toolbar: Toolbar,
  ButtonGroup: ButtonGroup,
  Button: Button,
};

// Toolbar object.
function Toolbar(element) {
  this.element = element;
}

Toolbar.prototype = {
  createButtonGroup: function(options) {
    var buttonGroup = document.createElement('div');
    buttonGroup.className = 'darkroom-button-group';
    this.element.appendChild(buttonGroup);

    return new ButtonGroup(buttonGroup);
  }
};

// ButtonGroup object.
function ButtonGroup(element) {
  this.element = element;
}

ButtonGroup.prototype = {
  createButton: function(options) {
    var defaults = {
      image: 'help',
      type: 'default',
      group: 'default',
      title: '',
      hide: false,
      disabled: false
    };

    options = Darkroom.Utils.extend(options, defaults);

    var buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.className = 'darkroom-button darkroom-button-' + options.type;
    buttonElement.title = options.title;
    buttonElement.innerHTML = '<svg class="darkroom-icon"><use xlink:href="#' + options.image + '" /></svg>';
    this.element.appendChild(buttonElement);

    var button = new Button(buttonElement);
    button.hide(options.hide);
    button.disable(options.disabled);

    return button;
  }
}

// Button object.
function Button(element) {
  this.element = element;
}

Button.prototype = {
  addEventListener: function(eventName, listener) {
    jQuery(this.element).on(eventName, listener);
  },
  removeEventListener: function(eventName, listener) {
    if (this.element.removeEventListener){
      jQuery(this.element).off(eventName, listener);
    }
  },
  active: function(value) {
    if (value)
      this.element.classList.add('darkroom-button-active');
    else
      this.element.classList.remove('darkroom-button-active');
  },
  hide: function(value) {
    if (value)
      this.element.classList.add('darkroom-button-hidden');
    else
      this.element.classList.remove('darkroom-button-hidden');
  },
  disable: function(value) {
    this.element.disabled = (value) ? true : false;
  }
};

})();
;(function() {
'use strict';

Darkroom.Utils = {
  extend: extend,
  computeImageViewPort: computeImageViewPort,
};


// Utility method to easily extend objects.
function extend(b, a) {
  var prop;
  if (b === undefined) {
    return a;
  }
  for (prop in a) {
    if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop) === false) {
      b[prop] = a[prop];
    }
  }
  return b;
}

function computeImageViewPort(image) {
  return {
    height: Math.abs(image.getWidth() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getHeight() * (Math.cos(image.getAngle() * Math.PI/180))),
    width: Math.abs(image.getHeight() * (Math.sin(image.getAngle() * Math.PI/180))) + Math.abs(image.getWidth() * (Math.cos(image.getAngle() * Math.PI/180))),
  }
}

})();
;(function($) {
'use strict';

var Padding = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {

    return next();

    var viewport = Darkroom.Utils.computeImageViewPort(image);
    var imageWidth = viewport.width;
    var imageHeight = viewport.height;

    var left = this.options.left * imageWidth;
    var top = this.options.top * imageHeight;
    var width = Math.min(this.options.width * imageWidth, imageWidth - left);
    var height = Math.min(this.options.height * imageHeight, imageHeight - top);

  }
});

Darkroom.plugins['padding'] = Darkroom.Plugin.extend({
  defaults: {},

  initialize: function InitDarkroomPaddingPlugin() {
    this.paddingEnabled = false;
    var canvas = this.darkroom.canvas;

    canvas.padding = canvas.padding || {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };

    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.paddingButton = buttonGroup.createButton({
      image: 'padding',
      title: 'Canvas Padding'
    });
    this.okButton = buttonGroup.createButton({
      image: 'done',
      type: 'success',
      hide: true
    });
    this.cancelButton = buttonGroup.createButton({
      image: 'close',
      type: 'danger',
      hide: true
    });

    // Buttons click
    this.paddingButton.addEventListener('click', this.togglePadding.bind(this));
    this.okButton.addEventListener('click', this.applyPadding.bind(this));
    this.cancelButton.addEventListener('click', this.cancelPadding.bind(this));

    $(canvas.getElement()).on('darkroom:image:replaced', this.pad.bind(this));
  },

  togglePadding: function() {

    if (!this.paddingEnabled) {
      this.enablePadding();
    }
    else {
      this.disablePadding();

    }
  },

  enablePadding: function() {
    this.paddingEnabled = true;
    this.paddingButton.active(true);
    //this.okButton.hide(false);
    //this.cancelButton.hide(false);

    for (var i in this.darkroom.plugins['controls']['canvasPaddingControls']) {
      var control = this.darkroom.plugins['controls']['canvasPaddingControls'][i];
      control.hide(false);
    }
  },

  disablePadding: function() {
    this.paddingEnabled = false;
    this.paddingButton.active(false);
    this.okButton.hide(true);
    this.cancelButton.hide(true);

    for (var i in this.darkroom.plugins['controls']['canvasPaddingControls']) {
      var control = this.darkroom.plugins['controls']['canvasPaddingControls'][i];
      control.hide(true);
    }
  },

  // Apply Padding
  applyPadding: function() {
    this.paddingButton.active(false);
    this.okButton.hide(true);
    this.cancelButton.hide(true);

    this.darkroom.dispatchEvent('padding:update');
  },

  // Cancel padding
  cancelPadding: function() {

    this.disablePadding();

    this.darkroom.dispatchEvent('padding:update');
  },

  pad: function(key, value) {
    var canvas = this.darkroom.canvas;
    var image = this.darkroom.image;
    var viewport = Darkroom.Utils.computeImageViewPort(image);

    if (key) {
      canvas.padding[key] = value;
    }

    var left = parseInt(canvas.padding.left, 10) || 0;
    var right = parseInt(canvas.padding.right, 10) || 0;
    var top = parseInt(canvas.padding.top, 10) || 0;
    var bottom = parseInt(canvas.padding.bottom, 10) || 0;

    var cw = viewport.width + left + right;
    var ch = viewport.height + top + bottom;

    canvas.setWidth(cw);
    canvas.setHeight(ch);

    image.left = left;
    image.top = top;

    canvas.renderAll();
  }

});

})(jQuery);
;;(function(window, document, Darkroom, fabric) {
  'use strict';

  Darkroom.plugins['history'] = Darkroom.Plugin.extend({
    undoTransformations: [],

    initialize: function InitDarkroomHistoryPlugin() {
      this._initButtons();

      this.darkroom.addEventListener('core:transformation', this._onTranformationApplied.bind(this));
    },

    undo: function() {
      if (this.darkroom.transformations.length === 0) {
        return;
      }

      var lastTransformation = this.darkroom.transformations.pop();
      this.undoTransformations.unshift(lastTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    redo: function() {
      if (this.undoTransformations.length === 0) {
        return;
      }

      var cancelTransformation = this.undoTransformations.shift();
      this.darkroom.transformations.push(cancelTransformation);

      this.darkroom.reinitializeImage();
      this._updateButtons();
    },

    _initButtons: function() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      this.backButton = buttonGroup.createButton({
        image: 'undo',
        title: 'Undo',
        disabled: true
      });

      this.forwardButton = buttonGroup.createButton({
        image: 'redo',
        title: 'Redo',
        disabled: true
      });

      this.backButton.addEventListener('click', this.undo.bind(this));
      this.forwardButton.addEventListener('click', this.redo.bind(this));

      return this;
    },

    _updateButtons: function() {
      this.backButton.disable((this.darkroom.transformations.length === 0))
      this.forwardButton.disable((this.undoTransformations.length === 0))
    },

    _onTranformationApplied: function() {
      this.undoTransformations = [];
      this._updateButtons();
    }
  });
})(window, document, Darkroom, fabric);
;(function() {
'use strict';

var Rotation = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    var angle = (image.getAngle() + this.options.angle) % 360;
    image.rotate(angle);

    var width, height;
    height = Math.abs(image.getWidth()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getHeight()*(Math.cos(angle*Math.PI/180)));
    width = Math.abs(image.getHeight()*(Math.sin(angle*Math.PI/180)))+Math.abs(image.getWidth()*(Math.cos(angle*Math.PI/180)));

    canvas.setWidth(width);
    canvas.setHeight(height);

    canvas.centerObject(image);
    image.setCoords();
    canvas.renderAll();

    next();
  }
});

Darkroom.plugins['rotate'] = Darkroom.Plugin.extend({

  initialize: function InitDarkroomRotatePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    var leftButton = buttonGroup.createButton({
      image: 'rotate-left',
      title: 'Rotate Left'
    });

    var rightButton = buttonGroup.createButton({
      image: 'rotate-right',
      title: 'Rotate Right'
    });

    leftButton.addEventListener('click', this.rotateLeft.bind(this));
    rightButton.addEventListener('click', this.rotateRight.bind(this));
  },

  rotateLeft: function rotateLeft() {
    this.rotate(-90);
  },

  rotateRight: function rotateRight() {
    this.rotate(90);
  },

  rotate: function rotate(angle) {
    this.darkroom.applyTransformation(
      new Rotation({angle: angle})
    );
  }

});

})();
;(function() {
'use strict';

var Crop = Darkroom.Transformation.extend({
  applyTransformation: function(canvas, image, next) {
    // Snapshot the image delimited by the crop zone
    var snapshot = new Image();
    snapshot.onload = function() {
      // Validate image
      if (height < 1 || width < 1)
        return;

      var imgInstance = new fabric.Image(this, {
        // options to make the image static
        selectable: false,
        evented: false,
        lockMovementX: true,
        lockMovementY: true,
        lockRotation: true,
        lockScalingX: true,
        lockScalingY: true,
        lockUniScaling: true,
        hasControls: false,
        hasBorders: false
      });

      var width = this.width;
      var height = this.height;

      // Update canvas size
      canvas.setWidth(width);
      canvas.setHeight(height);

      // Add image
      image.remove();
      canvas.add(imgInstance);

      next(imgInstance);
    };

    var viewport = Darkroom.Utils.computeImageViewPort(image);
    var imageWidth = viewport.width;
    var imageHeight = viewport.height;

    var left = this.options.left * imageWidth;
    var top = this.options.top * imageHeight;
    var width = Math.min(this.options.width * imageWidth, imageWidth - left);
    var height = Math.min(this.options.height * imageHeight, imageHeight - top);

    snapshot.src = canvas.toDataURL({
      left: left,
      top: top,
      width: width,
      height: height,
    });
  }
});

var CropZone = fabric.util.createClass(fabric.Rect, {
  _render: function(ctx) {
    this.callSuper('_render', ctx);

    var canvas = ctx.canvas;
    var dashWidth = 7;

    // Set original scale
    var flipX = this.flipX ? -1 : 1;
    var flipY = this.flipY ? -1 : 1;
    var scaleX = flipX / this.scaleX;
    var scaleY = flipY / this.scaleY;

    ctx.scale(scaleX, scaleY);

    // Overlay rendering
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this._renderOverlay(ctx);

    // Set dashed borders
    if (ctx.setLineDash !== undefined)
      ctx.setLineDash([dashWidth, dashWidth]);
    else if (ctx.mozDash !== undefined)
      ctx.mozDash = [dashWidth, dashWidth];

    // First lines rendering with black
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Re render lines in white
    ctx.lineDashOffset = dashWidth;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    this._renderBorders(ctx);
    this._renderGrid(ctx);

    // Reset scale
    ctx.scale(1/scaleX, 1/scaleY);
  },

  _renderOverlay: function(ctx) {
    var canvas = ctx.canvas;

    //
    //    x0    x1        x2      x3
    // y0 +------------------------+
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    // y1 +------+---------+-------+
    //    |\\\\\\|         |\\\\\\\|
    //    |\\\\\\|    0    |\\\\\\\|
    //    |\\\\\\|         |\\\\\\\|
    // y2 +------+---------+-------+
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    //    |\\\\\\\\\\\\\\\\\\\\\\\\|
    // y3 +------------------------+
    //

    var x0 = Math.ceil(-this.getWidth() / 2 - this.getLeft());
    var x1 = Math.ceil(-this.getWidth() / 2);
    var x2 = Math.ceil(this.getWidth() / 2);
    var x3 = Math.ceil(this.getWidth() / 2 + (canvas.width - this.getWidth() - this.getLeft()));

    var y0 = Math.ceil(-this.getHeight() / 2 - this.getTop());
    var y1 = Math.ceil(-this.getHeight() / 2);
    var y2 = Math.ceil(this.getHeight() / 2);
    var y3 = Math.ceil(this.getHeight() / 2 + (canvas.height - this.getHeight() - this.getTop()));

    ctx.beginPath();

    // Draw outer rectangle.
    // Numbers are +/-1 so that overlay edges don't get blurry.
    ctx.moveTo(x0 - 1, y0 - 1);
    ctx.lineTo(x3 + 1, y0 - 1);
    ctx.lineTo(x3 + 1, y3 + 1);
    ctx.lineTo(x0 - 1, y3 - 1);
    ctx.lineTo(x0 - 1, y0 - 1);
    ctx.closePath();

    // Draw inner rectangle.
    ctx.moveTo(x1, y1);
    ctx.lineTo(x1, y2);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x2, y1);
    ctx.lineTo(x1, y1);

    ctx.closePath();
    ctx.fill();
  },

  _renderBorders: function(ctx) {
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2); // upper right
    ctx.lineTo(this.getWidth()/2, this.getHeight()/2); // down right
    ctx.lineTo(-this.getWidth()/2, this.getHeight()/2); // down left
    ctx.lineTo(-this.getWidth()/2, -this.getHeight()/2); // upper left
    ctx.stroke();
  },

  _renderGrid: function(ctx) {
    // Vertical lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 1/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 1/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2 + 2/3 * this.getWidth(), -this.getHeight()/2);
    ctx.lineTo(-this.getWidth()/2 + 2/3 * this.getWidth(), this.getHeight()/2);
    ctx.stroke();
    // Horizontal lines
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 1/3 * this.getHeight());
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(-this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.lineTo(this.getWidth()/2, -this.getHeight()/2 + 2/3 * this.getHeight());
    ctx.stroke();
  }
});

Darkroom.plugins['crop'] = Darkroom.Plugin.extend({
  // Init point
  startX: null,
  startY: null,

  // Keycrop
  isKeyCroping: false,
  isKeyLeft: false,
  isKeyUp: false,

  defaults: {
    // min crop dimension
    minHeight: 1,
    minWidth: 1,
    // ensure crop ratio
    ratio: null,
    // quick crop feature (set a key code to enable it)
    quickCropKey: false
  },

  initialize: function InitDarkroomCropPlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.cropButton = buttonGroup.createButton({
      image: 'crop',
      title: 'Crop Image'
    });
    this.okButton = buttonGroup.createButton({
      image: 'done',
      type: 'success',
      hide: true
    });
    this.cancelButton = buttonGroup.createButton({
      image: 'close',
      type: 'danger',
      hide: true
    });

    // Buttons click
    this.cropButton.addEventListener('click', this.toggleCrop.bind(this));
    this.okButton.addEventListener('click', this.cropCurrentZone.bind(this));
    this.cancelButton.addEventListener('click', this.releaseFocus.bind(this));

    // Canvas events
    this.darkroom.canvas.on('mouse:down', this.onMouseDown.bind(this));
    this.darkroom.canvas.on('mouse:move', this.onMouseMove.bind(this));
    this.darkroom.canvas.on('mouse:up', this.onMouseUp.bind(this));
    this.darkroom.canvas.on('object:moving', this.onObjectMoving.bind(this));
    this.darkroom.canvas.on('object:scaling', this.onObjectScaling.bind(this));

    fabric.util.addListener(fabric.document, 'keydown', this.onKeyDown.bind(this));
    fabric.util.addListener(fabric.document, 'keyup', this.onKeyUp.bind(this));

    this.darkroom.addEventListener('core:transformation', this.releaseFocus.bind(this));
  },

  // Avoid crop zone to go beyond the canvas edges
  onObjectMoving: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var x = currentObject.getLeft(), y = currentObject.getTop();
    var w = currentObject.getWidth(), h = currentObject.getHeight();
    var maxX = canvas.getWidth() - w;
    var maxY = canvas.getHeight() - h;

    if (x < 0)
      currentObject.set('left', 0);
    if (y < 0)
      currentObject.set('top', 0);
    if (x > maxX)
      currentObject.set('left', maxX);
    if (y > maxY)
      currentObject.set('top', maxY);

    this.darkroom.dispatchEvent('crop:update');
  },

  // Prevent crop zone from going beyond the canvas edges (like mouseMove)
  onObjectScaling: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var preventScaling = false;
    var currentObject = event.target;
    if (currentObject !== this.cropZone)
      return;

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    var minX = currentObject.getLeft();
    var minY = currentObject.getTop();
    var maxX = currentObject.getLeft() + currentObject.getWidth();
    var maxY = currentObject.getTop() + currentObject.getHeight();

    if (null !== this.options.ratio) {
      if (minX < 0 || maxX > canvas.getWidth() || minY < 0 || maxY > canvas.getHeight()) {
        preventScaling = true;
      }
    }

    if (minX < 0 || maxX > canvas.getWidth() || preventScaling) {
      var lastScaleX = this.lastScaleX || 1;
      currentObject.setScaleX(lastScaleX);
    }
    if (minX < 0) {
      currentObject.setLeft(0);
    }

    if (minY < 0 || maxY > canvas.getHeight() || preventScaling) {
      var lastScaleY = this.lastScaleY || 1;
      currentObject.setScaleY(lastScaleY);
    }
    if (minY < 0) {
      currentObject.setTop(0);
    }

    if (currentObject.getWidth() < this.options.minWidth) {
      currentObject.scaleToWidth(this.options.minWidth);
    }
    if (currentObject.getHeight() < this.options.minHeight) {
      currentObject.scaleToHeight(this.options.minHeight);
    }

    this.lastScaleX = currentObject.getScaleX();
    this.lastScaleY = currentObject.getScaleY();

    this.darkroom.dispatchEvent('crop:update');
  },

  // Init crop zone
  onMouseDown: function(event) {
    if (!this.hasFocus()) {
      return;
    }

    var canvas = this.darkroom.canvas;

    // recalculate offset, in case canvas was manipulated since last `calcOffset`
    canvas.calcOffset();
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;
    var point = new fabric.Point(x, y);

    // Check if user want to scale or drag the crop zone.
    var activeObject = canvas.getActiveObject();
    if (activeObject === this.cropZone || this.cropZone.containsPoint(point)) {
      return;
    }

    canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);

    this.startX = x;
    this.startY = y;
  },

  // Extend crop zone
  onMouseMove: function(event) {
    // Quick crop feature
    if (this.isKeyCroping)
      return this.onMouseMoveKeyCrop(event);

    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    this._renderCropZone(this.startX, this.startY, x, y);
  },

  onMouseMoveKeyCrop: function(event) {
    var canvas = this.darkroom.canvas;
    var zone = this.cropZone;

    var pointer = canvas.getPointer(event.e);
    var x = pointer.x;
    var y = pointer.y;

    if (!zone.left || !zone.top) {
      zone.setTop(y);
      zone.setLeft(x);
    }

    this.isKeyLeft =  x < zone.left + zone.width / 2 ;
    this.isKeyUp = y < zone.top + zone.height / 2 ;

    this._renderCropZone(
      Math.min(zone.left, x),
      Math.min(zone.top, y),
      Math.max(zone.left+zone.width, x),
      Math.max(zone.top+zone.height, y)
    );
  },

  // Finish crop zone
  onMouseUp: function(event) {
    if (null === this.startX || null === this.startY) {
      return;
    }

    var canvas = this.darkroom.canvas;
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.startX = null;
    this.startY = null;
  },

  onKeyDown: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || this.isKeyCroping)
      return;

    // Active quick crop flow
    this.isKeyCroping = true ;
    this.darkroom.canvas.discardActiveObject();
    this.cropZone.setWidth(0);
    this.cropZone.setHeight(0);
    this.cropZone.setScaleX(1);
    this.cropZone.setScaleY(1);
    this.cropZone.setTop(0);
    this.cropZone.setLeft(0);
  },

  onKeyUp: function(event) {
    if (false === this.options.quickCropKey || event.keyCode !== this.options.quickCropKey || !this.isKeyCroping)
      return;

    // Unactive quick crop flow
    this.isKeyCroping = false;
    this.startX = 1;
    this.startY = 1;
    this.onMouseUp();
  },

  selectZone: function(x, y, width, height, forceDimension) {
    if (!this.hasFocus())
      this.requireFocus();

    if (!forceDimension) {
      this._renderCropZone(x, y, x+width, y+height);
    } else {
      this.cropZone.set({
        'left': x,
        'top': y,
        'width': width,
        'height': height
      });
    }

    var canvas = this.darkroom.canvas;
    canvas.bringToFront(this.cropZone);
    this.cropZone.setCoords();
    canvas.setActiveObject(this.cropZone);
    canvas.calcOffset();

    this.darkroom.dispatchEvent('crop:update');
  },

  toggleCrop: function() {
    if (!this.hasFocus())
      this.requireFocus();
    else
      this.releaseFocus();
  },

  cropCurrentZone: function() {
    if (!this.hasFocus())
      return;

    // Avoid croping empty zone
    if (this.cropZone.width < 1 && this.cropZone.height < 1)
      return;

    var image = this.darkroom.image;

    // Compute crop zone dimensions
    var top = this.cropZone.getTop() - image.getTop();
    var left = this.cropZone.getLeft() - image.getLeft();
    var width = this.cropZone.getWidth();
    var height = this.cropZone.getHeight();

    // Adjust dimensions to image only
    if (top < 0) {
      height += top;
      top = 0;
    }

    if (left < 0) {
      width += left;
      left = 0;
    }

    // Apply crop transformation.
    // Make sure to use relative dimension since the crop will be applied
    // on the source image.
    this.darkroom.applyTransformation(new Crop({
      top: top / image.getHeight(),
      left: left / image.getWidth(),
      width: width / image.getWidth(),
      height: height / image.getHeight(),
    }));
  },

  // Test wether crop zone is set
  hasFocus: function() {
    return this.cropZone !== undefined;
  },

  // Create the crop zone
  requireFocus: function() {
    this.cropZone = new CropZone({
      fill: 'transparent',
      hasBorders: false,
      originX: 'left',
      originY: 'top',
      //stroke: '#444',
      //strokeDashArray: [5, 5],
      //borderColor: '#444',
      cornerColor: '#444',
      cornerSize: 8,
      transparentCorners: false,
      lockRotation: true,
      hasRotatingPoint: false,
    });

    if (null !== this.options.ratio) {
      this.cropZone.set('lockUniScaling', true);
    }

    this.darkroom.canvas.add(this.cropZone);
    this.darkroom.canvas.defaultCursor = 'crosshair';

    this.cropButton.active(true);
    this.okButton.hide(false);
    this.cancelButton.hide(false);
  },

  // Remove the crop zone
  releaseFocus: function() {
    if (undefined === this.cropZone)
      return;

    this.cropZone.remove();
    this.cropZone = undefined;

    this.cropButton.active(false);
    this.okButton.hide(true);
    this.cancelButton.hide(true);

    this.darkroom.canvas.defaultCursor = 'default';

    this.darkroom.dispatchEvent('crop:update');
  },

  _renderCropZone: function(fromX, fromY, toX, toY) {
    var canvas = this.darkroom.canvas;

    var isRight = (toX > fromX);
    var isLeft = !isRight;
    var isDown = (toY > fromY);
    var isUp = !isDown;

    var minWidth = Math.min(+this.options.minWidth, canvas.getWidth());
    var minHeight = Math.min(+this.options.minHeight, canvas.getHeight());

    // Define corner coordinates
    var leftX = Math.min(fromX, toX);
    var rightX = Math.max(fromX, toX);
    var topY = Math.min(fromY, toY);
    var bottomY = Math.max(fromY, toY);

    // Replace current point into the canvas
    leftX = Math.max(0, leftX);
    rightX = Math.min(canvas.getWidth(), rightX);
    topY = Math.max(0, topY)
    bottomY = Math.min(canvas.getHeight(), bottomY);

    // Recalibrate coordinates according to given options
    if (rightX - leftX < minWidth) {
      if (isRight)
        rightX = leftX + minWidth;
      else
        leftX = rightX - minWidth;
    }
    if (bottomY - topY < minHeight) {
      if (isDown)
        bottomY = topY + minHeight;
      else
        topY = bottomY - minHeight;
    }

    // Truncate truncate according to canvas dimensions
    if (leftX < 0) {
      // Translate to the left
      rightX += Math.abs(leftX);
      leftX = 0
    }
    if (rightX > canvas.getWidth()) {
      // Translate to the right
      leftX -= (rightX - canvas.getWidth());
      rightX = canvas.getWidth();
    }
    if (topY < 0) {
      // Translate to the bottom
      bottomY += Math.abs(topY);
      topY = 0
    }
    if (bottomY > canvas.getHeight()) {
      // Translate to the right
      topY -= (bottomY - canvas.getHeight());
      bottomY = canvas.getHeight();
    }

    var width = rightX - leftX;
    var height = bottomY - topY;
    var currentRatio = width / height;

    if (this.options.ratio && +this.options.ratio !== currentRatio) {
      var ratio = +this.options.ratio;

      if(this.isKeyCroping) {
        isLeft = this.isKeyLeft;
        isUp = this.isKeyUp;
      }

      if (currentRatio < ratio) {
        var newWidth = height * ratio;
        if (isLeft) {
          leftX -= (newWidth - width);
        }
        width = newWidth;
      } else if (currentRatio > ratio) {
        var newHeight = height / (ratio * height/width);
        if (isUp) {
          topY -= (newHeight - height);
        }
        height = newHeight;
      }

      if (leftX < 0) {
        leftX = 0;
        //TODO
      }
      if (topY < 0) {
        topY = 0;
        //TODO
      }
      if (leftX + width > canvas.getWidth()) {
        var newWidth = canvas.getWidth() - leftX;
        height = newWidth * height / width;
        width = newWidth;
        if (isUp) {
          topY = fromY - height;
        }
      }
      if (topY + height > canvas.getHeight()) {
        var newHeight = canvas.getHeight() - topY;
        width = width * newHeight / height;
        height = newHeight;
        if (isLeft) {
          leftX = fromX - width;
        }
      }
    }

    // Apply coordinates
    this.cropZone.left = leftX;
    this.cropZone.top = topY;
    this.cropZone.width = width;
    this.cropZone.height = height;

    this.darkroom.canvas.bringToFront(this.cropZone);

    this.darkroom.dispatchEvent('crop:update');
  }
});

})();
;(function () {
  'use strict';


  Darkroom.plugins['line'] = Darkroom.Plugin.extend({

    initialize: function InitDarkroomBoxPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      var lineButton = buttonGroup.createButton({
        image: 'line',
        title: 'Add Line'
      });

      lineButton.addEventListener('click', this.addLine.bind(this));
    },

    addLine: function addLine() {
      var canvas = this.darkroom.canvas;
      var image = this.darkroom.image;
      var factor = image.scaleX;

      var line = new fabric.Line([0, 200, 0, 0], {
        left: 200,
        top: 100,
        width: 300,
        stroke: 'red',
        strokeWidth: 2,
        //lockUniScaling: true,
        lockSkewingX: true,
        lockSkewingY: true,
        //lockScalingX: true,
        //lockScalingY: true,
        padding: 20,
        scaleX: factor,
        scaleY: factor
      });

      line.on({
        scaling: function (e) {
          var obj = this,
            w = obj.width * obj.scaleX / factor,
            h = obj.height * obj.scaleY / factor;

          obj.set({
            width: w,
            height: h,
            scaleX: factor,
            scaleY: factor
          });
        }
      });

      canvas.add(line);
    }

  });

})();
;(function () {
  'use strict';


  Darkroom.plugins['arrow'] = Darkroom.Plugin.extend({

    initialize: function InitDarkroomBoxPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      var arrowButton = buttonGroup.createButton({
        image: 'arrow',
        title: 'Add Arrow'
      });

      arrowButton.addEventListener('click', this.addArrow.bind(this));
    },

    addArrow: function addArrow() {
      var canvas = this.darkroom.canvas;
      var image = this.darkroom.image;
      var factor = image.scaleX;

      var line = new fabric.Arrow([50, 50, 50, 200], {
        stroke: 'red',
        strokeWidth: 2,
        //hasBorders: false,
        //hasControls: false,
        originX: 'center',
        originY: 'center',
        //lockScalingX: true,
        //lockScalingY: true,
        lockSkewingX: true,
        lockSkewingY: true,
        padding: 20,
        scaleX: factor,
        scaleY: factor
      });

      canvas.add(line);

      line.on({
        scaling: function (e) {
          var factor = image.scaleX;

          var obj = this,
            w = obj.width * obj.scaleX / factor,
            h = obj.height * obj.scaleY / factor;

          obj.set({
            width: w,
            height: h,
            scaleX: factor,
            scaleY: factor
          });
        }
      });
    }

  });

})();
;(function () {
  'use strict';


  Darkroom.plugins['rect'] = Darkroom.Plugin.extend({

    initialize: function InitDarkroomBoxPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      var rectButton = buttonGroup.createButton({
        image: 'rect',
        title: 'Add Rect'
      });

      rectButton.addEventListener('click', this.addRect.bind(this));
    },

    addRect: function addRect() {
      var canvas = this.darkroom.canvas;
      var image = this.darkroom.image;
      var factor = image.scaleX;

      var rect = new fabric.Rect({
        left: 100 * factor,
        top: 100 * factor,
        fill: 'rgba(0,0,0,0)',
        width: this.darkroom.image.width / 4,
        height: 40,
        strokeWidth: 2,
        stroke: 'red',
        angle: 0,
        scaleX: factor,
        scaleY: factor,
        padding: 14
      });

      rect.on({
        scaling: function (e) {
          var factor = image.scaleX;

          var obj = this,
            w = obj.width * obj.scaleX / factor,
            h = obj.height * obj.scaleY / factor;

          obj.set({
            width: w,
            height: h,
            scaleX: factor,
            scaleY: factor
          });
        }
      });

      canvas.add(rect);
    }

  });

})();
;(function ($) {
  'use strict';


  Darkroom.plugins['text'] = Darkroom.Plugin.extend({

    initialize: function InitDarkroomBoxPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      var textButton = buttonGroup.createButton({
        image: 'text',
        title: 'Add Text'
      });

      textButton.addEventListener('click', this.addText.bind(this));
    },

    addText: function addText(options) {
      var canvas = this.darkroom.canvas;
      var image = this.darkroom.image;
      var factor = image.scaleX;

      var defaults = {
        text: 'Sample Text...',
        fill: 'red',
        fontFamily: 'Monospace',
        fontSize: 12,
        left: 100 * factor,
        top: 100 * factor
      };

      var options = $.extend(true, defaults, options);

      var text = new fabric.IText(options.text, {
        left: options.left,
        top: options.top,
        fill: options.fill,
        fontFamily: options.fontFamily,
        fontSize: options.fontSize,
        lockSkewingX: true,
        lockSkewingY: true,
        scaleX: factor,
        scaleY: factor,
        padding: 10
      });

      text.on({
        scaling: function (e) {
          var factor = image.scaleX;

          var obj = this,
            w = obj.width * obj.scaleX / factor,
            h = obj.height * obj.scaleY / factor;

          obj.set({
            width: w,
            height: h,
            scaleX: factor,
            scaleY: factor
          });
        }
      });

      canvas.add(text);
    }

  });

})(jQuery);
;(function() {
'use strict';

Darkroom.plugins['save'] = Darkroom.Plugin.extend({

  defaults: {
    callback: function() {
      this.darkroom.selfDestroy();
    }
  },

  initialize: function InitializeDarkroomSavePlugin() {
    var buttonGroup = this.darkroom.toolbar.createButtonGroup();

    this.destroyButton = buttonGroup.createButton({
      image: 'save',
      title: 'Save changes'
    });

    this.destroyButton.addEventListener('click', this.options.callback.bind(this));
  },
});

})();
;;(function (window, document, Darkroom, fabric, $) {
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

      if (this.darkroom.plugins['padding']) {
        this._initPaddingControls();
      }

      return this;
    },

    _initPaddingControls: function() {
      var self = this;
      var canvas = self.darkroom.canvas;
      this['canvasPaddingControls'] = {};

      var controlGroup = this.controlsContainer.createControlGroup();

      var colorInput = controlGroup.createControl({
        label: 'Canvas Color',
        type: 'color',
        value: self.darkroom.canvas.backgroundColor,
        hide: true
      });

      colorInput.element.on('input change', function (ev) {
        canvas.backgroundColor = this.value;
        canvas.renderAll();
      });

      this['canvasPaddingControls']['color'] = colorInput;

      function createPaddingControl(options) {
        var paddingControl = controlGroup.createControl({
          label: options.label,
          type: 'range',
          value: 0,
          attributes: {
            min: 0,
            max: 250,
            step: 25
          },
          hide: true
        });

        paddingControl.element.on('input change', function (ev) {
          var padding = parseInt(this.value, 10);

          self.darkroom.plugins['padding'].pad(options.key, padding);

        });

        self['canvasPaddingControls'][options.key] = paddingControl;

      }

      var paddingControls = [
        {
          label: "Top",
          key: "top"
        },
        {
          label: "Bottom",
          key: "bottom"
        },
        {
          label: "Left",
          key: "left"
        },
        {
          label: "Right",
          key: "right"
        }
      ];

      for (var i in paddingControls) {
        createPaddingControl(paddingControls[i]);
      }

      $(canvas.getElement()).on('darkroom:image:replaced', function(){
        for (var i in self['canvasPaddingControls']) {
          var control = self['canvasPaddingControls'][i];
          if (i == 'color') {
            control.element.val(canvas.backgroundColor);
          }
          else {
            control.element.val(canvas.padding[i]);
          }
        }
      });

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20ucGFkZGluZy5qcyIsImRhcmtyb29tLmhpc3RvcnkuanMiLCJkYXJrcm9vbS5yb3RhdGUuanMiLCJkYXJrcm9vbS5jcm9wLmpzIiwiZGFya3Jvb20ubGluZS5qcyIsImRhcmtyb29tLmFycm93LmpzIiwiZGFya3Jvb20ucmVjdC5qcyIsImRhcmtyb29tLnRleHQuanMiLCJkYXJrcm9vbS5zYXZlLmpzIiwiZGFya3Jvb20uY29udHJvbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDN1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDdHFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0MzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0N4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImRhcmtyb29tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBJbmplY3QgU1ZHIGljb25zIGludG8gdGhlIERPTVxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuaWQgPSAnZGFya3Jvb20taWNvbnMnO1xuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwO1xuZWxlbWVudC5zdHlsZS53aWR0aCA9IDA7XG5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbmVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuZWxlbWVudC5pbm5lckhUTUwgPSAnPCEtLSBpbmplY3Q6c3ZnIC0tPjwhLS0gZW5kaW5qZWN0IC0tPic7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCQpIHtcbid1c2Ugc3RyaWN0Jztcblxud2luZG93LkRhcmtyb29tID0gRGFya3Jvb207XG5cbi8vIENvcmUgb2JqZWN0IG9mIERhcmtyb29tSlMuXG4vLyBCYXNpY2FsbHkgaXQncyBhIHNpbmdsZSBvYmplY3QsIGluc3RhbmNpYWJsZSB2aWEgYW4gZWxlbWVudFxuLy8gKGl0IGNvdWxkIGJlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgRE9NIGVsZW1lbnQpLCBzb21lIGN1c3RvbSBvcHRpb25zLFxuLy8gYW5kIGEgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cyAob3Igbm9uZSB0byB1c2UgZGVmYXVsdCBvbmVzKS5cbmZ1bmN0aW9uIERhcmtyb29tKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpIHtcbiAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucyk7XG59XG5cbi8vIENyZWF0ZSBhbiBlbXB0eSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzLCB3aGljaCB3aWxsIGJlIGZpbGxlZCBieVxuLy8gb3RoZXIgcGx1Z2luIHNjcmlwdHMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgcGx1Z2luIGxpc3QgaWYgbm9uZSBpc1xuLy8gc3BlY2lmaWVkIGluIERhcmtyb29tJ3NzIGNvbnN0cnVjdG9yLlxuRGFya3Jvb20ucGx1Z2lucyA9IFtdO1xuXG5EYXJrcm9vbS5wcm90b3R5cGUgPSB7XG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudFxuICBjb250YWluZXJFbGVtZW50OiBudWxsLFxuXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGNhbnZhcyBvYmplY3RcbiAgY2FudmFzOiBudWxsLFxuXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGltYWdlIG9iamVjdFxuICBpbWFnZTogbnVsbCxcblxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgY2FudmFzIG9iamVjdFxuICBzb3VyY2VDYW52YXM6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGltYWdlIG9iamVjdFxuICBzb3VyY2VJbWFnZTogbnVsbCxcblxuICAvLyBUcmFjayBvZiB0aGUgb3JpZ2luYWwgaW1hZ2UgZWxlbWVudFxuICBvcmlnaW5hbEltYWdlRWxlbWVudDogbnVsbCxcblxuICAvLyBTdGFjayBvZiB0cmFuc2Zvcm1hdGlvbnMgdG8gYXBwbHkgdG8gdGhlIGltYWdlIHNvdXJjZVxuICB0cmFuc2Zvcm1hdGlvbnM6IFtdLFxuXG4gIC8vIEluaXRpYWxpemVkIHN0YXRlXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcblxuICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgZGVmYXVsdHM6IHtcbiAgICAvLyBDYW52YXMgcHJvcGVydGllcyAoZGltZW5zaW9uLCByYXRpbywgY29sb3IpXG4gICAgbWluV2lkdGg6IG51bGwsXG4gICAgbWluSGVpZ2h0OiBudWxsLFxuICAgIG1heFdpZHRoOiBudWxsLFxuICAgIG1heEhlaWdodDogbnVsbCxcbiAgICByYXRpbzogbnVsbCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcblxuICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xuICAgIHBsdWdpbnM6IHt9LFxuXG4gICAgLy8gUG9zdC1pbml0aWFsaXNhdGlvbiBjYWxsYmFja1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkgeyAvKiBub29wICovIH1cbiAgfSxcblxuICAvLyBMaXN0IG9mIHRoZSBpbnN0YW5jaWVkIHBsdWdpbnNcbiAgcGx1Z2luczoge30sXG5cbiAgLy8gVGhpcyBvcHRpb25zIGFyZSBhIG1lcmdlIGJldHdlZW4gYGRlZmF1bHRzYCBhbmQgdGhlIG9wdGlvbnMgcGFzc2VkXG4gIC8vIHRocm91Z2ggdGhlIGNvbnN0cnVjdG9yXG4gIG9wdGlvbnM6IHt9LFxuXG4gIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJylcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIGlmIChudWxsID09PSBlbGVtZW50KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXG4gICAgICB0aGlzLl9pbml0aWFsaXplRE9NKGVsZW1lbnQpO1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZUltYWdlKCk7XG5cbiAgICAgIC8vIFRoZW4gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luc1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVBsdWdpbnMoRGFya3Jvb20ucGx1Z2lucyk7XG5cbiAgICAgIC8vIFB1YmxpYyBtZXRob2QgdG8gYWRqdXN0IGltYWdlIGFjY29yZGluZyB0byB0aGUgY2FudmFzXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5vcHRpb25zLmluaXRpYWxpemUuYmluZCh0aGlzKS5jYWxsKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Rhcmtyb29tOmluaXRpYWxpemVkJyk7XG4gICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgfS5iaW5kKHRoaXMpXG5cbiAgICAvL2ltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XG4gICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5zcmM7XG4gIH0sXG5cbiAgc2VsZkRlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb250YWluZXIgPSB0aGlzLmNvbnRhaW5lckVsZW1lbnQ7XG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoaW1hZ2UsIGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgaW1hZ2Uuc3JjID0gdGhpcy5zb3VyY2VJbWFnZS50b0RhdGFVUkwoKTtcbiAgfSxcblxuICAvLyBBZGQgYWJpbGl0eSB0byBhdHRhY2ggZXZlbnQgbGlzdGVuZXIgb24gdGhlIGNvcmUgb2JqZWN0LlxuICAvLyBJdCB1c2VzIHRoZSBjYW52YXMgZWxlbWVudCB0byBwcm9jZXNzIGV2ZW50cy5cbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICQodGhpcy5jYW52YXMuZ2V0RWxlbWVudCgpKS5vbihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgfSxcblxuICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAvLyBVc2UgdGhlIG9sZCB3YXkgb2YgY3JlYXRpbmcgZXZlbnQgdG8gYmUgSUUgY29tcGF0aWJsZVxuICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9HdWlkZS9FdmVudHMvQ3JlYXRpbmdfYW5kX3RyaWdnZXJpbmdfZXZlbnRzXG4gICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG4gICAgZXZlbnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCkuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIH0sXG5cbiAgLy8gQWRqdXN0IGltYWdlICYgY2FudmFzIGRpbWVuc2lvbiBhY2NvcmRpbmcgdG8gbWluL21heCB3aWR0aC9oZWlnaHRcbiAgLy8gYW5kIHJhdGlvIHNwZWNpZmllZCBpbiB0aGUgb3B0aW9ucy5cbiAgLy8gVGhpcyBtZXRob2Qgc2hvdWxkIGJlIGNhbGxlZCBhZnRlciBlYWNoIGltYWdlIHRyYW5zZm9ybWF0aW9uLlxuICByZWZyZXNoOiBmdW5jdGlvbihuZXh0KSB7XG4gICAgdmFyIGNsb25lID0gbmV3IEltYWdlKCk7XG4gICAgY2xvbmUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLl9yZXBsYWNlQ3VycmVudEltYWdlKG5ldyBmYWJyaWMuSW1hZ2UoY2xvbmUsIHtcbiAgICAgICAgLy8gU29tZSBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChuZXh0KSBuZXh0KCk7XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIGNsb25lLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gIH0sXG5cbiAgX3JlcGxhY2VDdXJyZW50SW1hZ2U6IGZ1bmN0aW9uKG5ld0ltYWdlKSB7XG4gICAgaWYgKHRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbWFnZSA9IG5ld0ltYWdlO1xuXG4gICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5pbWFnZSk7XG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcbiAgICAgIHZhciBjYW52YXNSYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XG4gICAgICB2YXIgY3VycmVudFJhdGlvID0gY2FudmFzV2lkdGggLyBjYW52YXNIZWlnaHQ7XG5cbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPiBjYW52YXNSYXRpbykge1xuICAgICAgICBjYW52YXNIZWlnaHQgPSBjYW52YXNXaWR0aCAvIGNhbnZhc1JhdGlvO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPCBjYW52YXNSYXRpbykge1xuICAgICAgICBjYW52YXNXaWR0aCA9IGNhbnZhc0hlaWdodCAqIGNhbnZhc1JhdGlvO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoZW4gc2NhbGUgdGhlIGltYWdlIHRvIGZpdCBpbnRvIGRpbWVuc2lvbiBsaW1pdHNcbiAgICB2YXIgc2NhbGVNaW4gPSAxO1xuICAgIHZhciBzY2FsZU1heCA9IDE7XG4gICAgdmFyIHNjYWxlWCA9IDE7XG4gICAgdmFyIHNjYWxlWSA9IDE7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heFdpZHRoICYmIHRoaXMub3B0aW9ucy5tYXhXaWR0aCA8IGNhbnZhc1dpZHRoKSB7XG4gICAgICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1heFdpZHRoIC8gY2FudmFzV2lkdGg7XG4gICAgfVxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5tYXhIZWlnaHQgPCBjYW52YXNIZWlnaHQpIHtcbiAgICAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xuICAgIH1cbiAgICBzY2FsZU1pbiA9IE1hdGgubWluKHNjYWxlWCwgc2NhbGVZKTtcblxuICAgIHNjYWxlWCA9IDE7XG4gICAgc2NhbGVZID0gMTtcbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbldpZHRoICYmIHRoaXMub3B0aW9ucy5taW5XaWR0aCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgICBzY2FsZVggPSAgdGhpcy5vcHRpb25zLm1pbldpZHRoIC8gY2FudmFzV2lkdGg7XG4gICAgfVxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ICYmIHRoaXMub3B0aW9ucy5taW5IZWlnaHQgPiBjYW52YXNIZWlnaHQpIHtcbiAgICAgIHNjYWxlWSA9ICB0aGlzLm9wdGlvbnMubWluSGVpZ2h0IC8gY2FudmFzSGVpZ2h0O1xuICAgIH1cbiAgICBzY2FsZU1heCA9IE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcblxuICAgIHZhciBzY2FsZSA9IHNjYWxlTWF4ICogc2NhbGVNaW47IC8vIG9uZSBzaG91bGQgYmUgZXF1YWxzIHRvIDFcblxuICAgIGNhbnZhc1dpZHRoICo9IHNjYWxlO1xuICAgIGNhbnZhc0hlaWdodCAqPSBzY2FsZTtcblxuICAgIC8vIEZpbmFsbHkgcGxhY2UgdGhlIGltYWdlIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhbnZhc1xuICAgIHRoaXMuaW1hZ2Uuc2V0U2NhbGVYKDEgKiBzY2FsZSk7XG4gICAgdGhpcy5pbWFnZS5zZXRTY2FsZVkoMSAqIHNjYWxlKTtcbiAgICB0aGlzLmNhbnZhcy5hZGQodGhpcy5pbWFnZSk7XG4gICAgdGhpcy5jYW52YXMuc2V0V2lkdGgoY2FudmFzV2lkdGgpO1xuICAgIHRoaXMuY2FudmFzLnNldEhlaWdodChjYW52YXNIZWlnaHQpO1xuICAgIHRoaXMuY2FudmFzLmNlbnRlck9iamVjdCh0aGlzLmltYWdlKTtcbiAgICB0aGlzLmltYWdlLnNldENvb3JkcygpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnZGFya3Jvb206aW1hZ2U6cmVwbGFjZWQnKTtcbiAgfSxcblxuICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UgYW5kIHNhdmUgaXQgaW4gdGhlXG4gIC8vIHRyYW5zZm9ybWF0aW9ucyBzdGFjayAoaW4gb3JkZXIgdG8gcmVjb25zdGl0dXRlIHRoZSBwcmV2aW91cyBzdGF0ZXNcbiAgLy8gb2YgdGhlIGltYWdlKS5cbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcblxuICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICB0aGlzLl9wb3N0VHJhbnNmb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICk7XG4gIH0sXG5cbiAgX3Bvc3RUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICBpZiAobmV3SW1hZ2UpXG4gICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XG5cbiAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcbiAgLy8gdHJhbnNmb3JtYXRpb25zLlxuICByZWluaXRpYWxpemVJbWFnZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VyY2VJbWFnZS5yZW1vdmUoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcbiAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0aGlzLnRyYW5zZm9ybWF0aW9ucy5zbGljZSgpKVxuICB9LFxuXG4gIF9wb3BUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb25zKSB7XG4gICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcblxuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxuICAgIH07XG5cbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxuICAgICAgbmV4dC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSxcblxuICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXG4gIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXG4gIC8vIEhvd2V2ZXIgdGhlIG9yaWdpbmFsIGltYWdlIGlzIHJlLWluamVjdGVkIGluIG9yZGVyIHRvIGtlZXAgYSB0cmFjZSBvZiBpdC5cbiAgX2luaXRpYWxpemVET006IGZ1bmN0aW9uKGltYWdlRWxlbWVudCkge1xuICAgIC8vIENvbnRhaW5lclxuICAgIHZhciBtYWluQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1jb250YWluZXInO1xuXG4gICAgLy8gVG9vbGJhclxuICAgIHZhciB0b29sYmFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvb2xiYXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS10b29sYmFyJztcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAvLyBWaWV3cG9ydCBjYW52YXNcbiAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgLy8gU291cmNlIGNhbnZhc1xuICAgIHZhciBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHZhciBzb3VyY2VDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIE9yaWdpbmFsIGltYWdlXG4gICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgIGltYWdlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IG1haW5Db250YWluZXJFbGVtZW50O1xuICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKGNhbnZhc0VsZW1lbnQsIHtcbiAgICAgIHNlbGVjdGlvbjogdHJ1ZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxuICAgIH0pO1xuXG4gICAgdGhpcy5zb3VyY2VDYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcyhzb3VyY2VDYW52YXNFbGVtZW50LCB7XG4gICAgICBzZWxlY3Rpb246IHRydWUsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9KTtcbiAgfSxcblxuICAvLyBJbnN0YW5jaWF0ZSB0aGUgRmFicmljIGltYWdlIG9iamVjdC5cbiAgLy8gVGhlIGltYWdlIGlzIGNyZWF0ZWQgYXMgYSBzdGF0aWMgZWxlbWVudCB3aXRoIG5vIGNvbnRyb2wsXG4gIC8vIHRoZW4gaXQgaXMgYWRkIGluIHRoZSBGYWJyaWMgY2FudmFzIG9iamVjdC5cbiAgX2luaXRpYWxpemVJbWFnZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VyY2VJbWFnZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcy5vcmlnaW5hbEltYWdlRWxlbWVudCwge1xuICAgICAgLy8gU29tZSBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgc2VsZWN0YWJsZTogZmFsc2UsXG4gICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICBsb2NrTW92ZW1lbnRZOiB0cnVlLFxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgbG9ja1NjYWxpbmdZOiB0cnVlLFxuICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICBoYXNCb3JkZXJzOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzLmFkZCh0aGlzLnNvdXJjZUltYWdlKTtcblxuICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuc291cmNlSW1hZ2UpO1xuICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRXaWR0aChjYW52YXNXaWR0aCk7XG4gICAgdGhpcy5zb3VyY2VDYW52YXMuc2V0SGVpZ2h0KGNhbnZhc0hlaWdodCk7XG4gICAgdGhpcy5zb3VyY2VDYW52YXMuY2VudGVyT2JqZWN0KHRoaXMuc291cmNlSW1hZ2UpO1xuICAgIHRoaXMuc291cmNlSW1hZ2Uuc2V0Q29vcmRzKCk7XG4gIH0sXG5cbiAgLy8gSW5pdGlhbGl6ZSBldmVyeSBwbHVnaW5zLlxuICAvLyBOb3RlIHRoYXQgcGx1Z2lucyBhcmUgaW5zdGFuY2lhdGVkIGluIHRoZSBzYW1lIG9yZGVyIHRoYW4gdGhleVxuICAvLyBhcmUgZGVjbGFyZWQgaW4gdGhlIHBhcmFtZXRlciBvYmplY3QuXG4gIF9pbml0aWFsaXplUGx1Z2luczogZnVuY3Rpb24ocGx1Z2lucykge1xuICAgIGZvciAodmFyIG5hbWUgaW4gcGx1Z2lucykge1xuICAgICAgdmFyIHBsdWdpbiA9IHBsdWdpbnNbbmFtZV07XG4gICAgICB2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5wbHVnaW5zW25hbWVdO1xuXG4gICAgICAvLyBTZXR0aW5nIGZhbHNlIGludG8gdGhlIHBsdWdpbiBvcHRpb25zIHdpbGwgZGlzYWJsZSB0aGUgcGx1Z2luXG4gICAgICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAvLyBBdm9pZCBhbnkgaXNzdWVzIHdpdGggX3Byb3RvX1xuICAgICAgaWYgKCFwbHVnaW5zLmhhc093blByb3BlcnR5KG5hbWUpKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgdGhpcy5wbHVnaW5zW25hbWVdID0gbmV3IHBsdWdpbih0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sXG59XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlBsdWdpbiA9IFBsdWdpbjtcblxuLy8gRGVmaW5lIGEgcGx1Z2luIG9iamVjdC4gVGhpcyBpcyB0aGUgKGFic3RyYWN0KSBwYXJlbnQgY2xhc3Mgd2hpY2hcbi8vIGhhcyB0byBiZSBleHRlbmRlZCBmb3IgZWFjaCBwbHVnaW4uXG5mdW5jdGlvbiBQbHVnaW4oZGFya3Jvb20sIG9wdGlvbnMpIHtcbiAgdGhpcy5kYXJrcm9vbSA9IGRhcmtyb29tO1xuICB0aGlzLm9wdGlvbnMgPSBEYXJrcm9vbS5VdGlscy5leHRlbmQob3B0aW9ucywgdGhpcy5kZWZhdWx0cyk7XG4gIHRoaXMuaW5pdGlhbGl6ZSgpO1xufVxuXG5QbHVnaW4ucHJvdG90eXBlID0ge1xuICBkZWZhdWx0czoge30sXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkgeyB9XG59XG5cbi8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxuUGx1Z2luLmV4dGVuZCA9IGZ1bmN0aW9uKHByb3RvUHJvcHMpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXM7XG4gIHZhciBjaGlsZDtcblxuICBpZiAocHJvdG9Qcm9wcyAmJiBwcm90b1Byb3BzLmhhc093blByb3BlcnR5KCdjb25zdHJ1Y3RvcicpKSB7XG4gICAgY2hpbGQgPSBwcm90b1Byb3BzLmNvbnN0cnVjdG9yO1xuICB9IGVsc2Uge1xuICAgIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB9XG5cbiAgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLCBwYXJlbnQpO1xuXG4gIHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XG4gIFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuICBjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xuXG4gIGlmIChwcm90b1Byb3BzKSBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuICBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlO1xuXG4gIHJldHVybiBjaGlsZDtcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uVHJhbnNmb3JtYXRpb24gPSBUcmFuc2Zvcm1hdGlvbjtcblxuZnVuY3Rpb24gVHJhbnNmb3JtYXRpb24ob3B0aW9ucykge1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xufVxuXG5UcmFuc2Zvcm1hdGlvbi5wcm90b3R5cGUgPSB7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGltYWdlKSB7IC8qIG5vLW9wICovICB9XG59XG5cbi8vIEluc3BpcmVkIGJ5IEJhY2tib25lLmpzIGV4dGVuZCBjYXBhYmlsaXR5LlxuVHJhbnNmb3JtYXRpb24uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgdmFyIGNoaWxkO1xuXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIH1cblxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5VSSA9IHtcbiAgVG9vbGJhcjogVG9vbGJhcixcbiAgQnV0dG9uR3JvdXA6IEJ1dHRvbkdyb3VwLFxuICBCdXR0b246IEJ1dHRvbixcbn07XG5cbi8vIFRvb2xiYXIgb2JqZWN0LlxuZnVuY3Rpb24gVG9vbGJhcihlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cblRvb2xiYXIucHJvdG90eXBlID0ge1xuICBjcmVhdGVCdXR0b25Hcm91cDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBidXR0b25Hcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbkdyb3VwLmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1idXR0b24tZ3JvdXAnO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25Hcm91cCk7XG5cbiAgICByZXR1cm4gbmV3IEJ1dHRvbkdyb3VwKGJ1dHRvbkdyb3VwKTtcbiAgfVxufTtcblxuLy8gQnV0dG9uR3JvdXAgb2JqZWN0LlxuZnVuY3Rpb24gQnV0dG9uR3JvdXAoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xufVxuXG5CdXR0b25Hcm91cC5wcm90b3R5cGUgPSB7XG4gIGNyZWF0ZUJ1dHRvbjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgIGltYWdlOiAnaGVscCcsXG4gICAgICB0eXBlOiAnZGVmYXVsdCcsXG4gICAgICBncm91cDogJ2RlZmF1bHQnLFxuICAgICAgdGl0bGU6ICcnLFxuICAgICAgaGlkZTogZmFsc2UsXG4gICAgICBkaXNhYmxlZDogZmFsc2VcbiAgICB9O1xuXG4gICAgb3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCBkZWZhdWx0cyk7XG5cbiAgICB2YXIgYnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbkVsZW1lbnQudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbiBkYXJrcm9vbS1idXR0b24tJyArIG9wdGlvbnMudHlwZTtcbiAgICBidXR0b25FbGVtZW50LnRpdGxlID0gb3B0aW9ucy50aXRsZTtcbiAgICBidXR0b25FbGVtZW50LmlubmVySFRNTCA9ICc8c3ZnIGNsYXNzPVwiZGFya3Jvb20taWNvblwiPjx1c2UgeGxpbms6aHJlZj1cIiMnICsgb3B0aW9ucy5pbWFnZSArICdcIiAvPjwvc3ZnPic7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xuXG4gICAgdmFyIGJ1dHRvbiA9IG5ldyBCdXR0b24oYnV0dG9uRWxlbWVudCk7XG4gICAgYnV0dG9uLmhpZGUob3B0aW9ucy5oaWRlKTtcbiAgICBidXR0b24uZGlzYWJsZShvcHRpb25zLmRpc2FibGVkKTtcblxuICAgIHJldHVybiBidXR0b247XG4gIH1cbn1cblxuLy8gQnV0dG9uIG9iamVjdC5cbmZ1bmN0aW9uIEJ1dHRvbihlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cbkJ1dHRvbi5wcm90b3R5cGUgPSB7XG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpIHtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgfSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIGlmICh0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50KS5vZmYoZXZlbnROYW1lLCBsaXN0ZW5lcik7XG4gICAgfVxuICB9LFxuICBhY3RpdmU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rhcmtyb29tLWJ1dHRvbi1hY3RpdmUnKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xuICB9LFxuICBoaWRlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSlcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrcm9vbS1idXR0b24taGlkZGVuJyk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcbiAgfSxcbiAgZGlzYWJsZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSAodmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG59O1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5VdGlscyA9IHtcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIGNvbXB1dGVJbWFnZVZpZXdQb3J0OiBjb21wdXRlSW1hZ2VWaWV3UG9ydCxcbn07XG5cblxuLy8gVXRpbGl0eSBtZXRob2QgdG8gZWFzaWx5IGV4dGVuZCBvYmplY3RzLlxuZnVuY3Rpb24gZXh0ZW5kKGIsIGEpIHtcbiAgdmFyIHByb3A7XG4gIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYTtcbiAgfVxuICBmb3IgKHByb3AgaW4gYSkge1xuICAgIGlmIChhLmhhc093blByb3BlcnR5KHByb3ApICYmIGIuaGFzT3duUHJvcGVydHkocHJvcCkgPT09IGZhbHNlKSB7XG4gICAgICBiW3Byb3BdID0gYVtwcm9wXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguc2luKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSArIE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcbiAgICB3aWR0aDogTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0V2lkdGgoKSAqIChNYXRoLmNvcyhpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSksXG4gIH1cbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigkKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBQYWRkaW5nID0gRGFya3Jvb20uVHJhbnNmb3JtYXRpb24uZXh0ZW5kKHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oY2FudmFzLCBpbWFnZSwgbmV4dCkge1xuXG4gICAgcmV0dXJuIG5leHQoKTtcblxuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcbiAgICB2YXIgaW1hZ2VXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgIHZhciBpbWFnZUhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIHZhciBsZWZ0ID0gdGhpcy5vcHRpb25zLmxlZnQgKiBpbWFnZVdpZHRoO1xuICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5taW4odGhpcy5vcHRpb25zLndpZHRoICogaW1hZ2VXaWR0aCwgaW1hZ2VXaWR0aCAtIGxlZnQpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMuaGVpZ2h0ICogaW1hZ2VIZWlnaHQsIGltYWdlSGVpZ2h0IC0gdG9wKTtcblxuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1sncGFkZGluZyddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gIGRlZmF1bHRzOiB7fSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21QYWRkaW5nUGx1Z2luKCkge1xuICAgIHRoaXMucGFkZGluZ0VuYWJsZWQgPSBmYWxzZTtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICBjYW52YXMucGFkZGluZyA9IGNhbnZhcy5wYWRkaW5nIHx8IHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwXG4gICAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB0aGlzLnBhZGRpbmdCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdwYWRkaW5nJyxcbiAgICAgIHRpdGxlOiAnQ2FudmFzIFBhZGRpbmcnXG4gICAgfSk7XG4gICAgdGhpcy5va0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2RvbmUnLFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgaGlkZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnY2xvc2UnLFxuICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICBoaWRlOiB0cnVlXG4gICAgfSk7XG5cbiAgICAvLyBCdXR0b25zIGNsaWNrXG4gICAgdGhpcy5wYWRkaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQYWRkaW5nLmJpbmQodGhpcykpO1xuICAgIHRoaXMub2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFwcGx5UGFkZGluZy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2FuY2VsUGFkZGluZy5iaW5kKHRoaXMpKTtcblxuICAgICQoY2FudmFzLmdldEVsZW1lbnQoKSkub24oJ2Rhcmtyb29tOmltYWdlOnJlcGxhY2VkJywgdGhpcy5wYWQuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgdG9nZ2xlUGFkZGluZzogZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIXRoaXMucGFkZGluZ0VuYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlUGFkZGluZygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZVBhZGRpbmcoKTtcblxuICAgIH1cbiAgfSxcblxuICBlbmFibGVQYWRkaW5nOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBhZGRpbmdFbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnBhZGRpbmdCdXR0b24uYWN0aXZlKHRydWUpO1xuICAgIC8vdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcbiAgICAvL3RoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmRhcmtyb29tLnBsdWdpbnNbJ2NvbnRyb2xzJ11bJ2NhbnZhc1BhZGRpbmdDb250cm9scyddKSB7XG4gICAgICB2YXIgY29udHJvbCA9IHRoaXMuZGFya3Jvb20ucGx1Z2luc1snY29udHJvbHMnXVsnY2FudmFzUGFkZGluZ0NvbnRyb2xzJ11baV07XG4gICAgICBjb250cm9sLmhpZGUoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBkaXNhYmxlUGFkZGluZzogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5wYWRkaW5nRW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMucGFkZGluZ0J1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuXG4gICAgZm9yICh2YXIgaSBpbiB0aGlzLmRhcmtyb29tLnBsdWdpbnNbJ2NvbnRyb2xzJ11bJ2NhbnZhc1BhZGRpbmdDb250cm9scyddKSB7XG4gICAgICB2YXIgY29udHJvbCA9IHRoaXMuZGFya3Jvb20ucGx1Z2luc1snY29udHJvbHMnXVsnY2FudmFzUGFkZGluZ0NvbnRyb2xzJ11baV07XG4gICAgICBjb250cm9sLmhpZGUodHJ1ZSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEFwcGx5IFBhZGRpbmdcbiAgYXBwbHlQYWRkaW5nOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBhZGRpbmdCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncGFkZGluZzp1cGRhdGUnKTtcbiAgfSxcblxuICAvLyBDYW5jZWwgcGFkZGluZ1xuICBjYW5jZWxQYWRkaW5nOiBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMuZGlzYWJsZVBhZGRpbmcoKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgncGFkZGluZzp1cGRhdGUnKTtcbiAgfSxcblxuICBwYWQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBjYW52YXMucGFkZGluZ1trZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGxlZnQgPSBwYXJzZUludChjYW52YXMucGFkZGluZy5sZWZ0LCAxMCkgfHwgMDtcbiAgICB2YXIgcmlnaHQgPSBwYXJzZUludChjYW52YXMucGFkZGluZy5yaWdodCwgMTApIHx8IDA7XG4gICAgdmFyIHRvcCA9IHBhcnNlSW50KGNhbnZhcy5wYWRkaW5nLnRvcCwgMTApIHx8IDA7XG4gICAgdmFyIGJvdHRvbSA9IHBhcnNlSW50KGNhbnZhcy5wYWRkaW5nLmJvdHRvbSwgMTApIHx8IDA7XG5cbiAgICB2YXIgY3cgPSB2aWV3cG9ydC53aWR0aCArIGxlZnQgKyByaWdodDtcbiAgICB2YXIgY2ggPSB2aWV3cG9ydC5oZWlnaHQgKyB0b3AgKyBib3R0b207XG5cbiAgICBjYW52YXMuc2V0V2lkdGgoY3cpO1xuICAgIGNhbnZhcy5zZXRIZWlnaHQoY2gpO1xuXG4gICAgaW1hZ2UubGVmdCA9IGxlZnQ7XG4gICAgaW1hZ2UudG9wID0gdG9wO1xuXG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICB9XG5cbn0pO1xuXG59KShqUXVlcnkpO1xuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcbiAgICAgICAgdGl0bGU6ICdVbmRvJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3JlZG8nLFxuICAgICAgICB0aXRsZTogJ1JlZG8nLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91cGRhdGVCdXR0b25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5kaXNhYmxlKCh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmRpc2FibGUoKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgIH0sXG5cbiAgICBfb25UcmFuZm9ybWF0aW9uQXBwbGllZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9XG4gIH0pO1xufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSb3RhdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICB2YXIgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XG4gICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcblxuICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgIGhlaWdodCA9IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcbiAgICB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcblxuICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgY2FudmFzLmNlbnRlck9iamVjdChpbWFnZSk7XG4gICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xuXG4gICAgbmV4dCgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1sncm90YXRlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Sb3RhdGVQbHVnaW4oKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB2YXIgbGVmdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3JvdGF0ZS1sZWZ0JyxcbiAgICAgIHRpdGxlOiAnUm90YXRlIExlZnQnXG4gICAgfSk7XG5cbiAgICB2YXIgcmlnaHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdyb3RhdGUtcmlnaHQnLFxuICAgICAgdGl0bGU6ICdSb3RhdGUgUmlnaHQnXG4gICAgfSk7XG5cbiAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVMZWZ0LmJpbmQodGhpcykpO1xuICAgIHJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yb3RhdGVSaWdodC5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICByb3RhdGVMZWZ0OiBmdW5jdGlvbiByb3RhdGVMZWZ0KCkge1xuICAgIHRoaXMucm90YXRlKC05MCk7XG4gIH0sXG5cbiAgcm90YXRlUmlnaHQ6IGZ1bmN0aW9uIHJvdGF0ZVJpZ2h0KCkge1xuICAgIHRoaXMucm90YXRlKDkwKTtcbiAgfSxcblxuICByb3RhdGU6IGZ1bmN0aW9uIHJvdGF0ZShhbmdsZSkge1xuICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihcbiAgICAgIG5ldyBSb3RhdGlvbih7YW5nbGU6IGFuZ2xlfSlcbiAgICApO1xuICB9XG5cbn0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3JvcCA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICAvLyBTbmFwc2hvdCB0aGUgaW1hZ2UgZGVsaW1pdGVkIGJ5IHRoZSBjcm9wIHpvbmVcbiAgICB2YXIgc25hcHNob3QgPSBuZXcgSW1hZ2UoKTtcbiAgICBzbmFwc2hvdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFZhbGlkYXRlIGltYWdlXG4gICAgICBpZiAoaGVpZ2h0IDwgMSB8fCB3aWR0aCA8IDEpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdmFyIGltZ0luc3RhbmNlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLCB7XG4gICAgICAgIC8vIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICAgIHNlbGVjdGFibGU6IGZhbHNlLFxuICAgICAgICBldmVudGVkOiBmYWxzZSxcbiAgICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgICAgbG9ja01vdmVtZW50WTogdHJ1ZSxcbiAgICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgaGFzQm9yZGVyczogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuXG4gICAgICAvLyBVcGRhdGUgY2FudmFzIHNpemVcbiAgICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgICBjYW52YXMuc2V0SGVpZ2h0KGhlaWdodCk7XG5cbiAgICAgIC8vIEFkZCBpbWFnZVxuICAgICAgaW1hZ2UucmVtb3ZlKCk7XG4gICAgICBjYW52YXMuYWRkKGltZ0luc3RhbmNlKTtcblxuICAgICAgbmV4dChpbWdJbnN0YW5jZSk7XG4gICAgfTtcblxuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KGltYWdlKTtcbiAgICB2YXIgaW1hZ2VXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgIHZhciBpbWFnZUhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIHZhciBsZWZ0ID0gdGhpcy5vcHRpb25zLmxlZnQgKiBpbWFnZVdpZHRoO1xuICAgIHZhciB0b3AgPSB0aGlzLm9wdGlvbnMudG9wICogaW1hZ2VIZWlnaHQ7XG4gICAgdmFyIHdpZHRoID0gTWF0aC5taW4odGhpcy5vcHRpb25zLndpZHRoICogaW1hZ2VXaWR0aCwgaW1hZ2VXaWR0aCAtIGxlZnQpO1xuICAgIHZhciBoZWlnaHQgPSBNYXRoLm1pbih0aGlzLm9wdGlvbnMuaGVpZ2h0ICogaW1hZ2VIZWlnaHQsIGltYWdlSGVpZ2h0IC0gdG9wKTtcblxuICAgIHNuYXBzaG90LnNyYyA9IGNhbnZhcy50b0RhdGFVUkwoe1xuICAgICAgbGVmdDogbGVmdCxcbiAgICAgIHRvcDogdG9wLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgfSk7XG4gIH1cbn0pO1xuXG52YXIgQ3JvcFpvbmUgPSBmYWJyaWMudXRpbC5jcmVhdGVDbGFzcyhmYWJyaWMuUmVjdCwge1xuICBfcmVuZGVyOiBmdW5jdGlvbihjdHgpIHtcbiAgICB0aGlzLmNhbGxTdXBlcignX3JlbmRlcicsIGN0eCk7XG5cbiAgICB2YXIgY2FudmFzID0gY3R4LmNhbnZhcztcbiAgICB2YXIgZGFzaFdpZHRoID0gNztcblxuICAgIC8vIFNldCBvcmlnaW5hbCBzY2FsZVxuICAgIHZhciBmbGlwWCA9IHRoaXMuZmxpcFggPyAtMSA6IDE7XG4gICAgdmFyIGZsaXBZID0gdGhpcy5mbGlwWSA/IC0xIDogMTtcbiAgICB2YXIgc2NhbGVYID0gZmxpcFggLyB0aGlzLnNjYWxlWDtcbiAgICB2YXIgc2NhbGVZID0gZmxpcFkgLyB0aGlzLnNjYWxlWTtcblxuICAgIGN0eC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICAvLyBPdmVybGF5IHJlbmRlcmluZ1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgwLCAwLCAwLCAwLjUpJztcbiAgICB0aGlzLl9yZW5kZXJPdmVybGF5KGN0eCk7XG5cbiAgICAvLyBTZXQgZGFzaGVkIGJvcmRlcnNcbiAgICBpZiAoY3R4LnNldExpbmVEYXNoICE9PSB1bmRlZmluZWQpXG4gICAgICBjdHguc2V0TGluZURhc2goW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXSk7XG4gICAgZWxzZSBpZiAoY3R4Lm1vekRhc2ggIT09IHVuZGVmaW5lZClcbiAgICAgIGN0eC5tb3pEYXNoID0gW2Rhc2hXaWR0aCwgZGFzaFdpZHRoXTtcblxuICAgIC8vIEZpcnN0IGxpbmVzIHJlbmRlcmluZyB3aXRoIGJsYWNrXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC4yKSc7XG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcblxuICAgIC8vIFJlIHJlbmRlciBsaW5lcyBpbiB3aGl0ZVxuICAgIGN0eC5saW5lRGFzaE9mZnNldCA9IGRhc2hXaWR0aDtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpJztcbiAgICB0aGlzLl9yZW5kZXJCb3JkZXJzKGN0eCk7XG4gICAgdGhpcy5fcmVuZGVyR3JpZChjdHgpO1xuXG4gICAgLy8gUmVzZXQgc2NhbGVcbiAgICBjdHguc2NhbGUoMS9zY2FsZVgsIDEvc2NhbGVZKTtcbiAgfSxcblxuICBfcmVuZGVyT3ZlcmxheTogZnVuY3Rpb24oY3R4KSB7XG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XG5cbiAgICAvL1xuICAgIC8vICAgIHgwICAgIHgxICAgICAgICB4MiAgICAgIHgzXG4gICAgLy8geTAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTEgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAwICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcfCAgICAgICAgIHxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyB5MiArLS0tLS0tKy0tLS0tLS0tLSstLS0tLS0tK1xuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyB5MyArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuICAgIC8vXG5cbiAgICB2YXIgeDAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0V2lkdGgoKSAvIDIgLSB0aGlzLmdldExlZnQoKSk7XG4gICAgdmFyIHgxID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyKTtcbiAgICB2YXIgeDIgPSBNYXRoLmNlaWwodGhpcy5nZXRXaWR0aCgpIC8gMik7XG4gICAgdmFyIHgzID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIgKyAoY2FudmFzLndpZHRoIC0gdGhpcy5nZXRXaWR0aCgpIC0gdGhpcy5nZXRMZWZ0KCkpKTtcblxuICAgIHZhciB5MCA9IE1hdGguY2VpbCgtdGhpcy5nZXRIZWlnaHQoKSAvIDIgLSB0aGlzLmdldFRvcCgpKTtcbiAgICB2YXIgeTEgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICB2YXIgeTIgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIpO1xuICAgIHZhciB5MyA9IE1hdGguY2VpbCh0aGlzLmdldEhlaWdodCgpIC8gMiArIChjYW52YXMuaGVpZ2h0IC0gdGhpcy5nZXRIZWlnaHQoKSAtIHRoaXMuZ2V0VG9wKCkpKTtcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIC8vIERyYXcgb3V0ZXIgcmVjdGFuZ2xlLlxuICAgIC8vIE51bWJlcnMgYXJlICsvLTEgc28gdGhhdCBvdmVybGF5IGVkZ2VzIGRvbid0IGdldCBibHVycnkuXG4gICAgY3R4Lm1vdmVUbyh4MCAtIDEsIHkwIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkwIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MyArIDEsIHkzICsgMSk7XG4gICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkzIC0gMSk7XG4gICAgY3R4LmxpbmVUbyh4MCAtIDEsIHkwIC0gMSk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuXG4gICAgLy8gRHJhdyBpbm5lciByZWN0YW5nbGUuXG4gICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDEsIHkyKTtcbiAgICBjdHgubGluZVRvKHgyLCB5Mik7XG4gICAgY3R4LmxpbmVUbyh4MiwgeTEpO1xuICAgIGN0eC5saW5lVG8oeDEsIHkxKTtcblxuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICBjdHguZmlsbCgpO1xuICB9LFxuXG4gIF9yZW5kZXJCb3JkZXJzOiBmdW5jdGlvbihjdHgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIpOyAvLyB1cHBlciBsZWZ0XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIHJpZ2h0XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gZG93biByaWdodFxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIGxlZnRcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH0sXG5cbiAgX3JlbmRlckdyaWQ6IGZ1bmN0aW9uKGN0eCkge1xuICAgIC8vIFZlcnRpY2FsIGxpbmVzXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDEvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHgubGluZVRvKC10aGlzLmdldFdpZHRoKCkvMiArIDIvMyAqIHRoaXMuZ2V0V2lkdGgoKSwgdGhpcy5nZXRIZWlnaHQoKS8yKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgLy8gSG9yaXpvbnRhbCBsaW5lc1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5saW5lVG8odGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAxLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDIvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgfVxufSk7XG5cbkRhcmtyb29tLnBsdWdpbnNbJ2Nyb3AnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAvLyBJbml0IHBvaW50XG4gIHN0YXJ0WDogbnVsbCxcbiAgc3RhcnRZOiBudWxsLFxuXG4gIC8vIEtleWNyb3BcbiAgaXNLZXlDcm9waW5nOiBmYWxzZSxcbiAgaXNLZXlMZWZ0OiBmYWxzZSxcbiAgaXNLZXlVcDogZmFsc2UsXG5cbiAgZGVmYXVsdHM6IHtcbiAgICAvLyBtaW4gY3JvcCBkaW1lbnNpb25cbiAgICBtaW5IZWlnaHQ6IDEsXG4gICAgbWluV2lkdGg6IDEsXG4gICAgLy8gZW5zdXJlIGNyb3AgcmF0aW9cbiAgICByYXRpbzogbnVsbCxcbiAgICAvLyBxdWljayBjcm9wIGZlYXR1cmUgKHNldCBhIGtleSBjb2RlIHRvIGVuYWJsZSBpdClcbiAgICBxdWlja0Nyb3BLZXk6IGZhbHNlXG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQ3JvcFBsdWdpbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHRoaXMuY3JvcEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2Nyb3AnLFxuICAgICAgdGl0bGU6ICdDcm9wIEltYWdlJ1xuICAgIH0pO1xuICAgIHRoaXMub2tCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdkb25lJyxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgIGhpZGU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ2Nsb3NlJyxcbiAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgaGlkZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgLy8gQnV0dG9ucyBjbGlja1xuICAgIHRoaXMuY3JvcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ3JvcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLm9rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jcm9wQ3VycmVudFpvbmUuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcblxuICAgIC8vIENhbnZhcyBldmVudHNcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6ZG93bicsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOm1vdmUnLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTp1cCcsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6bW92aW5nJywgdGhpcy5vbk9iamVjdE1vdmluZy5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0OnNjYWxpbmcnLCB0aGlzLm9uT2JqZWN0U2NhbGluZy5iaW5kKHRoaXMpKTtcblxuICAgIGZhYnJpYy51dGlsLmFkZExpc3RlbmVyKGZhYnJpYy5kb2N1bWVudCwgJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpKTtcbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuZGFya3Jvb20uYWRkRXZlbnRMaXN0ZW5lcignY29yZTp0cmFuc2Zvcm1hdGlvbicsIHRoaXMucmVsZWFzZUZvY3VzLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8vIEF2b2lkIGNyb3Agem9uZSB0byBnbyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlc1xuICBvbk9iamVjdE1vdmluZzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciB4ID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCksIHkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xuICAgIHZhciB3ID0gY3VycmVudE9iamVjdC5nZXRXaWR0aCgpLCBoID0gY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcbiAgICB2YXIgbWF4WCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gdztcbiAgICB2YXIgbWF4WSA9IGNhbnZhcy5nZXRIZWlnaHQoKSAtIGg7XG5cbiAgICBpZiAoeCA8IDApXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIDApO1xuICAgIGlmICh5IDwgMClcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCAwKTtcbiAgICBpZiAoeCA+IG1heFgpXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgnbGVmdCcsIG1heFgpO1xuICAgIGlmICh5ID4gbWF4WSlcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0KCd0b3AnLCBtYXhZKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICAvLyBQcmV2ZW50IGNyb3Agem9uZSBmcm9tIGdvaW5nIGJleW9uZCB0aGUgY2FudmFzIGVkZ2VzIChsaWtlIG1vdXNlTW92ZSlcbiAgb25PYmplY3RTY2FsaW5nOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZXZlbnRTY2FsaW5nID0gZmFsc2U7XG4gICAgdmFyIGN1cnJlbnRPYmplY3QgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGN1cnJlbnRPYmplY3QgIT09IHRoaXMuY3JvcFpvbmUpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIHZhciBtaW5YID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCk7XG4gICAgdmFyIG1pblkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpO1xuICAgIHZhciBtYXhYID0gY3VycmVudE9iamVjdC5nZXRMZWZ0KCkgKyBjdXJyZW50T2JqZWN0LmdldFdpZHRoKCk7XG4gICAgdmFyIG1heFkgPSBjdXJyZW50T2JqZWN0LmdldFRvcCgpICsgY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKTtcblxuICAgIGlmIChudWxsICE9PSB0aGlzLm9wdGlvbnMucmF0aW8pIHtcbiAgICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgbWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICBwcmV2ZW50U2NhbGluZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1pblggPCAwIHx8IG1heFggPiBjYW52YXMuZ2V0V2lkdGgoKSB8fCBwcmV2ZW50U2NhbGluZykge1xuICAgICAgdmFyIGxhc3RTY2FsZVggPSB0aGlzLmxhc3RTY2FsZVggfHwgMTtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVYKGxhc3RTY2FsZVgpO1xuICAgIH1cbiAgICBpZiAobWluWCA8IDApIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0TGVmdCgwKTtcbiAgICB9XG5cbiAgICBpZiAobWluWSA8IDAgfHwgbWF4WSA+IGNhbnZhcy5nZXRIZWlnaHQoKSB8fCBwcmV2ZW50U2NhbGluZykge1xuICAgICAgdmFyIGxhc3RTY2FsZVkgPSB0aGlzLmxhc3RTY2FsZVkgfHwgMTtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0U2NhbGVZKGxhc3RTY2FsZVkpO1xuICAgIH1cbiAgICBpZiAobWluWSA8IDApIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2V0VG9wKDApO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50T2JqZWN0LmdldFdpZHRoKCkgPCB0aGlzLm9wdGlvbnMubWluV2lkdGgpIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb1dpZHRoKHRoaXMub3B0aW9ucy5taW5XaWR0aCk7XG4gICAgfVxuICAgIGlmIChjdXJyZW50T2JqZWN0LmdldEhlaWdodCgpIDwgdGhpcy5vcHRpb25zLm1pbkhlaWdodCkge1xuICAgICAgY3VycmVudE9iamVjdC5zY2FsZVRvSGVpZ2h0KHRoaXMub3B0aW9ucy5taW5IZWlnaHQpO1xuICAgIH1cblxuICAgIHRoaXMubGFzdFNjYWxlWCA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVYKCk7XG4gICAgdGhpcy5sYXN0U2NhbGVZID0gY3VycmVudE9iamVjdC5nZXRTY2FsZVkoKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICAvLyBJbml0IGNyb3Agem9uZVxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcblxuICAgIC8vIHJlY2FsY3VsYXRlIG9mZnNldCwgaW4gY2FzZSBjYW52YXMgd2FzIG1hbmlwdWxhdGVkIHNpbmNlIGxhc3QgYGNhbGNPZmZzZXRgXG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuICAgIHZhciBwb2ludCA9IG5ldyBmYWJyaWMuUG9pbnQoeCwgeSk7XG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2NhbGUgb3IgZHJhZyB0aGUgY3JvcCB6b25lLlxuICAgIHZhciBhY3RpdmVPYmplY3QgPSBjYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XG4gICAgaWYgKGFjdGl2ZU9iamVjdCA9PT0gdGhpcy5jcm9wWm9uZSB8fCB0aGlzLmNyb3Bab25lLmNvbnRhaW5zUG9pbnQocG9pbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuXG4gICAgdGhpcy5zdGFydFggPSB4O1xuICAgIHRoaXMuc3RhcnRZID0geTtcbiAgfSxcblxuICAvLyBFeHRlbmQgY3JvcCB6b25lXG4gIG9uTW91c2VNb3ZlOiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIFF1aWNrIGNyb3AgZmVhdHVyZVxuICAgIGlmICh0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybiB0aGlzLm9uTW91c2VNb3ZlS2V5Q3JvcChldmVudCk7XG5cbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIHRoaXMuX3JlbmRlckNyb3Bab25lKHRoaXMuc3RhcnRYLCB0aGlzLnN0YXJ0WSwgeCwgeSk7XG4gIH0sXG5cbiAgb25Nb3VzZU1vdmVLZXlDcm9wOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgem9uZSA9IHRoaXMuY3JvcFpvbmU7XG5cbiAgICB2YXIgcG9pbnRlciA9IGNhbnZhcy5nZXRQb2ludGVyKGV2ZW50LmUpO1xuICAgIHZhciB4ID0gcG9pbnRlci54O1xuICAgIHZhciB5ID0gcG9pbnRlci55O1xuXG4gICAgaWYgKCF6b25lLmxlZnQgfHwgIXpvbmUudG9wKSB7XG4gICAgICB6b25lLnNldFRvcCh5KTtcbiAgICAgIHpvbmUuc2V0TGVmdCh4KTtcbiAgICB9XG5cbiAgICB0aGlzLmlzS2V5TGVmdCA9ICB4IDwgem9uZS5sZWZ0ICsgem9uZS53aWR0aCAvIDIgO1xuICAgIHRoaXMuaXNLZXlVcCA9IHkgPCB6b25lLnRvcCArIHpvbmUuaGVpZ2h0IC8gMiA7XG5cbiAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZShcbiAgICAgIE1hdGgubWluKHpvbmUubGVmdCwgeCksXG4gICAgICBNYXRoLm1pbih6b25lLnRvcCwgeSksXG4gICAgICBNYXRoLm1heCh6b25lLmxlZnQrem9uZS53aWR0aCwgeCksXG4gICAgICBNYXRoLm1heCh6b25lLnRvcCt6b25lLmhlaWdodCwgeSlcbiAgICApO1xuICB9LFxuXG4gIC8vIEZpbmlzaCBjcm9wIHpvbmVcbiAgb25Nb3VzZVVwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChudWxsID09PSB0aGlzLnN0YXJ0WCB8fCBudWxsID09PSB0aGlzLnN0YXJ0WSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcblxuICAgIHRoaXMuc3RhcnRYID0gbnVsbDtcbiAgICB0aGlzLnN0YXJ0WSA9IG51bGw7XG4gIH0sXG5cbiAgb25LZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IHRoaXMuaXNLZXlDcm9waW5nKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gQWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gdHJ1ZSA7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0V2lkdGgoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRIZWlnaHQoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVgoMSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRTY2FsZVkoMSk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRUb3AoMCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRMZWZ0KDApO1xuICB9LFxuXG4gIG9uS2V5VXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8IGV2ZW50LmtleUNvZGUgIT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgIXRoaXMuaXNLZXlDcm9waW5nKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gVW5hY3RpdmUgcXVpY2sgY3JvcCBmbG93XG4gICAgdGhpcy5pc0tleUNyb3BpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0WCA9IDE7XG4gICAgdGhpcy5zdGFydFkgPSAxO1xuICAgIHRoaXMub25Nb3VzZVVwKCk7XG4gIH0sXG5cbiAgc2VsZWN0Wm9uZTogZnVuY3Rpb24oeCwgeSwgd2lkdGgsIGhlaWdodCwgZm9yY2VEaW1lbnNpb24pIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XG5cbiAgICBpZiAoIWZvcmNlRGltZW5zaW9uKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh4LCB5LCB4K3dpZHRoLCB5K2hlaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3JvcFpvbmUuc2V0KHtcbiAgICAgICAgJ2xlZnQnOiB4LFxuICAgICAgICAndG9wJzogeSxcbiAgICAgICAgJ3dpZHRoJzogd2lkdGgsXG4gICAgICAgICdoZWlnaHQnOiBoZWlnaHRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICBjYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnNldEFjdGl2ZU9iamVjdCh0aGlzLmNyb3Bab25lKTtcbiAgICBjYW52YXMuY2FsY09mZnNldCgpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xuICB9LFxuXG4gIHRvZ2dsZUNyb3A6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgdGhpcy5yZXF1aXJlRm9jdXMoKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLnJlbGVhc2VGb2N1cygpO1xuICB9LFxuXG4gIGNyb3BDdXJyZW50Wm9uZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICByZXR1cm47XG5cbiAgICAvLyBBdm9pZCBjcm9waW5nIGVtcHR5IHpvbmVcbiAgICBpZiAodGhpcy5jcm9wWm9uZS53aWR0aCA8IDEgJiYgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPCAxKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcblxuICAgIC8vIENvbXB1dGUgY3JvcCB6b25lIGRpbWVuc2lvbnNcbiAgICB2YXIgdG9wID0gdGhpcy5jcm9wWm9uZS5nZXRUb3AoKSAtIGltYWdlLmdldFRvcCgpO1xuICAgIHZhciBsZWZ0ID0gdGhpcy5jcm9wWm9uZS5nZXRMZWZ0KCkgLSBpbWFnZS5nZXRMZWZ0KCk7XG4gICAgdmFyIHdpZHRoID0gdGhpcy5jcm9wWm9uZS5nZXRXaWR0aCgpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLmNyb3Bab25lLmdldEhlaWdodCgpO1xuXG4gICAgLy8gQWRqdXN0IGRpbWVuc2lvbnMgdG8gaW1hZ2Ugb25seVxuICAgIGlmICh0b3AgPCAwKSB7XG4gICAgICBoZWlnaHQgKz0gdG9wO1xuICAgICAgdG9wID0gMDtcbiAgICB9XG5cbiAgICBpZiAobGVmdCA8IDApIHtcbiAgICAgIHdpZHRoICs9IGxlZnQ7XG4gICAgICBsZWZ0ID0gMDtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBjcm9wIHRyYW5zZm9ybWF0aW9uLlxuICAgIC8vIE1ha2Ugc3VyZSB0byB1c2UgcmVsYXRpdmUgZGltZW5zaW9uIHNpbmNlIHRoZSBjcm9wIHdpbGwgYmUgYXBwbGllZFxuICAgIC8vIG9uIHRoZSBzb3VyY2UgaW1hZ2UuXG4gICAgdGhpcy5kYXJrcm9vbS5hcHBseVRyYW5zZm9ybWF0aW9uKG5ldyBDcm9wKHtcbiAgICAgIHRvcDogdG9wIC8gaW1hZ2UuZ2V0SGVpZ2h0KCksXG4gICAgICBsZWZ0OiBsZWZ0IC8gaW1hZ2UuZ2V0V2lkdGgoKSxcbiAgICAgIHdpZHRoOiB3aWR0aCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICBoZWlnaHQ6IGhlaWdodCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgIH0pKTtcbiAgfSxcblxuICAvLyBUZXN0IHdldGhlciBjcm9wIHpvbmUgaXMgc2V0XG4gIGhhc0ZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jcm9wWm9uZSAhPT0gdW5kZWZpbmVkO1xuICB9LFxuXG4gIC8vIENyZWF0ZSB0aGUgY3JvcCB6b25lXG4gIHJlcXVpcmVGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jcm9wWm9uZSA9IG5ldyBDcm9wWm9uZSh7XG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICBvcmlnaW5YOiAnbGVmdCcsXG4gICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgIC8vc3Ryb2tlOiAnIzQ0NCcsXG4gICAgICAvL3N0cm9rZURhc2hBcnJheTogWzUsIDVdLFxuICAgICAgLy9ib3JkZXJDb2xvcjogJyM0NDQnLFxuICAgICAgY29ybmVyQ29sb3I6ICcjNDQ0JyxcbiAgICAgIGNvcm5lclNpemU6IDgsXG4gICAgICB0cmFuc3BhcmVudENvcm5lcnM6IGZhbHNlLFxuICAgICAgbG9ja1JvdGF0aW9uOiB0cnVlLFxuICAgICAgaGFzUm90YXRpbmdQb2ludDogZmFsc2UsXG4gICAgfSk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldCgnbG9ja1VuaVNjYWxpbmcnLCB0cnVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5hZGQodGhpcy5jcm9wWm9uZSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdjcm9zc2hhaXInO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uLmFjdGl2ZSh0cnVlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUoZmFsc2UpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmhpZGUoZmFsc2UpO1xuICB9LFxuXG4gIC8vIFJlbW92ZSB0aGUgY3JvcCB6b25lXG4gIHJlbGVhc2VGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMuY3JvcFpvbmUucmVtb3ZlKCk7XG4gICAgdGhpcy5jcm9wWm9uZSA9IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMub2tCdXR0b24uaGlkZSh0cnVlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKHRydWUpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuZGVmYXVsdEN1cnNvciA9ICdkZWZhdWx0JztcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICBfcmVuZGVyQ3JvcFpvbmU6IGZ1bmN0aW9uKGZyb21YLCBmcm9tWSwgdG9YLCB0b1kpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICB2YXIgaXNSaWdodCA9ICh0b1ggPiBmcm9tWCk7XG4gICAgdmFyIGlzTGVmdCA9ICFpc1JpZ2h0O1xuICAgIHZhciBpc0Rvd24gPSAodG9ZID4gZnJvbVkpO1xuICAgIHZhciBpc1VwID0gIWlzRG93bjtcblxuICAgIHZhciBtaW5XaWR0aCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluV2lkdGgsIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICB2YXIgbWluSGVpZ2h0ID0gTWF0aC5taW4oK3RoaXMub3B0aW9ucy5taW5IZWlnaHQsIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG5cbiAgICAvLyBEZWZpbmUgY29ybmVyIGNvb3JkaW5hdGVzXG4gICAgdmFyIGxlZnRYID0gTWF0aC5taW4oZnJvbVgsIHRvWCk7XG4gICAgdmFyIHJpZ2h0WCA9IE1hdGgubWF4KGZyb21YLCB0b1gpO1xuICAgIHZhciB0b3BZID0gTWF0aC5taW4oZnJvbVksIHRvWSk7XG4gICAgdmFyIGJvdHRvbVkgPSBNYXRoLm1heChmcm9tWSwgdG9ZKTtcblxuICAgIC8vIFJlcGxhY2UgY3VycmVudCBwb2ludCBpbnRvIHRoZSBjYW52YXNcbiAgICBsZWZ0WCA9IE1hdGgubWF4KDAsIGxlZnRYKTtcbiAgICByaWdodFggPSBNYXRoLm1pbihjYW52YXMuZ2V0V2lkdGgoKSwgcmlnaHRYKTtcbiAgICB0b3BZID0gTWF0aC5tYXgoMCwgdG9wWSlcbiAgICBib3R0b21ZID0gTWF0aC5taW4oY2FudmFzLmdldEhlaWdodCgpLCBib3R0b21ZKTtcblxuICAgIC8vIFJlY2FsaWJyYXRlIGNvb3JkaW5hdGVzIGFjY29yZGluZyB0byBnaXZlbiBvcHRpb25zXG4gICAgaWYgKHJpZ2h0WCAtIGxlZnRYIDwgbWluV2lkdGgpIHtcbiAgICAgIGlmIChpc1JpZ2h0KVxuICAgICAgICByaWdodFggPSBsZWZ0WCArIG1pbldpZHRoO1xuICAgICAgZWxzZVxuICAgICAgICBsZWZ0WCA9IHJpZ2h0WCAtIG1pbldpZHRoO1xuICAgIH1cbiAgICBpZiAoYm90dG9tWSAtIHRvcFkgPCBtaW5IZWlnaHQpIHtcbiAgICAgIGlmIChpc0Rvd24pXG4gICAgICAgIGJvdHRvbVkgPSB0b3BZICsgbWluSGVpZ2h0O1xuICAgICAgZWxzZVxuICAgICAgICB0b3BZID0gYm90dG9tWSAtIG1pbkhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBUcnVuY2F0ZSB0cnVuY2F0ZSBhY2NvcmRpbmcgdG8gY2FudmFzIGRpbWVuc2lvbnNcbiAgICBpZiAobGVmdFggPCAwKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIGxlZnRcbiAgICAgIHJpZ2h0WCArPSBNYXRoLmFicyhsZWZ0WCk7XG4gICAgICBsZWZ0WCA9IDBcbiAgICB9XG4gICAgaWYgKHJpZ2h0WCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgdG8gdGhlIHJpZ2h0XG4gICAgICBsZWZ0WCAtPSAocmlnaHRYIC0gY2FudmFzLmdldFdpZHRoKCkpO1xuICAgICAgcmlnaHRYID0gY2FudmFzLmdldFdpZHRoKCk7XG4gICAgfVxuICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBib3R0b21cbiAgICAgIGJvdHRvbVkgKz0gTWF0aC5hYnModG9wWSk7XG4gICAgICB0b3BZID0gMFxuICAgIH1cbiAgICBpZiAoYm90dG9tWSA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgdG9wWSAtPSAoYm90dG9tWSAtIGNhbnZhcy5nZXRIZWlnaHQoKSk7XG4gICAgICBib3R0b21ZID0gY2FudmFzLmdldEhlaWdodCgpO1xuICAgIH1cblxuICAgIHZhciB3aWR0aCA9IHJpZ2h0WCAtIGxlZnRYO1xuICAgIHZhciBoZWlnaHQgPSBib3R0b21ZIC0gdG9wWTtcbiAgICB2YXIgY3VycmVudFJhdGlvID0gd2lkdGggLyBoZWlnaHQ7XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJhdGlvICYmICt0aGlzLm9wdGlvbnMucmF0aW8gIT09IGN1cnJlbnRSYXRpbykge1xuICAgICAgdmFyIHJhdGlvID0gK3RoaXMub3B0aW9ucy5yYXRpbztcblxuICAgICAgaWYodGhpcy5pc0tleUNyb3BpbmcpIHtcbiAgICAgICAgaXNMZWZ0ID0gdGhpcy5pc0tleUxlZnQ7XG4gICAgICAgIGlzVXAgPSB0aGlzLmlzS2V5VXA7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50UmF0aW8gPCByYXRpbykge1xuICAgICAgICB2YXIgbmV3V2lkdGggPSBoZWlnaHQgKiByYXRpbztcbiAgICAgICAgaWYgKGlzTGVmdCkge1xuICAgICAgICAgIGxlZnRYIC09IChuZXdXaWR0aCAtIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICB3aWR0aCA9IG5ld1dpZHRoO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50UmF0aW8gPiByYXRpbykge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gaGVpZ2h0IC8gKHJhdGlvICogaGVpZ2h0L3dpZHRoKTtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZIC09IChuZXdIZWlnaHQgLSBoZWlnaHQpO1xuICAgICAgICB9XG4gICAgICAgIGhlaWdodCA9IG5ld0hlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgICBsZWZ0WCA9IDA7XG4gICAgICAgIC8vVE9ET1xuICAgICAgfVxuICAgICAgaWYgKHRvcFkgPCAwKSB7XG4gICAgICAgIHRvcFkgPSAwO1xuICAgICAgICAvL1RPRE9cbiAgICAgIH1cbiAgICAgIGlmIChsZWZ0WCArIHdpZHRoID4gY2FudmFzLmdldFdpZHRoKCkpIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gY2FudmFzLmdldFdpZHRoKCkgLSBsZWZ0WDtcbiAgICAgICAgaGVpZ2h0ID0gbmV3V2lkdGggKiBoZWlnaHQgLyB3aWR0aDtcbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgICAgaWYgKGlzVXApIHtcbiAgICAgICAgICB0b3BZID0gZnJvbVkgLSBoZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0b3BZICsgaGVpZ2h0ID4gY2FudmFzLmdldEhlaWdodCgpKSB7XG4gICAgICAgIHZhciBuZXdIZWlnaHQgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSB0b3BZO1xuICAgICAgICB3aWR0aCA9IHdpZHRoICogbmV3SGVpZ2h0IC8gaGVpZ2h0O1xuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICBsZWZ0WCA9IGZyb21YIC0gd2lkdGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjb29yZGluYXRlc1xuICAgIHRoaXMuY3JvcFpvbmUubGVmdCA9IGxlZnRYO1xuICAgIHRoaXMuY3JvcFpvbmUudG9wID0gdG9wWTtcbiAgICB0aGlzLmNyb3Bab25lLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jcm9wWm9uZS5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5icmluZ1RvRnJvbnQodGhpcy5jcm9wWm9uZSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH1cbn0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG5cbiAgRGFya3Jvb20ucGx1Z2luc1snbGluZSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Cb3hQbHVnaW4oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdmFyIGxpbmVCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ2xpbmUnLFxuICAgICAgICB0aXRsZTogJ0FkZCBMaW5lJ1xuICAgICAgfSk7XG5cbiAgICAgIGxpbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZExpbmUuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGFkZExpbmU6IGZ1bmN0aW9uIGFkZExpbmUoKSB7XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgdmFyIGZhY3RvciA9IGltYWdlLnNjYWxlWDtcblxuICAgICAgdmFyIGxpbmUgPSBuZXcgZmFicmljLkxpbmUoWzAsIDIwMCwgMCwgMF0sIHtcbiAgICAgICAgbGVmdDogMjAwLFxuICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgc3Ryb2tlOiAncmVkJyxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgICAgIC8vbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGxvY2tTa2V3aW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NrZXdpbmdZOiB0cnVlLFxuICAgICAgICAvL2xvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgLy9sb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIHBhZGRpbmc6IDIwLFxuICAgICAgICBzY2FsZVg6IGZhY3RvcixcbiAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgIH0pO1xuXG4gICAgICBsaW5lLm9uKHtcbiAgICAgICAgc2NhbGluZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgb2JqID0gdGhpcyxcbiAgICAgICAgICAgIHcgPSBvYmoud2lkdGggKiBvYmouc2NhbGVYIC8gZmFjdG9yLFxuICAgICAgICAgICAgaCA9IG9iai5oZWlnaHQgKiBvYmouc2NhbGVZIC8gZmFjdG9yO1xuXG4gICAgICAgICAgb2JqLnNldCh7XG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhbnZhcy5hZGQobGluZSk7XG4gICAgfVxuXG4gIH0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG5cbiAgRGFya3Jvb20ucGx1Z2luc1snYXJyb3cnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQm94UGx1Z2luKCkge1xuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHZhciBhcnJvd0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiAnYXJyb3cnLFxuICAgICAgICB0aXRsZTogJ0FkZCBBcnJvdydcbiAgICAgIH0pO1xuXG4gICAgICBhcnJvd0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkQXJyb3cuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGFkZEFycm93OiBmdW5jdGlvbiBhZGRBcnJvdygpIHtcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICB2YXIgZmFjdG9yID0gaW1hZ2Uuc2NhbGVYO1xuXG4gICAgICB2YXIgbGluZSA9IG5ldyBmYWJyaWMuQXJyb3coWzUwLCA1MCwgNTAsIDIwMF0sIHtcbiAgICAgICAgc3Ryb2tlOiAncmVkJyxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgICAgIC8vaGFzQm9yZGVyczogZmFsc2UsXG4gICAgICAgIC8vaGFzQ29udHJvbHM6IGZhbHNlLFxuICAgICAgICBvcmlnaW5YOiAnY2VudGVyJyxcbiAgICAgICAgb3JpZ2luWTogJ2NlbnRlcicsXG4gICAgICAgIC8vbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICAvL2xvY2tTY2FsaW5nWTogdHJ1ZSxcbiAgICAgICAgbG9ja1NrZXdpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2tld2luZ1k6IHRydWUsXG4gICAgICAgIHBhZGRpbmc6IDIwLFxuICAgICAgICBzY2FsZVg6IGZhY3RvcixcbiAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgIH0pO1xuXG4gICAgICBjYW52YXMuYWRkKGxpbmUpO1xuXG4gICAgICBsaW5lLm9uKHtcbiAgICAgICAgc2NhbGluZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgZmFjdG9yID0gaW1hZ2Uuc2NhbGVYO1xuXG4gICAgICAgICAgdmFyIG9iaiA9IHRoaXMsXG4gICAgICAgICAgICB3ID0gb2JqLndpZHRoICogb2JqLnNjYWxlWCAvIGZhY3RvcixcbiAgICAgICAgICAgIGggPSBvYmouaGVpZ2h0ICogb2JqLnNjYWxlWSAvIGZhY3RvcjtcblxuICAgICAgICAgIG9iai5zZXQoe1xuICAgICAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgICAgICBoZWlnaHQ6IGgsXG4gICAgICAgICAgICBzY2FsZVg6IGZhY3RvcixcbiAgICAgICAgICAgIHNjYWxlWTogZmFjdG9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuXG4gIERhcmtyb29tLnBsdWdpbnNbJ3JlY3QnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQm94UGx1Z2luKCkge1xuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHZhciByZWN0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICdyZWN0JyxcbiAgICAgICAgdGl0bGU6ICdBZGQgUmVjdCdcbiAgICAgIH0pO1xuXG4gICAgICByZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRSZWN0LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBhZGRSZWN0OiBmdW5jdGlvbiBhZGRSZWN0KCkge1xuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICAgIHZhciBmYWN0b3IgPSBpbWFnZS5zY2FsZVg7XG5cbiAgICAgIHZhciByZWN0ID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgbGVmdDogMTAwICogZmFjdG9yLFxuICAgICAgICB0b3A6IDEwMCAqIGZhY3RvcixcbiAgICAgICAgZmlsbDogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICB3aWR0aDogdGhpcy5kYXJrcm9vbS5pbWFnZS53aWR0aCAvIDQsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBzdHJva2U6ICdyZWQnLFxuICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgIHNjYWxlWTogZmFjdG9yLFxuICAgICAgICBwYWRkaW5nOiAxNFxuICAgICAgfSk7XG5cbiAgICAgIHJlY3Qub24oe1xuICAgICAgICBzY2FsaW5nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBmYWN0b3IgPSBpbWFnZS5zY2FsZVg7XG5cbiAgICAgICAgICB2YXIgb2JqID0gdGhpcyxcbiAgICAgICAgICAgIHcgPSBvYmoud2lkdGggKiBvYmouc2NhbGVYIC8gZmFjdG9yLFxuICAgICAgICAgICAgaCA9IG9iai5oZWlnaHQgKiBvYmouc2NhbGVZIC8gZmFjdG9yO1xuXG4gICAgICAgICAgb2JqLnNldCh7XG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhbnZhcy5hZGQocmVjdCk7XG4gICAgfVxuXG4gIH0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuXG4gIERhcmtyb29tLnBsdWdpbnNbJ3RleHQnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQm94UGx1Z2luKCkge1xuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHZhciB0ZXh0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd0ZXh0JyxcbiAgICAgICAgdGl0bGU6ICdBZGQgVGV4dCdcbiAgICAgIH0pO1xuXG4gICAgICB0ZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRUZXh0LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBhZGRUZXh0OiBmdW5jdGlvbiBhZGRUZXh0KG9wdGlvbnMpIHtcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICB2YXIgZmFjdG9yID0gaW1hZ2Uuc2NhbGVYO1xuXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIHRleHQ6ICdTYW1wbGUgVGV4dC4uLicsXG4gICAgICAgIGZpbGw6ICdyZWQnLFxuICAgICAgICBmb250RmFtaWx5OiAnTW9ub3NwYWNlJyxcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBsZWZ0OiAxMDAgKiBmYWN0b3IsXG4gICAgICAgIHRvcDogMTAwICogZmFjdG9yXG4gICAgICB9O1xuXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgdmFyIHRleHQgPSBuZXcgZmFicmljLklUZXh0KG9wdGlvbnMudGV4dCwge1xuICAgICAgICBsZWZ0OiBvcHRpb25zLmxlZnQsXG4gICAgICAgIHRvcDogb3B0aW9ucy50b3AsXG4gICAgICAgIGZpbGw6IG9wdGlvbnMuZmlsbCxcbiAgICAgICAgZm9udEZhbWlseTogb3B0aW9ucy5mb250RmFtaWx5LFxuICAgICAgICBmb250U2l6ZTogb3B0aW9ucy5mb250U2l6ZSxcbiAgICAgICAgbG9ja1NrZXdpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2tld2luZ1k6IHRydWUsXG4gICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICBzY2FsZVk6IGZhY3RvcixcbiAgICAgICAgcGFkZGluZzogMTBcbiAgICAgIH0pO1xuXG4gICAgICB0ZXh0Lm9uKHtcbiAgICAgICAgc2NhbGluZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgZmFjdG9yID0gaW1hZ2Uuc2NhbGVYO1xuXG4gICAgICAgICAgdmFyIG9iaiA9IHRoaXMsXG4gICAgICAgICAgICB3ID0gb2JqLndpZHRoICogb2JqLnNjYWxlWCAvIGZhY3RvcixcbiAgICAgICAgICAgIGggPSBvYmouaGVpZ2h0ICogb2JqLnNjYWxlWSAvIGZhY3RvcjtcblxuICAgICAgICAgIG9iai5zZXQoe1xuICAgICAgICAgICAgd2lkdGg6IHcsXG4gICAgICAgICAgICBoZWlnaHQ6IGgsXG4gICAgICAgICAgICBzY2FsZVg6IGZhY3RvcixcbiAgICAgICAgICAgIHNjYWxlWTogZmFjdG9yXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjYW52YXMuYWRkKHRleHQpO1xuICAgIH1cblxuICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20ucGx1Z2luc1snc2F2ZSddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgZGVmYXVsdHM6IHtcbiAgICBjYWxsYmFjazogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRhcmtyb29tLnNlbGZEZXN0cm95KCk7XG4gICAgfVxuICB9LFxuXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXRpYWxpemVEYXJrcm9vbVNhdmVQbHVnaW4oKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB0aGlzLmRlc3Ryb3lCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdzYXZlJyxcbiAgICAgIHRpdGxlOiAnU2F2ZSBjaGFuZ2VzJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5kZXN0cm95QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcHRpb25zLmNhbGxiYWNrLmJpbmQodGhpcykpO1xuICB9LFxufSk7XG5cbn0pKCk7XG4iLCI7KGZ1bmN0aW9uICh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljLCAkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBqb2luQXR0cmlidXRlcyhhdHRyaWJ1dGVzQXJyYXkpIHtcbiAgICB2YXIgYXR0cmlidXRlcyA9IFtdO1xuICAgIGZvciAodmFyIGkgaW4gYXR0cmlidXRlc0FycmF5KSB7XG4gICAgICBhdHRyaWJ1dGVzLnB1c2goaSArICc9XCInICsgYXR0cmlidXRlc0FycmF5W2ldICsgJ1wiJyk7XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGVzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRyb2xDb250YWluZXIoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBDb250cm9sQ29udGFpbmVyLnByb3RvdHlwZSA9IHtcbiAgICBjcmVhdGVDb250cm9sR3JvdXA6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICB2YXIgJGdyb3VwID0gJCgnPGRpdiBjbGFzcz1cImRhcmtyb29tLWNvbnRyb2wtZ3JvdXBcIj48L2Rpdj4nKTtcbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJGdyb3VwKTtcblxuICAgICAgcmV0dXJuIG5ldyBDb250cm9sR3JvdXAoJGdyb3VwKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gQ29udHJvbEdyb3VwKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgQ29udHJvbEdyb3VwLnByb3RvdHlwZSA9IHtcbiAgICBjcmVhdGVDb250cm9sOiBmdW5jdGlvbihwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgaWQ6ICdkYXJrcm9vbS1jb250cm9sLScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICctJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCksXG4gICAgICAgICAgY2xhc3M6ICdkYXJrcm9vbS1jb250cm9sLWVsZW1lbnQnXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgb3B0aW9uczoge30sXG4gICAgICAgIHNjb3BlOiBbXSxcbiAgICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcbiAgICAgICAgaGlkZTogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgICAgfTtcblxuICAgICAgcHJvcGVydGllcyA9ICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRzLCBwcm9wZXJ0aWVzKTtcblxuICAgICAgc3dpdGNoIChwcm9wZXJ0aWVzLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY29sb3InOlxuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUlucHV0Q29udHJvbChwcm9wZXJ0aWVzKTtcblxuICAgICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVNlbGVjdENvbnRyb2wocHJvcGVydGllcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG4gICAgY3JlYXRlSW5wdXRDb250cm9sOiBmdW5jdGlvbihwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IGpvaW5BdHRyaWJ1dGVzKHByb3BlcnRpZXMuYXR0cmlidXRlcyk7XG5cbiAgICAgIHZhciAkaW5wdXQgPSAkKCc8aW5wdXQgdHlwZT1cIicrIHByb3BlcnRpZXMudHlwZSArJ1wiICcgKyBhdHRyaWJ1dGVzICsnIHZhbHVlPVwiJysgcHJvcGVydGllcy52YWx1ZSArJ1wiPicpO1xuICAgICAgdmFyICRsYWJlbCA9IG51bGw7XG4gICAgICBpZiAocHJvcGVydGllcy5sYWJlbCkge1xuICAgICAgICAkbGFiZWwgPSAkKCc8bGFiZWwgY2xhc3M9XCJkYXJrcm9vbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJysgcHJvcGVydGllcy5hdHRyaWJ1dGVzLmlkICsnXCI+JysgcHJvcGVydGllcy5sYWJlbCArJzwvbGFiZWw+Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJGxhYmVsKS5hcHBlbmQoJGlucHV0KTtcblxuICAgICAgcmV0dXJuIG5ldyBDb250cm9sKCRpbnB1dCwgJGxhYmVsLCBwcm9wZXJ0aWVzKTtcbiAgICB9LFxuICAgIGNyZWF0ZVNlbGVjdENvbnRyb2w6IGZ1bmN0aW9uKHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gam9pbkF0dHJpYnV0ZXMocHJvcGVydGllcy5hdHRyaWJ1dGVzKTtcblxuICAgICAgdmFyICRzZWxlY3QgPSAkKCc8c2VsZWN0ICcgKyBhdHRyaWJ1dGVzICsnPicpO1xuICAgICAgdmFyICRsYWJlbCA9IG51bGw7XG4gICAgICBpZiAocHJvcGVydGllcy5sYWJlbCkge1xuICAgICAgICAkbGFiZWwgPSAkKCc8bGFiZWwgY2xhc3M9XCJkYXJrcm9vbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiJysgcHJvcGVydGllcy5hdHRyaWJ1dGVzLmlkICsnXCI+JysgcHJvcGVydGllcy5sYWJlbCArJzwvbGFiZWw+Jyk7XG4gICAgICB9XG4gICAgICB2YXIgb3B0aW9ucyA9ICcnO1xuICAgICAgZm9yICh2YXIgaSBpbiBwcm9wZXJ0aWVzLm9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHJvdyA9IHByb3BlcnRpZXMub3B0aW9uc1tpXTtcbiAgICAgICAgdmFyIHNlbGVjdGVkID0gcm93LnZhbHVlID09IHByb3BlcnRpZXMudmFsdWUgPyAgJ3NlbGVjdGVkPVwic2VsZWN0ZWRcIicgOiAnJztcblxuICAgICAgICBvcHRpb25zICs9ICc8b3B0aW9uIHZhbHVlPVwiJysgcm93LnZhbHVlICsnXCIgJysgc2VsZWN0ZWQgKyc+Jysgcm93LnRpdGxlICsnPC9vcHRpb24+JztcbiAgICAgIH1cblxuICAgICAgJHNlbGVjdC5hcHBlbmQob3B0aW9ucyk7XG5cbiAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmQoJGxhYmVsKS5hcHBlbmQoJHNlbGVjdCk7XG5cbiAgICAgIHJldHVybiBuZXcgQ29udHJvbCgkc2VsZWN0LCAkbGFiZWwsIHByb3BlcnRpZXMpO1xuICAgIH0sXG4gICAgY3JlYXRlQnV0dG9uQ29udHJvbDogZnVuY3Rpb24ocHJvcGVydGllcykge1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBqb2luQXR0cmlidXRlcyhwcm9wZXJ0aWVzLmF0dHJpYnV0ZXMpO1xuXG4gICAgICB2YXIgJGJ1dHRvbiA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiICcgKyBhdHRyaWJ1dGVzICsnPicrIHByb3BlcnRpZXMudGl0bGUgKyc8L2J1dHRvbj4nKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgkYnV0dG9uKTtcblxuICAgICAgcmV0dXJuIG5ldyBDb250cm9sKCRidXR0b24sIG51bGwsIHByb3BlcnRpZXMpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBDb250cm9sKGVsZW1lbnQsIGxhYmVsRWxlbWVudCwgcHJvcGVydGllcykge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgPSBsYWJlbEVsZW1lbnQ7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcblxuICAgIHRoaXMuaGlkZShwcm9wZXJ0aWVzLmhpZGUpO1xuICAgIHRoaXMuZGlzYWJsZShwcm9wZXJ0aWVzLmRpc2FibGVkKTtcbiAgfVxuXG4gIENvbnRyb2wucHJvdG90eXBlID0ge1xuICAgIGFjdGl2ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZENsYXNzKCdkYXJrcm9vbS1jb250cm9sLWFjdGl2ZScpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnZGFya3Jvb20tY29udHJvbC1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGhpZGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRDbGFzcygnZGFya3Jvb20tY29udHJvbC1oaWRkZW4nKTtcbiAgICAgICAgaWYgKHRoaXMubGFiZWxFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5sYWJlbEVsZW1lbnQuYWRkQ2xhc3MoJ2Rhcmtyb29tLWNvbnRyb2wtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rhcmtyb29tLWNvbnRyb2wtaGlkZGVuJyk7XG4gICAgICAgIGlmICh0aGlzLmxhYmVsRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMubGFiZWxFbGVtZW50LnJlbW92ZUNsYXNzKCdkYXJrcm9vbS1jb250cm9sLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBkaXNhYmxlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIEFWQUlMQUJMRV9GT05UUyA9IChmdW5jdGlvbigpIHtcblxuICAgIHZhciBBTExfRk9OVFMgPSBbXCJDdXJzaXZlXCIsIFwiTW9ub3NwYWNlXCIsIFwiU2VyaWZcIiwgXCJTYW5zLXNlcmlmXCIsIFwiRmFudGFzeVwiLCBcIkFyaWFsXCIsIFwiQXJpYWwgQmxhY2tcIixcbiAgICAgIFwiQXJpYWwgTmFycm93XCIsIFwiQXJpYWwgUm91bmRlZCBNVCBCb2xkXCIsIFwiQm9va21hbiBPbGQgU3R5bGVcIiwgXCJCcmFkbGV5IEhhbmQgSVRDXCIsIFwiQ2VudHVyeVwiLFxuICAgICAgXCJDZW50dXJ5IEdvdGhpY1wiLCBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb3VyaWVyXCIsIFwiQ291cmllciBOZXdcIiwgXCJHZW9yZ2lhXCIsIFwiR2VudGl1bVwiLCBcIkltcGFjdFwiLFxuICAgICAgXCJLaW5nXCIsIFwiTHVjaWRhIENvbnNvbGVcIiwgXCJMYWxpdFwiLCBcIk1vZGVuYVwiLCBcIk1vbm90eXBlIENvcnNpdmFcIiwgXCJQYXB5cnVzXCIsIFwiVGFob21hXCIsIFwiVGVYXCIsXG4gICAgICBcIlRpbWVzXCIsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFwiVHJlYnVjaGV0IE1TXCIsIFwiVmVyZGFuYVwiLCBcIlZlcm9uYVwiLCBcIlVidW50dVwiLCBcIlVidW50dSBNb25vXCIsXG4gICAgICBcIlVidW50dSBDb25kZW5zZWRcIiwgXCJIZWx2ZXRpY2FcIl0uc29ydCgpO1xuXG4gICAgdmFyIGZvbnREZXRlY3RvciA9IChuZXcgRGV0ZWN0b3IoKSkuZGV0ZWN0O1xuXG4gICAgcmV0dXJuIEFMTF9GT05UUy5maWx0ZXIoZnVuY3Rpb24oZm9udCkgeyByZXR1cm4gZm9udERldGVjdG9yKGZvbnQpOyB9KTtcbiAgfSkoKTtcblxuICBmdW5jdGlvbiBnZXRPYmplY3RTdHlsZShzdHlsZU5hbWUsIG9iamVjdCkge1xuICAgIGlmICghb2JqZWN0KSByZXR1cm4gJyc7XG5cbiAgICByZXR1cm4gKG9iamVjdC5nZXRTZWxlY3Rpb25TdHlsZXMgJiYgb2JqZWN0LmlzRWRpdGluZylcbiAgICAgID8gKG9iamVjdC5nZXRTZWxlY3Rpb25TdHlsZXMoKVtzdHlsZU5hbWVdIHx8ICcnKVxuICAgICAgOiAob2JqZWN0W3N0eWxlTmFtZV0gfHwgJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0T2JqZWN0U3R5bGUoc3R5bGVOYW1lLCB2YWx1ZSwgb2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHJldHVybjtcblxuICAgIGlmIChvYmplY3Quc2V0U2VsZWN0aW9uU3R5bGVzICYmIG9iamVjdC5pc0VkaXRpbmcpIHtcbiAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgc3R5bGVbc3R5bGVOYW1lXSA9IHZhbHVlO1xuICAgICAgb2JqZWN0LnNldFNlbGVjdGlvblN0eWxlcyhzdHlsZSk7XG4gICAgICBvYmplY3Quc2V0Q29vcmRzKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb2JqZWN0W3N0eWxlTmFtZV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvYmplY3Quc2V0Q29vcmRzKCk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGdldE9iamVjdFByb3AobmFtZSwgb2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHJldHVybiAnJztcblxuICAgIHJldHVybiBvYmplY3RbbmFtZV0gfHwgJyc7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRPYmplY3RQcm9wKG5hbWUsIHZhbHVlLCBvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCkgcmV0dXJuO1xuXG4gICAgb2JqZWN0LnNldChuYW1lLCB2YWx1ZSkuc2V0Q29vcmRzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb2xvcihvYmplY3QpIHtcbiAgICB2YXIgdHlwZSA9IG9iamVjdC5nZXQoJ3R5cGUnKTtcbiAgICBpZiAodHlwZSA9PSAndGV4dCcgfHwgdHlwZSA9PSAnaS10ZXh0Jykge1xuICAgICAgcmV0dXJuIGdldE9iamVjdFN0eWxlKCdmaWxsJywgb2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldE9iamVjdFN0eWxlKCdzdHJva2UnLCBvYmplY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q29sb3Iob2JqZWN0LCBjb2xvcikge1xuICAgIHZhciB0eXBlID0gb2JqZWN0LmdldCgndHlwZScpO1xuICAgIGlmICh0eXBlID09ICd0ZXh0JyB8fCB0eXBlID09ICdpLXRleHQnKSB7XG4gICAgICByZXR1cm4gc2V0T2JqZWN0U3R5bGUoJ2ZpbGwnLCBjb2xvciwgb2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHNldE9iamVjdFN0eWxlKCdzdHJva2UnLCBjb2xvciwgb2JqZWN0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNpemUob2JqZWN0KSB7XG4gICAgdmFyIHR5cGUgPSBvYmplY3QuZ2V0KCd0eXBlJyk7XG4gICAgaWYgKHR5cGUgPT0gJ3RleHQnIHx8IHR5cGUgPT0gJ2ktdGV4dCcpIHtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKChnZXRPYmplY3RTdHlsZSgnZm9udFNpemUnLCBvYmplY3QpIC0gMTIpIC8gMik7XG4gICAgfVxuICAgIHJldHVybiBnZXRPYmplY3RTdHlsZSgnc3Ryb2tlV2lkdGgnLCBvYmplY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2l6ZShvYmplY3QsIHNpemUpIHtcbiAgICB2YXIgdHlwZSA9IG9iamVjdC5nZXQoJ3R5cGUnKTtcbiAgICBpZiAodHlwZSA9PSAndGV4dCcgfHwgdHlwZSA9PSAnaS10ZXh0Jykge1xuICAgICAgc2V0T2JqZWN0U3R5bGUoJ2ZvbnRTaXplJywgMTIgKyBzaXplICogMiwgb2JqZWN0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzZXRPYmplY3RTdHlsZSgnc3Ryb2tlV2lkdGgnLCBzaXplLCBvYmplY3QpXG4gICAgfVxuICAgIG9iamVjdC5zZXRDb29yZHMoKTtcbiAgfVxuXG5cblxuXG4gIERhcmtyb29tLnBsdWdpbnNbJ2NvbnRyb2xzJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUNvbnRyb2xzUGx1Z2luKCkge1xuICAgICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzZWxlY3RlZCcsIHRoaXMuX29uT2JqZWN0U2VsZWN0ZWQuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignc2VsZWN0aW9uOmNsZWFyZWQnLCB0aGlzLl9vbk9iamVjdFNlbGVjdGlvbkNsZWFyZWQuYmluZCh0aGlzKSk7XG5cbiAgICAgIHZhciAkY29udGFpbmVyID0gJCgnPGRpdiBjbGFzcz1cImRhcmtyb29tLWNvbnRyb2xzLWNvbnRhaW5lclwiPjwvZGl2PicpO1xuICAgICAgJCh0aGlzLmRhcmtyb29tLmNvbnRhaW5lckVsZW1lbnQpLnByZXBlbmQoJGNvbnRhaW5lcik7XG5cbiAgICAgIHRoaXMuY29udHJvbHNDb250YWluZXIgPSBuZXcgQ29udHJvbENvbnRhaW5lcigkY29udGFpbmVyKTtcbiAgICAgIHRoaXMuX2luaXRDb250cm9scygpO1xuICAgIH0sXG5cbiAgICBfaW5pdENvbnRyb2xzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHZhciBjb250cm9sR3JvdXAgPSB0aGlzLmNvbnRyb2xzQ29udGFpbmVyLmNyZWF0ZUNvbnRyb2xHcm91cCgpO1xuXG4gICAgICB2YXIgY29sb3JJbnB1dCA9IGNvbnRyb2xHcm91cC5jcmVhdGVDb250cm9sKHtcbiAgICAgICAgbGFiZWw6ICdDb2xvcicsXG4gICAgICAgIHR5cGU6ICdjb2xvcicsXG4gICAgICAgIHZhbHVlOiAnI2ZmMDAwMCdcbiAgICAgIH0pO1xuXG4gICAgICBjb2xvcklucHV0LmVsZW1lbnQub24oJ2lucHV0IGNoYW5nZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICB2YXIgYWN0aXZlT2JqZWN0ID0gc2VsZi5kYXJrcm9vbS5jYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XG4gICAgICAgIGlmIChhY3RpdmVPYmplY3QgIT0gbnVsbCkge1xuICAgICAgICAgIHNldENvbG9yKGFjdGl2ZU9iamVjdCwgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgc2VsZi5kYXJrcm9vbS5jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29sb3JJbnB1dC5wcm9wZXJ0aWVzLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29sb3JJbnB1dCA9IGNvbG9ySW5wdXQ7XG5cbiAgICAgIHZhciBzaXplUmFuZ2UgPSBjb250cm9sR3JvdXAuY3JlYXRlQ29udHJvbCh7XG4gICAgICAgIGxhYmVsOiAnU2l6ZScsXG4gICAgICAgIHR5cGU6ICdyYW5nZScsXG4gICAgICAgIHZhbHVlOiAnMicsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBtaW46IDEsXG4gICAgICAgICAgbWF4OiAxNixcbiAgICAgICAgICBzdGVwOiAxXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzaXplUmFuZ2UuZWxlbWVudC5vbignaW5wdXQgY2hhbmdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBhY3RpdmVPYmplY3QgPSBzZWxmLmRhcmtyb29tLmNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcbiAgICAgICAgaWYgKGFjdGl2ZU9iamVjdCAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIHNpemUgPSBwYXJzZUludCh0aGlzLnZhbHVlLCAxMCk7XG4gICAgICAgICAgc2V0U2l6ZShhY3RpdmVPYmplY3QsIHNpemUpO1xuICAgICAgICAgIHNlbGYuZGFya3Jvb20uY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNpemVSYW5nZS5wcm9wZXJ0aWVzLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2l6ZVJhbmdlID0gc2l6ZVJhbmdlO1xuXG4gICAgICB2YXIgZm9udE9wdGlvbnMgPSB7fTtcblxuICAgICAgZm9yICh2YXIgaSBpbiBBVkFJTEFCTEVfRk9OVFMpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBBVkFJTEFCTEVfRk9OVFNbaV07XG4gICAgICAgIGZvbnRPcHRpb25zW25hbWVdID0ge1xuICAgICAgICAgIHZhbHVlOiBuYW1lLFxuICAgICAgICAgIHRpdGxlOiBuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250U2VsZWN0aW9uID0gY29udHJvbEdyb3VwLmNyZWF0ZUNvbnRyb2woe1xuICAgICAgICBsYWJlbDogJ0ZvbnQnLFxuICAgICAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgdmFsdWU6ICdNb25vc3BhY2UnLFxuICAgICAgICBvcHRpb25zOiBmb250T3B0aW9ucyxcbiAgICAgICAgaGlkZTogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIGZvbnRTZWxlY3Rpb24uZWxlbWVudC5vbignY2hhbmdlJywgZnVuY3Rpb24oZXYpe1xuICAgICAgICB2YXIgYWN0aXZlT2JqZWN0ID0gc2VsZi5kYXJrcm9vbS5jYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XG4gICAgICAgIGlmIChhY3RpdmVPYmplY3QgIT0gbnVsbCkge1xuICAgICAgICAgIHNldE9iamVjdFByb3AoJ2ZvbnRGYW1pbHknLCB0aGlzLnZhbHVlLCBhY3RpdmVPYmplY3QpO1xuICAgICAgICAgIHNlbGYuZGFya3Jvb20uY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGZvbnRTZWxlY3Rpb24ucHJvcGVydGllcy52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZvbnRTZWxlY3Rpb24gPSBmb250U2VsZWN0aW9uO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0OmFkZGVkJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIGlmICghc2VsZi5kYXJrcm9vbS5pbml0aWFsaXplZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2JqID0gZXYudGFyZ2V0O1xuICAgICAgICB2YXIgY29sb3IgPSBzZWxmLmNvbG9ySW5wdXQucHJvcGVydGllcy52YWx1ZTtcbiAgICAgICAgdmFyIHNpemUgPSBwYXJzZUludChzZWxmLnNpemVSYW5nZS5wcm9wZXJ0aWVzLnZhbHVlLCAxMCk7XG5cbiAgICAgICAgaWYgKG9iai5zZWxlY3RhYmxlKSB7XG4gICAgICAgICAgc2V0Q29sb3Iob2JqLCBjb2xvcik7XG4gICAgICAgICAgc2V0U2l6ZShvYmosIHNpemUpO1xuXG4gICAgICAgICAgc2VsZi5kYXJrcm9vbS5jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgICAgc2VsZi5kYXJrcm9vbS5jYW52YXMuc2V0QWN0aXZlT2JqZWN0KG9iaik7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG5cbiAgICAgIHZhciBkZWxldGVCdXR0b24gPSBjb250cm9sR3JvdXAuY3JlYXRlQnV0dG9uQ29udHJvbCh7XG4gICAgICAgIGxhYmVsOiAnJyxcbiAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgdGl0bGU6ICdERUxFVEUnLFxuICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgY2xhc3M6ICdkYXJrcm9vbS1kZWxldGUtYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICBoaWRlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgZGVsZXRlQnV0dG9uLmVsZW1lbnQuY2xpY2sodGhpcy5kZWxldGVBY3RpdmVPYmplY3QuYmluZCh0aGlzKSk7XG5cbiAgICAgIHRoaXMuZGVsZXRlQnV0dG9uID0gZGVsZXRlQnV0dG9uO1xuXG4gICAgICBpZiAodGhpcy5kYXJrcm9vbS5wbHVnaW5zWydwYWRkaW5nJ10pIHtcbiAgICAgICAgdGhpcy5faW5pdFBhZGRpbmdDb250cm9scygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgX2luaXRQYWRkaW5nQ29udHJvbHM6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIGNhbnZhcyA9IHNlbGYuZGFya3Jvb20uY2FudmFzO1xuICAgICAgdGhpc1snY2FudmFzUGFkZGluZ0NvbnRyb2xzJ10gPSB7fTtcblxuICAgICAgdmFyIGNvbnRyb2xHcm91cCA9IHRoaXMuY29udHJvbHNDb250YWluZXIuY3JlYXRlQ29udHJvbEdyb3VwKCk7XG5cbiAgICAgIHZhciBjb2xvcklucHV0ID0gY29udHJvbEdyb3VwLmNyZWF0ZUNvbnRyb2woe1xuICAgICAgICBsYWJlbDogJ0NhbnZhcyBDb2xvcicsXG4gICAgICAgIHR5cGU6ICdjb2xvcicsXG4gICAgICAgIHZhbHVlOiBzZWxmLmRhcmtyb29tLmNhbnZhcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGhpZGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBjb2xvcklucHV0LmVsZW1lbnQub24oJ2lucHV0IGNoYW5nZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICBjYW52YXMuYmFja2dyb3VuZENvbG9yID0gdGhpcy52YWx1ZTtcbiAgICAgICAgY2FudmFzLnJlbmRlckFsbCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXNbJ2NhbnZhc1BhZGRpbmdDb250cm9scyddWydjb2xvciddID0gY29sb3JJbnB1dDtcblxuICAgICAgZnVuY3Rpb24gY3JlYXRlUGFkZGluZ0NvbnRyb2wob3B0aW9ucykge1xuICAgICAgICB2YXIgcGFkZGluZ0NvbnRyb2wgPSBjb250cm9sR3JvdXAuY3JlYXRlQ29udHJvbCh7XG4gICAgICAgICAgbGFiZWw6IG9wdGlvbnMubGFiZWwsXG4gICAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDI1MCxcbiAgICAgICAgICAgIHN0ZXA6IDI1XG4gICAgICAgICAgfSxcbiAgICAgICAgICBoaWRlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBhZGRpbmdDb250cm9sLmVsZW1lbnQub24oJ2lucHV0IGNoYW5nZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgIHZhciBwYWRkaW5nID0gcGFyc2VJbnQodGhpcy52YWx1ZSwgMTApO1xuXG4gICAgICAgICAgc2VsZi5kYXJrcm9vbS5wbHVnaW5zWydwYWRkaW5nJ10ucGFkKG9wdGlvbnMua2V5LCBwYWRkaW5nKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBzZWxmWydjYW52YXNQYWRkaW5nQ29udHJvbHMnXVtvcHRpb25zLmtleV0gPSBwYWRkaW5nQ29udHJvbDtcblxuICAgICAgfVxuXG4gICAgICB2YXIgcGFkZGluZ0NvbnRyb2xzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiVG9wXCIsXG4gICAgICAgICAga2V5OiBcInRvcFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJCb3R0b21cIixcbiAgICAgICAgICBrZXk6IFwiYm90dG9tXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkxlZnRcIixcbiAgICAgICAgICBrZXk6IFwibGVmdFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJSaWdodFwiLFxuICAgICAgICAgIGtleTogXCJyaWdodFwiXG4gICAgICAgIH1cbiAgICAgIF07XG5cbiAgICAgIGZvciAodmFyIGkgaW4gcGFkZGluZ0NvbnRyb2xzKSB7XG4gICAgICAgIGNyZWF0ZVBhZGRpbmdDb250cm9sKHBhZGRpbmdDb250cm9sc1tpXSk7XG4gICAgICB9XG5cbiAgICAgICQoY2FudmFzLmdldEVsZW1lbnQoKSkub24oJ2Rhcmtyb29tOmltYWdlOnJlcGxhY2VkJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBzZWxmWydjYW52YXNQYWRkaW5nQ29udHJvbHMnXSkge1xuICAgICAgICAgIHZhciBjb250cm9sID0gc2VsZlsnY2FudmFzUGFkZGluZ0NvbnRyb2xzJ11baV07XG4gICAgICAgICAgaWYgKGkgPT0gJ2NvbG9yJykge1xuICAgICAgICAgICAgY29udHJvbC5lbGVtZW50LnZhbChjYW52YXMuYmFja2dyb3VuZENvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250cm9sLmVsZW1lbnQudmFsKGNhbnZhcy5wYWRkaW5nW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfSxcblxuICAgIF9vbk9iamVjdFNlbGVjdGVkOiBmdW5jdGlvbihldikge1xuICAgICAgdmFyIG9iaiA9IGV2LnRhcmdldDtcbiAgICAgIHZhciBjb2xvciA9IGdldENvbG9yKG9iaik7XG4gICAgICB2YXIgc2l6ZSA9IGdldFNpemUob2JqKTtcbiAgICAgIHZhciB0eXBlID0gb2JqLmdldCgndHlwZScpO1xuXG4gICAgICB0aGlzLmNvbG9ySW5wdXQuZWxlbWVudC52YWwoY29sb3IpO1xuICAgICAgdGhpcy5zaXplUmFuZ2UuZWxlbWVudC52YWwoc2l6ZSk7XG5cbiAgICAgIGlmICh0eXBlID09ICd0ZXh0JyB8fCB0eXBlID09ICdpLXRleHQnKSB7XG4gICAgICAgIHZhciBmb250RmFtaWx5ID0gZ2V0T2JqZWN0UHJvcCgnZm9udEZhbWlseScsIG9iaik7XG4gICAgICAgIHRoaXMuZm9udFNlbGVjdGlvbi5lbGVtZW50LnZhbChmb250RmFtaWx5KTtcbiAgICAgICAgdGhpcy5mb250U2VsZWN0aW9uLmhpZGUoZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5oaWRlKGZhbHNlKTtcbiAgICB9LFxuXG4gICAgX29uT2JqZWN0U2VsZWN0aW9uQ2xlYXJlZDogZnVuY3Rpb24oZXYpIHtcbiAgICAgIGlmICh0aGlzLmNvbG9ySW5wdXQpIHtcbiAgICAgICAgdGhpcy5jb2xvcklucHV0LmVsZW1lbnQudmFsKHRoaXMuY29sb3JJbnB1dC5wcm9wZXJ0aWVzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNpemVSYW5nZSkge1xuICAgICAgICB0aGlzLnNpemVSYW5nZS5lbGVtZW50LnZhbCh0aGlzLnNpemVSYW5nZS5wcm9wZXJ0aWVzLnZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9udFNlbGVjdGlvbi5oaWRlKHRydWUpO1xuICAgICAgdGhpcy5kZWxldGVCdXR0b24uaGlkZSh0cnVlKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlQWN0aXZlT2JqZWN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhY3RpdmVPYmplY3QgPSB0aGlzLmRhcmtyb29tLmNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcbiAgICAgIGlmIChhY3RpdmVPYmplY3QgIT0gbnVsbCkge1xuICAgICAgICBhY3RpdmVPYmplY3QucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRlbGV0ZUJ1dHRvbi5oaWRlKHRydWUpO1xuICAgIH1cbiAgfSk7XG59KSh3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljLCBqUXVlcnkpO1xuIl19
