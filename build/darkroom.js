(function() {
'use strict';

// Inject SVG icons into the DOM
var element = document.createElement('div');
element.id = 'darkroom-icons';
element.style.height = 0;
element.style.width = 0;
element.style.position = 'absolute';
element.style.visibility = 'hidden';
element.innerHTML = '<!-- inject:svg --><svg xmlns="http://www.w3.org/2000/svg"><symbol id="arrow" viewBox="0 0 24 24"><path d="M24 11.871L19 7v3H0v4h19v3z"/></symbol><symbol id="close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></symbol><symbol id="crop" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8zM7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/></symbol><symbol id="done" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></symbol><symbol id="line" viewBox="0 0 24 24"><path d="M0 10h24v4H0z"/></symbol><symbol id="rect" viewBox="0 0 24 24"><path d="M22 2v20H2V2h20zm2-2H0v24h24V0z"/></symbol><symbol id="redo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></symbol><symbol id="rotate-left" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/></symbol><symbol id="rotate-right" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11a7.906 7.906 0 0 0-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/></symbol><symbol id="save" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></symbol><symbol id="text" viewBox="0 0 24 24"><path d="M22 0H2v6h1.999c0-1.174.397-3 2.001-3h4v16.874C10 21.048 9.175 22 8 22H7v2h9.999v-2H16c-1.174 0-2-.952-2-2.126V3h4c1.649 0 2.02 1.826 2.02 3H22V0z"/></symbol><symbol id="trash-can" viewBox="0 0 24 24"><path d="M16 9v4.501a6.522 6.522 0 0 0-2 1.319V9a1 1 0 1 1 2 0zm-4 0v10a1 1 0 1 1-2 0V9a1 1 0 1 1 2 0zm1.82 15H2V6h2v16h8.502a6.507 6.507 0 0 0 1.318 2zM7 8a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1zm14-4H1V2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2H21v2zm-1 2v7.182A6.45 6.45 0 0 0 18.5 13l-.5.025V6h2zm3 13.5c0 2.485-2.017 4.5-4.5 4.5S14 21.985 14 19.5s2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122L18.5 18.792l-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z"/></symbol><symbol id="undo" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></symbol></svg><!-- endinject -->';
document.body.appendChild(element);

})();
;(function() {
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
    backgroundColor: '#fff',

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
    var el = this.canvas.getElement();
    if (el.addEventListener){
      el.addEventListener(eventName, callback);
    } else if (el.attachEvent) {
      el.attachEvent('on' + eventName, callback);
    }
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
      this._replaceCurrentImage(new fabric.Image(clone));

      if (next) next();
    }.bind(this);
    clone.src = this.sourceImage.toDataURL();
  },

  _replaceCurrentImage: function(newImage) {
    if (this.image) {
      this.image.remove();
    }

    this.image = newImage;
    this.image.selectable = false;

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
      selection: false,
      backgroundColor: this.options.backgroundColor
    });

    this.sourceCanvas = new fabric.Canvas(sourceCanvasElement, {
      selection: false,
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

})();
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
      hide: false,
      disabled: false
    };

    options = Darkroom.Utils.extend(options, defaults);

    var buttonElement = document.createElement('button');
    buttonElement.type = 'button';
    buttonElement.className = 'darkroom-button darkroom-button-' + options.type;
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
        disabled: true
      });

      this.forwardButton = buttonGroup.createButton({
        image: 'redo',
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
      image: 'rotate-left'
    });

    var rightButton = buttonGroup.createButton({
      image: 'rotate-right'
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
      image: 'crop'
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
        image: 'line'
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
        image: 'arrow'
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
        image: 'rect'
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
;(function () {
  'use strict';


  Darkroom.plugins['text'] = Darkroom.Plugin.extend({

    initialize: function InitDarkroomBoxPlugin() {
      var buttonGroup = this.darkroom.toolbar.createButtonGroup();

      var textButton = buttonGroup.createButton({
        image: 'text'
      });

      textButton.addEventListener('click', this.addText.bind(this));
    },

    addText: function addText() {
      var canvas = this.darkroom.canvas;
      var image = this.darkroom.image;
      var factor = image.scaleX;


      var text = new fabric.IText('Sample text...',{
        left: 100 * factor,
        top: 100 * factor,
        fill: 'red',
        fontFamily: 'Monospace',
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

})();
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
      image: 'save'
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb3RzdHJhcC5qcyIsImRhcmtyb29tLmpzIiwicGx1Z2luLmpzIiwidHJhbnNmb3JtYXRpb24uanMiLCJ1aS5qcyIsInV0aWxzLmpzIiwiZGFya3Jvb20uaGlzdG9yeS5qcyIsImRhcmtyb29tLnJvdGF0ZS5qcyIsImRhcmtyb29tLmNyb3AuanMiLCJkYXJrcm9vbS5saW5lLmpzIiwiZGFya3Jvb20uYXJyb3cuanMiLCJkYXJrcm9vbS5yZWN0LmpzIiwiZGFya3Jvb20udGV4dC5qcyIsImRhcmtyb29tLnNhdmUuanMiLCJkYXJrcm9vbS5jb250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0NkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3JXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3JxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJkYXJrcm9vbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gSW5qZWN0IFNWRyBpY29ucyBpbnRvIHRoZSBET01cbnZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbGVtZW50LmlkID0gJ2Rhcmtyb29tLWljb25zJztcbmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMDtcbmVsZW1lbnQuc3R5bGUud2lkdGggPSAwO1xuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbmVsZW1lbnQuaW5uZXJIVE1MID0gJzwhLS0gaW5qZWN0OnN2ZyAtLT48IS0tIGVuZGluamVjdCAtLT4nO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0Jztcblxud2luZG93LkRhcmtyb29tID0gRGFya3Jvb207XG5cbi8vIENvcmUgb2JqZWN0IG9mIERhcmtyb29tSlMuXG4vLyBCYXNpY2FsbHkgaXQncyBhIHNpbmdsZSBvYmplY3QsIGluc3RhbmNpYWJsZSB2aWEgYW4gZWxlbWVudFxuLy8gKGl0IGNvdWxkIGJlIGEgQ1NTIHNlbGVjdG9yIG9yIGEgRE9NIGVsZW1lbnQpLCBzb21lIGN1c3RvbSBvcHRpb25zLFxuLy8gYW5kIGEgbGlzdCBvZiBwbHVnaW4gb2JqZWN0cyAob3Igbm9uZSB0byB1c2UgZGVmYXVsdCBvbmVzKS5cbmZ1bmN0aW9uIERhcmtyb29tKGVsZW1lbnQsIG9wdGlvbnMsIHBsdWdpbnMpIHtcbiAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IoZWxlbWVudCwgb3B0aW9ucywgcGx1Z2lucyk7XG59XG5cbi8vIENyZWF0ZSBhbiBlbXB0eSBsaXN0IG9mIHBsdWdpbiBvYmplY3RzLCB3aGljaCB3aWxsIGJlIGZpbGxlZCBieVxuLy8gb3RoZXIgcGx1Z2luIHNjcmlwdHMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgcGx1Z2luIGxpc3QgaWYgbm9uZSBpc1xuLy8gc3BlY2lmaWVkIGluIERhcmtyb29tJ3NzIGNvbnN0cnVjdG9yLlxuRGFya3Jvb20ucGx1Z2lucyA9IFtdO1xuXG5EYXJrcm9vbS5wcm90b3R5cGUgPSB7XG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgbWFpbiBjb250YWluZXIgZWxlbWVudFxuICBjb250YWluZXJFbGVtZW50OiBudWxsLFxuXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGNhbnZhcyBvYmplY3RcbiAgY2FudmFzOiBudWxsLFxuXG4gIC8vIFJlZmVyZW5jZSB0byB0aGUgRmFicmljIGltYWdlIG9iamVjdFxuICBpbWFnZTogbnVsbCxcblxuICAvLyBSZWZlcmVuY2UgdG8gdGhlIEZhYnJpYyBzb3VyY2UgY2FudmFzIG9iamVjdFxuICBzb3VyY2VDYW52YXM6IG51bGwsXG5cbiAgLy8gUmVmZXJlbmNlIHRvIHRoZSBGYWJyaWMgc291cmNlIGltYWdlIG9iamVjdFxuICBzb3VyY2VJbWFnZTogbnVsbCxcblxuICAvLyBUcmFjayBvZiB0aGUgb3JpZ2luYWwgaW1hZ2UgZWxlbWVudFxuICBvcmlnaW5hbEltYWdlRWxlbWVudDogbnVsbCxcblxuICAvLyBTdGFjayBvZiB0cmFuc2Zvcm1hdGlvbnMgdG8gYXBwbHkgdG8gdGhlIGltYWdlIHNvdXJjZVxuICB0cmFuc2Zvcm1hdGlvbnM6IFtdLFxuXG4gIC8vIEluaXRpYWxpemVkIHN0YXRlXG4gIGluaXRpYWxpemVkOiBmYWxzZSxcblxuICAvLyBEZWZhdWx0IG9wdGlvbnNcbiAgZGVmYXVsdHM6IHtcbiAgICAvLyBDYW52YXMgcHJvcGVydGllcyAoZGltZW5zaW9uLCByYXRpbywgY29sb3IpXG4gICAgbWluV2lkdGg6IG51bGwsXG4gICAgbWluSGVpZ2h0OiBudWxsLFxuICAgIG1heFdpZHRoOiBudWxsLFxuICAgIG1heEhlaWdodDogbnVsbCxcbiAgICByYXRpbzogbnVsbCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcblxuICAgIC8vIFBsdWdpbnMgb3B0aW9uc1xuICAgIHBsdWdpbnM6IHt9LFxuXG4gICAgLy8gUG9zdC1pbml0aWFsaXNhdGlvbiBjYWxsYmFja1xuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkgeyAvKiBub29wICovIH1cbiAgfSxcblxuICAvLyBMaXN0IG9mIHRoZSBpbnN0YW5jaWVkIHBsdWdpbnNcbiAgcGx1Z2luczoge30sXG5cbiAgLy8gVGhpcyBvcHRpb25zIGFyZSBhIG1lcmdlIGJldHdlZW4gYGRlZmF1bHRzYCBhbmQgdGhlIG9wdGlvbnMgcGFzc2VkXG4gIC8vIHRocm91Z2ggdGhlIGNvbnN0cnVjdG9yXG4gIG9wdGlvbnM6IHt9LFxuXG4gIGNvbnN0cnVjdG9yOiBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zLCBwbHVnaW5zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJylcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICAgIGlmIChudWxsID09PSBlbGVtZW50KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBET00vRmFicmljIGVsZW1lbnRzXG4gICAgICB0aGlzLl9pbml0aWFsaXplRE9NKGVsZW1lbnQpO1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZUltYWdlKCk7XG5cbiAgICAgIC8vIFRoZW4gaW5pdGlhbGl6ZSB0aGUgcGx1Z2luc1xuICAgICAgdGhpcy5faW5pdGlhbGl6ZVBsdWdpbnMoRGFya3Jvb20ucGx1Z2lucyk7XG5cbiAgICAgIC8vIFB1YmxpYyBtZXRob2QgdG8gYWRqdXN0IGltYWdlIGFjY29yZGluZyB0byB0aGUgY2FudmFzXG4gICAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEV4ZWN1dGUgYSBjdXN0b20gY2FsbGJhY2sgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5vcHRpb25zLmluaXRpYWxpemUuYmluZCh0aGlzKS5jYWxsKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIH0uYmluZCh0aGlzKVxuXG4gICAgLy9pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xuICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuc3JjO1xuICB9LFxuXG4gIHNlbGZEZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5jb250YWluZXJFbGVtZW50O1xuICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGltYWdlLCBjb250YWluZXIpO1xuICAgIH1cblxuICAgIGltYWdlLnNyYyA9IHRoaXMuc291cmNlSW1hZ2UudG9EYXRhVVJMKCk7XG4gIH0sXG5cbiAgLy8gQWRkIGFiaWxpdHkgdG8gYXR0YWNoIGV2ZW50IGxpc3RlbmVyIG9uIHRoZSBjb3JlIG9iamVjdC5cbiAgLy8gSXQgdXNlcyB0aGUgY2FudmFzIGVsZW1lbnQgdG8gcHJvY2VzcyBldmVudHMuXG4gIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZWwgPSB0aGlzLmNhbnZhcy5nZXRFbGVtZW50KCk7XG4gICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpe1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2UgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuICB9LFxuXG4gIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIC8vIFVzZSB0aGUgb2xkIHdheSBvZiBjcmVhdGluZyBldmVudCB0byBiZSBJRSBjb21wYXRpYmxlXG4gICAgLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0d1aWRlL0V2ZW50cy9DcmVhdGluZ19hbmRfdHJpZ2dlcmluZ19ldmVudHNcbiAgICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlKTtcblxuICAgIHRoaXMuY2FudmFzLmdldEVsZW1lbnQoKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSxcblxuICAvLyBBZGp1c3QgaW1hZ2UgJiBjYW52YXMgZGltZW5zaW9uIGFjY29yZGluZyB0byBtaW4vbWF4IHdpZHRoL2hlaWdodFxuICAvLyBhbmQgcmF0aW8gc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLlxuICAvLyBUaGlzIG1ldGhvZCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGVhY2ggaW1hZ2UgdHJhbnNmb3JtYXRpb24uXG4gIHJlZnJlc2g6IGZ1bmN0aW9uKG5leHQpIHtcbiAgICB2YXIgY2xvbmUgPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG9uZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX3JlcGxhY2VDdXJyZW50SW1hZ2UobmV3IGZhYnJpYy5JbWFnZShjbG9uZSkpO1xuXG4gICAgICBpZiAobmV4dCkgbmV4dCgpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgICBjbG9uZS5zcmMgPSB0aGlzLnNvdXJjZUltYWdlLnRvRGF0YVVSTCgpO1xuICB9LFxuXG4gIF9yZXBsYWNlQ3VycmVudEltYWdlOiBmdW5jdGlvbihuZXdJbWFnZSkge1xuICAgIGlmICh0aGlzLmltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuaW1hZ2UgPSBuZXdJbWFnZTtcbiAgICB0aGlzLmltYWdlLnNlbGVjdGFibGUgPSBmYWxzZTtcblxuICAgIC8vIEFkanVzdCB3aWR0aCBvciBoZWlnaHQgYWNjb3JkaW5nIHRvIHNwZWNpZmllZCByYXRpb1xuICAgIHZhciB2aWV3cG9ydCA9IERhcmtyb29tLlV0aWxzLmNvbXB1dGVJbWFnZVZpZXdQb3J0KHRoaXMuaW1hZ2UpO1xuICAgIHZhciBjYW52YXNXaWR0aCA9IHZpZXdwb3J0LndpZHRoO1xuICAgIHZhciBjYW52YXNIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICB2YXIgY2FudmFzUmF0aW8gPSArdGhpcy5vcHRpb25zLnJhdGlvO1xuICAgICAgdmFyIGN1cnJlbnRSYXRpbyA9IGNhbnZhc1dpZHRoIC8gY2FudmFzSGVpZ2h0O1xuXG4gICAgICBpZiAoY3VycmVudFJhdGlvID4gY2FudmFzUmF0aW8pIHtcbiAgICAgICAgY2FudmFzSGVpZ2h0ID0gY2FudmFzV2lkdGggLyBjYW52YXNSYXRpbztcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvIDwgY2FudmFzUmF0aW8pIHtcbiAgICAgICAgY2FudmFzV2lkdGggPSBjYW52YXNIZWlnaHQgKiBjYW52YXNSYXRpbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGVuIHNjYWxlIHRoZSBpbWFnZSB0byBmaXQgaW50byBkaW1lbnNpb24gbGltaXRzXG4gICAgdmFyIHNjYWxlTWluID0gMTtcbiAgICB2YXIgc2NhbGVNYXggPSAxO1xuICAgIHZhciBzY2FsZVggPSAxO1xuICAgIHZhciBzY2FsZVkgPSAxO1xuXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5tYXhXaWR0aCAmJiB0aGlzLm9wdGlvbnMubWF4V2lkdGggPCBjYW52YXNXaWR0aCkge1xuICAgICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5tYXhXaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgIH1cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1heEhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWF4SGVpZ2h0IDwgY2FudmFzSGVpZ2h0KSB7XG4gICAgICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1heEhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICB9XG4gICAgc2NhbGVNaW4gPSBNYXRoLm1pbihzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICBzY2FsZVggPSAxO1xuICAgIHNjYWxlWSA9IDE7XG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5taW5XaWR0aCAmJiB0aGlzLm9wdGlvbnMubWluV2lkdGggPiBjYW52YXNXaWR0aCkge1xuICAgICAgc2NhbGVYID0gIHRoaXMub3B0aW9ucy5taW5XaWR0aCAvIGNhbnZhc1dpZHRoO1xuICAgIH1cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLm1pbkhlaWdodCAmJiB0aGlzLm9wdGlvbnMubWluSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XG4gICAgICBzY2FsZVkgPSAgdGhpcy5vcHRpb25zLm1pbkhlaWdodCAvIGNhbnZhc0hlaWdodDtcbiAgICB9XG4gICAgc2NhbGVNYXggPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XG5cbiAgICB2YXIgc2NhbGUgPSBzY2FsZU1heCAqIHNjYWxlTWluOyAvLyBvbmUgc2hvdWxkIGJlIGVxdWFscyB0byAxXG5cbiAgICBjYW52YXNXaWR0aCAqPSBzY2FsZTtcbiAgICBjYW52YXNIZWlnaHQgKj0gc2NhbGU7XG5cbiAgICAvLyBGaW5hbGx5IHBsYWNlIHRoZSBpbWFnZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBjYW52YXNcbiAgICB0aGlzLmltYWdlLnNldFNjYWxlWCgxICogc2NhbGUpO1xuICAgIHRoaXMuaW1hZ2Uuc2V0U2NhbGVZKDEgKiBzY2FsZSk7XG4gICAgdGhpcy5jYW52YXMuYWRkKHRoaXMuaW1hZ2UpO1xuICAgIHRoaXMuY2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICB0aGlzLmNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLmNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5pbWFnZSk7XG4gICAgdGhpcy5pbWFnZS5zZXRDb29yZHMoKTtcbiAgfSxcblxuICAvLyBBcHBseSB0aGUgdHJhbnNmb3JtYXRpb24gb24gdGhlIGN1cnJlbnQgaW1hZ2UgYW5kIHNhdmUgaXQgaW4gdGhlXG4gIC8vIHRyYW5zZm9ybWF0aW9ucyBzdGFjayAoaW4gb3JkZXIgdG8gcmVjb25zdGl0dXRlIHRoZSBwcmV2aW91cyBzdGF0ZXNcbiAgLy8gb2YgdGhlIGltYWdlKS5cbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb24pIHtcbiAgICB0aGlzLnRyYW5zZm9ybWF0aW9ucy5wdXNoKHRyYW5zZm9ybWF0aW9uKTtcblxuICAgIHRyYW5zZm9ybWF0aW9uLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICB0aGlzLnNvdXJjZUNhbnZhcyxcbiAgICAgIHRoaXMuc291cmNlSW1hZ2UsXG4gICAgICB0aGlzLl9wb3N0VHJhbnNmb3JtYXRpb24uYmluZCh0aGlzKVxuICAgICk7XG4gIH0sXG5cbiAgX3Bvc3RUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICBpZiAobmV3SW1hZ2UpXG4gICAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3SW1hZ2U7XG5cbiAgICB0aGlzLnJlZnJlc2goZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NvcmU6dHJhbnNmb3JtYXRpb24nKTtcbiAgICB9LmJpbmQodGhpcykpO1xuICB9LFxuXG4gIC8vIEluaXRpYWxpemUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBlbGVtZW50IHBsdXMgcmUtYXBwbHkgZXZlcnlcbiAgLy8gdHJhbnNmb3JtYXRpb25zLlxuICByZWluaXRpYWxpemVJbWFnZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VyY2VJbWFnZS5yZW1vdmUoKTtcbiAgICB0aGlzLl9pbml0aWFsaXplSW1hZ2UoKTtcbiAgICB0aGlzLl9wb3BUcmFuc2Zvcm1hdGlvbih0aGlzLnRyYW5zZm9ybWF0aW9ucy5zbGljZSgpKVxuICB9LFxuXG4gIF9wb3BUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24odHJhbnNmb3JtYXRpb25zKSB7XG4gICAgaWYgKDAgPT09IHRyYW5zZm9ybWF0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29yZTpyZWluaXRpYWxpemVkJyk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNmb3JtYXRpb24gPSB0cmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcblxuICAgIHZhciBuZXh0ID0gZnVuY3Rpb24obmV3SW1hZ2UpIHtcbiAgICAgIGlmIChuZXdJbWFnZSkgdGhpcy5zb3VyY2VJbWFnZSA9IG5ld0ltYWdlO1xuICAgICAgdGhpcy5fcG9wVHJhbnNmb3JtYXRpb24odHJhbnNmb3JtYXRpb25zKVxuICAgIH07XG5cbiAgICB0cmFuc2Zvcm1hdGlvbi5hcHBseVRyYW5zZm9ybWF0aW9uKFxuICAgICAgdGhpcy5zb3VyY2VDYW52YXMsXG4gICAgICB0aGlzLnNvdXJjZUltYWdlLFxuICAgICAgbmV4dC5iaW5kKHRoaXMpXG4gICAgKTtcbiAgfSxcblxuICAvLyBDcmVhdGUgdGhlIERPTSBlbGVtZW50cyBhbmQgaW5zdGFuY2lhdGUgdGhlIEZhYnJpYyBjYW52YXMuXG4gIC8vIFRoZSBpbWFnZSBlbGVtZW50IGlzIHJlcGxhY2VkIGJ5IGEgbmV3IGBkaXZgIGVsZW1lbnQuXG4gIC8vIEhvd2V2ZXIgdGhlIG9yaWdpbmFsIGltYWdlIGlzIHJlLWluamVjdGVkIGluIG9yZGVyIHRvIGtlZXAgYSB0cmFjZSBvZiBpdC5cbiAgX2luaXRpYWxpemVET006IGZ1bmN0aW9uKGltYWdlRWxlbWVudCkge1xuICAgIC8vIENvbnRhaW5lclxuICAgIHZhciBtYWluQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS1jb250YWluZXInO1xuXG4gICAgLy8gVG9vbGJhclxuICAgIHZhciB0b29sYmFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvb2xiYXJFbGVtZW50LmNsYXNzTmFtZSA9ICdkYXJrcm9vbS10b29sYmFyJztcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZCh0b29sYmFyRWxlbWVudCk7XG5cbiAgICAvLyBWaWV3cG9ydCBjYW52YXNcbiAgICB2YXIgY2FudmFzQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhbnZhc0NvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWltYWdlLWNvbnRhaW5lcic7XG4gICAgdmFyIGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXNDb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0VsZW1lbnQpO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhc0NvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgLy8gU291cmNlIGNhbnZhc1xuICAgIHZhciBzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tc291cmNlLWNvbnRhaW5lcic7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHZhciBzb3VyY2VDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgc291cmNlQ2FudmFzQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNFbGVtZW50KTtcbiAgICBtYWluQ29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChzb3VyY2VDYW52YXNDb250YWluZXJFbGVtZW50KTtcblxuICAgIC8vIE9yaWdpbmFsIGltYWdlXG4gICAgaW1hZ2VFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1haW5Db250YWluZXJFbGVtZW50LCBpbWFnZUVsZW1lbnQpO1xuICAgIGltYWdlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1haW5Db250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XG5cbiAgICAvLyBJbnN0YW5jaWF0ZSBvYmplY3QgZnJvbSBlbGVtZW50c1xuICAgIHRoaXMuY29udGFpbmVyRWxlbWVudCA9IG1haW5Db250YWluZXJFbGVtZW50O1xuICAgIHRoaXMub3JpZ2luYWxJbWFnZUVsZW1lbnQgPSBpbWFnZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnRvb2xiYXIgPSBuZXcgRGFya3Jvb20uVUkuVG9vbGJhcih0b29sYmFyRWxlbWVudCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKGNhbnZhc0VsZW1lbnQsIHtcbiAgICAgIHNlbGVjdGlvbjogZmFsc2UsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9KTtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzID0gbmV3IGZhYnJpYy5DYW52YXMoc291cmNlQ2FudmFzRWxlbWVudCwge1xuICAgICAgc2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5vcHRpb25zLmJhY2tncm91bmRDb2xvclxuICAgIH0pO1xuICB9LFxuXG4gIC8vIEluc3RhbmNpYXRlIHRoZSBGYWJyaWMgaW1hZ2Ugb2JqZWN0LlxuICAvLyBUaGUgaW1hZ2UgaXMgY3JlYXRlZCBhcyBhIHN0YXRpYyBlbGVtZW50IHdpdGggbm8gY29udHJvbCxcbiAgLy8gdGhlbiBpdCBpcyBhZGQgaW4gdGhlIEZhYnJpYyBjYW52YXMgb2JqZWN0LlxuICBfaW5pdGlhbGl6ZUltYWdlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNvdXJjZUltYWdlID0gbmV3IGZhYnJpYy5JbWFnZSh0aGlzLm9yaWdpbmFsSW1hZ2VFbGVtZW50LCB7XG4gICAgICAvLyBTb21lIG9wdGlvbnMgdG8gbWFrZSB0aGUgaW1hZ2Ugc3RhdGljXG4gICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgIGV2ZW50ZWQ6IGZhbHNlLFxuICAgICAgbG9ja01vdmVtZW50WDogdHJ1ZSxcbiAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICBsb2NrUm90YXRpb246IHRydWUsXG4gICAgICBsb2NrU2NhbGluZ1g6IHRydWUsXG4gICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICBsb2NrVW5pU2NhbGluZzogdHJ1ZSxcbiAgICAgIGhhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5zb3VyY2VDYW52YXMuYWRkKHRoaXMuc291cmNlSW1hZ2UpO1xuXG4gICAgLy8gQWRqdXN0IHdpZHRoIG9yIGhlaWdodCBhY2NvcmRpbmcgdG8gc3BlY2lmaWVkIHJhdGlvXG4gICAgdmFyIHZpZXdwb3J0ID0gRGFya3Jvb20uVXRpbHMuY29tcHV0ZUltYWdlVmlld1BvcnQodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgdmFyIGNhbnZhc1dpZHRoID0gdmlld3BvcnQud2lkdGg7XG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcblxuICAgIHRoaXMuc291cmNlQ2FudmFzLnNldFdpZHRoKGNhbnZhc1dpZHRoKTtcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5zZXRIZWlnaHQoY2FudmFzSGVpZ2h0KTtcbiAgICB0aGlzLnNvdXJjZUNhbnZhcy5jZW50ZXJPYmplY3QodGhpcy5zb3VyY2VJbWFnZSk7XG4gICAgdGhpcy5zb3VyY2VJbWFnZS5zZXRDb29yZHMoKTtcbiAgfSxcblxuICAvLyBJbml0aWFsaXplIGV2ZXJ5IHBsdWdpbnMuXG4gIC8vIE5vdGUgdGhhdCBwbHVnaW5zIGFyZSBpbnN0YW5jaWF0ZWQgaW4gdGhlIHNhbWUgb3JkZXIgdGhhbiB0aGV5XG4gIC8vIGFyZSBkZWNsYXJlZCBpbiB0aGUgcGFyYW1ldGVyIG9iamVjdC5cbiAgX2luaXRpYWxpemVQbHVnaW5zOiBmdW5jdGlvbihwbHVnaW5zKSB7XG4gICAgZm9yICh2YXIgbmFtZSBpbiBwbHVnaW5zKSB7XG4gICAgICB2YXIgcGx1Z2luID0gcGx1Z2luc1tuYW1lXTtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5vcHRpb25zLnBsdWdpbnNbbmFtZV07XG5cbiAgICAgIC8vIFNldHRpbmcgZmFsc2UgaW50byB0aGUgcGx1Z2luIG9wdGlvbnMgd2lsbCBkaXNhYmxlIHRoZSBwbHVnaW5cbiAgICAgIGlmIChvcHRpb25zID09PSBmYWxzZSlcbiAgICAgICAgY29udGludWU7XG5cbiAgICAgIC8vIEF2b2lkIGFueSBpc3N1ZXMgd2l0aCBfcHJvdG9fXG4gICAgICBpZiAoIXBsdWdpbnMuaGFzT3duUHJvcGVydHkobmFtZSkpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICB0aGlzLnBsdWdpbnNbbmFtZV0gPSBuZXcgcGx1Z2luKHRoaXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSxcbn1cblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuRGFya3Jvb20uUGx1Z2luID0gUGx1Z2luO1xuXG4vLyBEZWZpbmUgYSBwbHVnaW4gb2JqZWN0LiBUaGlzIGlzIHRoZSAoYWJzdHJhY3QpIHBhcmVudCBjbGFzcyB3aGljaFxuLy8gaGFzIHRvIGJlIGV4dGVuZGVkIGZvciBlYWNoIHBsdWdpbi5cbmZ1bmN0aW9uIFBsdWdpbihkYXJrcm9vbSwgb3B0aW9ucykge1xuICB0aGlzLmRhcmtyb29tID0gZGFya3Jvb207XG4gIHRoaXMub3B0aW9ucyA9IERhcmtyb29tLlV0aWxzLmV4dGVuZChvcHRpb25zLCB0aGlzLmRlZmF1bHRzKTtcbiAgdGhpcy5pbml0aWFsaXplKCk7XG59XG5cblBsdWdpbi5wcm90b3R5cGUgPSB7XG4gIGRlZmF1bHRzOiB7fSxcbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKSB7IH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5QbHVnaW4uZXh0ZW5kID0gZnVuY3Rpb24ocHJvdG9Qcm9wcykge1xuICB2YXIgcGFyZW50ID0gdGhpcztcbiAgdmFyIGNoaWxkO1xuXG4gIGlmIChwcm90b1Byb3BzICYmIHByb3RvUHJvcHMuaGFzT3duUHJvcGVydHkoJ2NvbnN0cnVjdG9yJykpIHtcbiAgICBjaGlsZCA9IHByb3RvUHJvcHMuY29uc3RydWN0b3I7XG4gIH0gZWxzZSB7XG4gICAgY2hpbGQgPSBmdW5jdGlvbigpeyByZXR1cm4gcGFyZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIH1cblxuICBEYXJrcm9vbS5VdGlscy5leHRlbmQoY2hpbGQsIHBhcmVudCk7XG5cbiAgdmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcbiAgU3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gIGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cbiAgaWYgKHByb3RvUHJvcHMpIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG4gIGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbiA9IFRyYW5zZm9ybWF0aW9uO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm1hdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cblRyYW5zZm9ybWF0aW9uLnByb3RvdHlwZSA9IHtcbiAgYXBwbHlUcmFuc2Zvcm1hdGlvbjogZnVuY3Rpb24oaW1hZ2UpIHsgLyogbm8tb3AgKi8gIH1cbn1cblxuLy8gSW5zcGlyZWQgYnkgQmFja2JvbmUuanMgZXh0ZW5kIGNhcGFiaWxpdHkuXG5UcmFuc2Zvcm1hdGlvbi5leHRlbmQgPSBmdW5jdGlvbihwcm90b1Byb3BzKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuICB2YXIgY2hpbGQ7XG5cbiAgaWYgKHByb3RvUHJvcHMgJiYgcHJvdG9Qcm9wcy5oYXNPd25Qcm9wZXJ0eSgnY29uc3RydWN0b3InKSkge1xuICAgIGNoaWxkID0gcHJvdG9Qcm9wcy5jb25zdHJ1Y3RvcjtcbiAgfSBlbHNlIHtcbiAgICBjaGlsZCA9IGZ1bmN0aW9uKCl7IHJldHVybiBwYXJlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgfVxuXG4gIERhcmtyb29tLlV0aWxzLmV4dGVuZChjaGlsZCwgcGFyZW50KTtcblxuICB2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuICBTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcbiAgY2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuICBpZiAocHJvdG9Qcm9wcykgRGFya3Jvb20uVXRpbHMuZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cbiAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcblxuICByZXR1cm4gY2hpbGQ7XG59XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlVJID0ge1xuICBUb29sYmFyOiBUb29sYmFyLFxuICBCdXR0b25Hcm91cDogQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbjogQnV0dG9uLFxufTtcblxuLy8gVG9vbGJhciBvYmplY3QuXG5mdW5jdGlvbiBUb29sYmFyKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn1cblxuVG9vbGJhci5wcm90b3R5cGUgPSB7XG4gIGNyZWF0ZUJ1dHRvbkdyb3VwOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uR3JvdXAuY2xhc3NOYW1lID0gJ2Rhcmtyb29tLWJ1dHRvbi1ncm91cCc7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbkdyb3VwKTtcblxuICAgIHJldHVybiBuZXcgQnV0dG9uR3JvdXAoYnV0dG9uR3JvdXApO1xuICB9XG59O1xuXG4vLyBCdXR0b25Hcm91cCBvYmplY3QuXG5mdW5jdGlvbiBCdXR0b25Hcm91cChlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG59XG5cbkJ1dHRvbkdyb3VwLnByb3RvdHlwZSA9IHtcbiAgY3JlYXRlQnV0dG9uOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgaW1hZ2U6ICdoZWxwJyxcbiAgICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICAgIGdyb3VwOiAnZGVmYXVsdCcsXG4gICAgICBoaWRlOiBmYWxzZSxcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxuICAgIH07XG5cbiAgICBvcHRpb25zID0gRGFya3Jvb20uVXRpbHMuZXh0ZW5kKG9wdGlvbnMsIGRlZmF1bHRzKTtcblxuICAgIHZhciBidXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uRWxlbWVudC50eXBlID0gJ2J1dHRvbic7XG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc05hbWUgPSAnZGFya3Jvb20tYnV0dG9uIGRhcmtyb29tLWJ1dHRvbi0nICsgb3B0aW9ucy50eXBlO1xuICAgIGJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MID0gJzxzdmcgY2xhc3M9XCJkYXJrcm9vbS1pY29uXCI+PHVzZSB4bGluazpocmVmPVwiIycgKyBvcHRpb25zLmltYWdlICsgJ1wiIC8+PC9zdmc+JztcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XG5cbiAgICB2YXIgYnV0dG9uID0gbmV3IEJ1dHRvbihidXR0b25FbGVtZW50KTtcbiAgICBidXR0b24uaGlkZShvcHRpb25zLmhpZGUpO1xuICAgIGJ1dHRvbi5kaXNhYmxlKG9wdGlvbnMuZGlzYWJsZWQpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbiAgfVxufVxuXG4vLyBCdXR0b24gb2JqZWN0LlxuZnVuY3Rpb24gQnV0dG9uKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbn1cblxuQnV0dG9uLnByb3RvdHlwZSA9IHtcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLm9uKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKXtcbiAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnQpLm9mZihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0sXG4gIGFjdGl2ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodmFsdWUpXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFya3Jvb20tYnV0dG9uLWFjdGl2ZScpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrcm9vbS1idXR0b24tYWN0aXZlJyk7XG4gIH0sXG4gIGhpZGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKVxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Rhcmtyb29tLWJ1dHRvbi1oaWRkZW4nKTtcbiAgICBlbHNlXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZGFya3Jvb20tYnV0dG9uLWhpZGRlbicpO1xuICB9LFxuICBkaXNhYmxlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9ICh2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gIH1cbn07XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbkRhcmtyb29tLlV0aWxzID0ge1xuICBleHRlbmQ6IGV4dGVuZCxcbiAgY29tcHV0ZUltYWdlVmlld1BvcnQ6IGNvbXB1dGVJbWFnZVZpZXdQb3J0LFxufTtcblxuXG4vLyBVdGlsaXR5IG1ldGhvZCB0byBlYXNpbHkgZXh0ZW5kIG9iamVjdHMuXG5mdW5jdGlvbiBleHRlbmQoYiwgYSkge1xuICB2YXIgcHJvcDtcbiAgaWYgKGIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhO1xuICB9XG4gIGZvciAocHJvcCBpbiBhKSB7XG4gICAgaWYgKGEuaGFzT3duUHJvcGVydHkocHJvcCkgJiYgYi5oYXNPd25Qcm9wZXJ0eShwcm9wKSA9PT0gZmFsc2UpIHtcbiAgICAgIGJbcHJvcF0gPSBhW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUltYWdlVmlld1BvcnQoaW1hZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkgKiAoTWF0aC5zaW4oaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpICsgTWF0aC5hYnMoaW1hZ2UuZ2V0SGVpZ2h0KCkgKiAoTWF0aC5jb3MoaW1hZ2UuZ2V0QW5nbGUoKSAqIE1hdGguUEkvMTgwKSkpLFxuICAgIHdpZHRoOiBNYXRoLmFicyhpbWFnZS5nZXRIZWlnaHQoKSAqIChNYXRoLnNpbihpbWFnZS5nZXRBbmdsZSgpICogTWF0aC5QSS8xODApKSkgKyBNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpICogKE1hdGguY29zKGltYWdlLmdldEFuZ2xlKCkgKiBNYXRoLlBJLzE4MCkpKSxcbiAgfVxufVxuXG59KSgpO1xuIiwiOyhmdW5jdGlvbih3aW5kb3csIGRvY3VtZW50LCBEYXJrcm9vbSwgZmFicmljKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBEYXJrcm9vbS5wbHVnaW5zWydoaXN0b3J5J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcbiAgICB1bmRvVHJhbnNmb3JtYXRpb25zOiBbXSxcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUhpc3RvcnlQbHVnaW4oKSB7XG4gICAgICB0aGlzLl9pbml0QnV0dG9ucygpO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLl9vblRyYW5mb3JtYXRpb25BcHBsaWVkLmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICB1bmRvOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFzdFRyYW5zZm9ybWF0aW9uID0gdGhpcy5kYXJrcm9vbS50cmFuc2Zvcm1hdGlvbnMucG9wKCk7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMudW5zaGlmdChsYXN0VHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIHJlZG86IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2FuY2VsVHJhbnNmb3JtYXRpb24gPSB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuZGFya3Jvb20udHJhbnNmb3JtYXRpb25zLnB1c2goY2FuY2VsVHJhbnNmb3JtYXRpb24pO1xuXG4gICAgICB0aGlzLmRhcmtyb29tLnJlaW5pdGlhbGl6ZUltYWdlKCk7XG4gICAgICB0aGlzLl91cGRhdGVCdXR0b25zKCk7XG4gICAgfSxcblxuICAgIF9pbml0QnV0dG9uczogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdGhpcy5iYWNrQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICd1bmRvJyxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmZvcndhcmRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3JlZG8nLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmFja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudW5kby5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZm9yd2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVkby5iaW5kKHRoaXMpKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF91cGRhdGVCdXR0b25zOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuYmFja0J1dHRvbi5kaXNhYmxlKCh0aGlzLmRhcmtyb29tLnRyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLmRpc2FibGUoKHRoaXMudW5kb1RyYW5zZm9ybWF0aW9ucy5sZW5ndGggPT09IDApKVxuICAgIH0sXG5cbiAgICBfb25UcmFuZm9ybWF0aW9uQXBwbGllZDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVuZG9UcmFuc2Zvcm1hdGlvbnMgPSBbXTtcbiAgICAgIHRoaXMuX3VwZGF0ZUJ1dHRvbnMoKTtcbiAgICB9XG4gIH0pO1xufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSb3RhdGlvbiA9IERhcmtyb29tLlRyYW5zZm9ybWF0aW9uLmV4dGVuZCh7XG4gIGFwcGx5VHJhbnNmb3JtYXRpb246IGZ1bmN0aW9uKGNhbnZhcywgaW1hZ2UsIG5leHQpIHtcbiAgICB2YXIgYW5nbGUgPSAoaW1hZ2UuZ2V0QW5nbGUoKSArIHRoaXMub3B0aW9ucy5hbmdsZSkgJSAzNjA7XG4gICAgaW1hZ2Uucm90YXRlKGFuZ2xlKTtcblxuICAgIHZhciB3aWR0aCwgaGVpZ2h0O1xuICAgIGhlaWdodCA9IE1hdGguYWJzKGltYWdlLmdldFdpZHRoKCkqKE1hdGguc2luKGFuZ2xlKk1hdGguUEkvMTgwKSkpK01hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcbiAgICB3aWR0aCA9IE1hdGguYWJzKGltYWdlLmdldEhlaWdodCgpKihNYXRoLnNpbihhbmdsZSpNYXRoLlBJLzE4MCkpKStNYXRoLmFicyhpbWFnZS5nZXRXaWR0aCgpKihNYXRoLmNvcyhhbmdsZSpNYXRoLlBJLzE4MCkpKTtcblxuICAgIGNhbnZhcy5zZXRXaWR0aCh3aWR0aCk7XG4gICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgY2FudmFzLmNlbnRlck9iamVjdChpbWFnZSk7XG4gICAgaW1hZ2Uuc2V0Q29vcmRzKCk7XG4gICAgY2FudmFzLnJlbmRlckFsbCgpO1xuXG4gICAgbmV4dCgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1sncm90YXRlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Sb3RhdGVQbHVnaW4oKSB7XG4gICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICB2YXIgbGVmdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3JvdGF0ZS1sZWZ0J1xuICAgIH0pO1xuXG4gICAgdmFyIHJpZ2h0QnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAncm90YXRlLXJpZ2h0J1xuICAgIH0pO1xuXG4gICAgbGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlTGVmdC5iaW5kKHRoaXMpKTtcbiAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm90YXRlUmlnaHQuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgcm90YXRlTGVmdDogZnVuY3Rpb24gcm90YXRlTGVmdCgpIHtcbiAgICB0aGlzLnJvdGF0ZSgtOTApO1xuICB9LFxuXG4gIHJvdGF0ZVJpZ2h0OiBmdW5jdGlvbiByb3RhdGVSaWdodCgpIHtcbiAgICB0aGlzLnJvdGF0ZSg5MCk7XG4gIH0sXG5cbiAgcm90YXRlOiBmdW5jdGlvbiByb3RhdGUoYW5nbGUpIHtcbiAgICB0aGlzLmRhcmtyb29tLmFwcGx5VHJhbnNmb3JtYXRpb24oXG4gICAgICBuZXcgUm90YXRpb24oe2FuZ2xlOiBhbmdsZX0pXG4gICAgKTtcbiAgfVxuXG59KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIENyb3AgPSBEYXJrcm9vbS5UcmFuc2Zvcm1hdGlvbi5leHRlbmQoe1xuICBhcHBseVRyYW5zZm9ybWF0aW9uOiBmdW5jdGlvbihjYW52YXMsIGltYWdlLCBuZXh0KSB7XG4gICAgLy8gU25hcHNob3QgdGhlIGltYWdlIGRlbGltaXRlZCBieSB0aGUgY3JvcCB6b25lXG4gICAgdmFyIHNuYXBzaG90ID0gbmV3IEltYWdlKCk7XG4gICAgc25hcHNob3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBWYWxpZGF0ZSBpbWFnZVxuICAgICAgaWYgKGhlaWdodCA8IDEgfHwgd2lkdGggPCAxKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHZhciBpbWdJbnN0YW5jZSA9IG5ldyBmYWJyaWMuSW1hZ2UodGhpcywge1xuICAgICAgICAvLyBvcHRpb25zIHRvIG1ha2UgdGhlIGltYWdlIHN0YXRpY1xuICAgICAgICBzZWxlY3RhYmxlOiBmYWxzZSxcbiAgICAgICAgZXZlbnRlZDogZmFsc2UsXG4gICAgICAgIGxvY2tNb3ZlbWVudFg6IHRydWUsXG4gICAgICAgIGxvY2tNb3ZlbWVudFk6IHRydWUsXG4gICAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgICAgbG9ja1NjYWxpbmdYOiB0cnVlLFxuICAgICAgICBsb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tVbmlTY2FsaW5nOiB0cnVlLFxuICAgICAgICBoYXNDb250cm9sczogZmFsc2UsXG4gICAgICAgIGhhc0JvcmRlcnM6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmhlaWdodDtcblxuICAgICAgLy8gVXBkYXRlIGNhbnZhcyBzaXplXG4gICAgICBjYW52YXMuc2V0V2lkdGgod2lkdGgpO1xuICAgICAgY2FudmFzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgICAvLyBBZGQgaW1hZ2VcbiAgICAgIGltYWdlLnJlbW92ZSgpO1xuICAgICAgY2FudmFzLmFkZChpbWdJbnN0YW5jZSk7XG5cbiAgICAgIG5leHQoaW1nSW5zdGFuY2UpO1xuICAgIH07XG5cbiAgICB2YXIgdmlld3BvcnQgPSBEYXJrcm9vbS5VdGlscy5jb21wdXRlSW1hZ2VWaWV3UG9ydChpbWFnZSk7XG4gICAgdmFyIGltYWdlV2lkdGggPSB2aWV3cG9ydC53aWR0aDtcbiAgICB2YXIgaW1hZ2VIZWlnaHQgPSB2aWV3cG9ydC5oZWlnaHQ7XG5cbiAgICB2YXIgbGVmdCA9IHRoaXMub3B0aW9ucy5sZWZ0ICogaW1hZ2VXaWR0aDtcbiAgICB2YXIgdG9wID0gdGhpcy5vcHRpb25zLnRvcCAqIGltYWdlSGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IE1hdGgubWluKHRoaXMub3B0aW9ucy53aWR0aCAqIGltYWdlV2lkdGgsIGltYWdlV2lkdGggLSBsZWZ0KTtcbiAgICB2YXIgaGVpZ2h0ID0gTWF0aC5taW4odGhpcy5vcHRpb25zLmhlaWdodCAqIGltYWdlSGVpZ2h0LCBpbWFnZUhlaWdodCAtIHRvcCk7XG5cbiAgICBzbmFwc2hvdC5zcmMgPSBjYW52YXMudG9EYXRhVVJMKHtcbiAgICAgIGxlZnQ6IGxlZnQsXG4gICAgICB0b3A6IHRvcCxcbiAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIH0pO1xuICB9XG59KTtcblxudmFyIENyb3Bab25lID0gZmFicmljLnV0aWwuY3JlYXRlQ2xhc3MoZmFicmljLlJlY3QsIHtcbiAgX3JlbmRlcjogZnVuY3Rpb24oY3R4KSB7XG4gICAgdGhpcy5jYWxsU3VwZXIoJ19yZW5kZXInLCBjdHgpO1xuXG4gICAgdmFyIGNhbnZhcyA9IGN0eC5jYW52YXM7XG4gICAgdmFyIGRhc2hXaWR0aCA9IDc7XG5cbiAgICAvLyBTZXQgb3JpZ2luYWwgc2NhbGVcbiAgICB2YXIgZmxpcFggPSB0aGlzLmZsaXBYID8gLTEgOiAxO1xuICAgIHZhciBmbGlwWSA9IHRoaXMuZmxpcFkgPyAtMSA6IDE7XG4gICAgdmFyIHNjYWxlWCA9IGZsaXBYIC8gdGhpcy5zY2FsZVg7XG4gICAgdmFyIHNjYWxlWSA9IGZsaXBZIC8gdGhpcy5zY2FsZVk7XG5cbiAgICBjdHguc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xuXG4gICAgLy8gT3ZlcmxheSByZW5kZXJpbmdcbiAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC41KSc7XG4gICAgdGhpcy5fcmVuZGVyT3ZlcmxheShjdHgpO1xuXG4gICAgLy8gU2V0IGRhc2hlZCBib3JkZXJzXG4gICAgaWYgKGN0eC5zZXRMaW5lRGFzaCAhPT0gdW5kZWZpbmVkKVxuICAgICAgY3R4LnNldExpbmVEYXNoKFtkYXNoV2lkdGgsIGRhc2hXaWR0aF0pO1xuICAgIGVsc2UgaWYgKGN0eC5tb3pEYXNoICE9PSB1bmRlZmluZWQpXG4gICAgICBjdHgubW96RGFzaCA9IFtkYXNoV2lkdGgsIGRhc2hXaWR0aF07XG5cbiAgICAvLyBGaXJzdCBsaW5lcyByZW5kZXJpbmcgd2l0aCBibGFja1xuICAgIGN0eC5zdHJva2VTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMiknO1xuICAgIHRoaXMuX3JlbmRlckJvcmRlcnMoY3R4KTtcbiAgICB0aGlzLl9yZW5kZXJHcmlkKGN0eCk7XG5cbiAgICAvLyBSZSByZW5kZXIgbGluZXMgaW4gd2hpdGVcbiAgICBjdHgubGluZURhc2hPZmZzZXQgPSBkYXNoV2lkdGg7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSc7XG4gICAgdGhpcy5fcmVuZGVyQm9yZGVycyhjdHgpO1xuICAgIHRoaXMuX3JlbmRlckdyaWQoY3R4KTtcblxuICAgIC8vIFJlc2V0IHNjYWxlXG4gICAgY3R4LnNjYWxlKDEvc2NhbGVYLCAxL3NjYWxlWSk7XG4gIH0sXG5cbiAgX3JlbmRlck92ZXJsYXk6IGZ1bmN0aW9uKGN0eCkge1xuICAgIHZhciBjYW52YXMgPSBjdHguY2FudmFzO1xuXG4gICAgLy9cbiAgICAvLyAgICB4MCAgICB4MSAgICAgICAgeDIgICAgICB4M1xuICAgIC8vIHkwICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXHxcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vIHkxICstLS0tLS0rLS0tLS0tLS0tKy0tLS0tLS0rXG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgMCAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8gICAgfFxcXFxcXFxcXFxcXHwgICAgICAgICB8XFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTIgKy0tLS0tLSstLS0tLS0tLS0rLS0tLS0tLStcbiAgICAvLyAgICB8XFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcfFxuICAgIC8vICAgIHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFx8XG4gICAgLy8geTMgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAvL1xuXG4gICAgdmFyIHgwID0gTWF0aC5jZWlsKC10aGlzLmdldFdpZHRoKCkgLyAyIC0gdGhpcy5nZXRMZWZ0KCkpO1xuICAgIHZhciB4MSA9IE1hdGguY2VpbCgtdGhpcy5nZXRXaWR0aCgpIC8gMik7XG4gICAgdmFyIHgyID0gTWF0aC5jZWlsKHRoaXMuZ2V0V2lkdGgoKSAvIDIpO1xuICAgIHZhciB4MyA9IE1hdGguY2VpbCh0aGlzLmdldFdpZHRoKCkgLyAyICsgKGNhbnZhcy53aWR0aCAtIHRoaXMuZ2V0V2lkdGgoKSAtIHRoaXMuZ2V0TGVmdCgpKSk7XG5cbiAgICB2YXIgeTAgPSBNYXRoLmNlaWwoLXRoaXMuZ2V0SGVpZ2h0KCkgLyAyIC0gdGhpcy5nZXRUb3AoKSk7XG4gICAgdmFyIHkxID0gTWF0aC5jZWlsKC10aGlzLmdldEhlaWdodCgpIC8gMik7XG4gICAgdmFyIHkyID0gTWF0aC5jZWlsKHRoaXMuZ2V0SGVpZ2h0KCkgLyAyKTtcbiAgICB2YXIgeTMgPSBNYXRoLmNlaWwodGhpcy5nZXRIZWlnaHQoKSAvIDIgKyAoY2FudmFzLmhlaWdodCAtIHRoaXMuZ2V0SGVpZ2h0KCkgLSB0aGlzLmdldFRvcCgpKSk7XG5cbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgXG4gICAgLy8gRHJhdyBvdXRlciByZWN0YW5nbGUuXG4gICAgLy8gTnVtYmVycyBhcmUgKy8tMSBzbyB0aGF0IG92ZXJsYXkgZWRnZXMgZG9uJ3QgZ2V0IGJsdXJyeS5cbiAgICBjdHgubW92ZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTAgLSAxKTtcbiAgICBjdHgubGluZVRvKHgzICsgMSwgeTMgKyAxKTtcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTMgLSAxKTtcbiAgICBjdHgubGluZVRvKHgwIC0gMSwgeTAgLSAxKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAvLyBEcmF3IGlubmVyIHJlY3RhbmdsZS5cbiAgICBjdHgubW92ZVRvKHgxLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MSwgeTIpO1xuICAgIGN0eC5saW5lVG8oeDIsIHkyKTtcbiAgICBjdHgubGluZVRvKHgyLCB5MSk7XG4gICAgY3R4LmxpbmVUbyh4MSwgeTEpO1xuXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIGN0eC5maWxsKCk7XG4gIH0sXG5cbiAgX3JlbmRlckJvcmRlcnM6IGZ1bmN0aW9uKGN0eCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKC10aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIHVwcGVyIGxlZnRcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgcmlnaHRcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCB0aGlzLmdldEhlaWdodCgpLzIpOyAvLyBkb3duIHJpZ2h0XG4gICAgY3R4LmxpbmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIHRoaXMuZ2V0SGVpZ2h0KCkvMik7IC8vIGRvd24gbGVmdFxuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yKTsgLy8gdXBwZXIgbGVmdFxuICAgIGN0eC5zdHJva2UoKTtcbiAgfSxcblxuICBfcmVuZGVyR3JpZDogZnVuY3Rpb24oY3R4KSB7XG4gICAgLy8gVmVydGljYWwgbGluZXNcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAxLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMS8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIgKyAyLzMgKiB0aGlzLmdldFdpZHRoKCksIC10aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5saW5lVG8oLXRoaXMuZ2V0V2lkdGgoKS8yICsgMi8zICogdGhpcy5nZXRXaWR0aCgpLCB0aGlzLmdldEhlaWdodCgpLzIpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICAvLyBIb3Jpem9udGFsIGxpbmVzXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oLXRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMS8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LmxpbmVUbyh0aGlzLmdldFdpZHRoKCkvMiwgLXRoaXMuZ2V0SGVpZ2h0KCkvMiArIDEvMyAqIHRoaXMuZ2V0SGVpZ2h0KCkpO1xuICAgIGN0eC5zdHJva2UoKTtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4Lm1vdmVUbygtdGhpcy5nZXRXaWR0aCgpLzIsIC10aGlzLmdldEhlaWdodCgpLzIgKyAyLzMgKiB0aGlzLmdldEhlaWdodCgpKTtcbiAgICBjdHgubGluZVRvKHRoaXMuZ2V0V2lkdGgoKS8yLCAtdGhpcy5nZXRIZWlnaHQoKS8yICsgMi8zICogdGhpcy5nZXRIZWlnaHQoKSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICB9XG59KTtcblxuRGFya3Jvb20ucGx1Z2luc1snY3JvcCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG4gIC8vIEluaXQgcG9pbnRcbiAgc3RhcnRYOiBudWxsLFxuICBzdGFydFk6IG51bGwsXG5cbiAgLy8gS2V5Y3JvcFxuICBpc0tleUNyb3Bpbmc6IGZhbHNlLFxuICBpc0tleUxlZnQ6IGZhbHNlLFxuICBpc0tleVVwOiBmYWxzZSxcblxuICBkZWZhdWx0czoge1xuICAgIC8vIG1pbiBjcm9wIGRpbWVuc2lvblxuICAgIG1pbkhlaWdodDogMSxcbiAgICBtaW5XaWR0aDogMSxcbiAgICAvLyBlbnN1cmUgY3JvcCByYXRpb1xuICAgIHJhdGlvOiBudWxsLFxuICAgIC8vIHF1aWNrIGNyb3AgZmVhdHVyZSAoc2V0IGEga2V5IGNvZGUgdG8gZW5hYmxlIGl0KVxuICAgIHF1aWNrQ3JvcEtleTogZmFsc2VcbiAgfSxcblxuICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Dcm9wUGx1Z2luKCkge1xuICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgdGhpcy5jcm9wQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnY3JvcCdcbiAgICB9KTtcbiAgICB0aGlzLm9rQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgIGltYWdlOiAnZG9uZScsXG4gICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICBoaWRlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgaW1hZ2U6ICdjbG9zZScsXG4gICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgIGhpZGU6IHRydWVcbiAgICB9KTtcblxuICAgIC8vIEJ1dHRvbnMgY2xpY2tcbiAgICB0aGlzLmNyb3BCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZUNyb3AuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY3JvcEN1cnJlbnRab25lLmJpbmQodGhpcykpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWxlYXNlRm9jdXMuYmluZCh0aGlzKSk7XG5cbiAgICAvLyBDYW52YXMgZXZlbnRzXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ21vdXNlOmRvd24nLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdtb3VzZTptb3ZlJywgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignbW91c2U6dXAnLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0Om1vdmluZycsIHRoaXMub25PYmplY3RNb3ZpbmcuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMub24oJ29iamVjdDpzY2FsaW5nJywgdGhpcy5vbk9iamVjdFNjYWxpbmcuYmluZCh0aGlzKSk7XG5cbiAgICBmYWJyaWMudXRpbC5hZGRMaXN0ZW5lcihmYWJyaWMuZG9jdW1lbnQsICdrZXlkb3duJywgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSk7XG4gICAgZmFicmljLnV0aWwuYWRkTGlzdGVuZXIoZmFicmljLmRvY3VtZW50LCAna2V5dXAnLCB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmFkZEV2ZW50TGlzdGVuZXIoJ2NvcmU6dHJhbnNmb3JtYXRpb24nLCB0aGlzLnJlbGVhc2VGb2N1cy5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICAvLyBBdm9pZCBjcm9wIHpvbmUgdG8gZ28gYmV5b25kIHRoZSBjYW52YXMgZWRnZXNcbiAgb25PYmplY3RNb3Zpbmc6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudE9iamVjdCA9IGV2ZW50LnRhcmdldDtcbiAgICBpZiAoY3VycmVudE9iamVjdCAhPT0gdGhpcy5jcm9wWm9uZSlcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICB2YXIgeCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpLCB5ID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICB2YXIgdyA9IGN1cnJlbnRPYmplY3QuZ2V0V2lkdGgoKSwgaCA9IGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG4gICAgdmFyIG1heFggPSBjYW52YXMuZ2V0V2lkdGgoKSAtIHc7XG4gICAgdmFyIG1heFkgPSBjYW52YXMuZ2V0SGVpZ2h0KCkgLSBoO1xuXG4gICAgaWYgKHggPCAwKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCAwKTtcbiAgICBpZiAoeSA8IDApXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgMCk7XG4gICAgaWYgKHggPiBtYXhYKVxuICAgICAgY3VycmVudE9iamVjdC5zZXQoJ2xlZnQnLCBtYXhYKTtcbiAgICBpZiAoeSA+IG1heFkpXG4gICAgICBjdXJyZW50T2JqZWN0LnNldCgndG9wJywgbWF4WSk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgLy8gUHJldmVudCBjcm9wIHpvbmUgZnJvbSBnb2luZyBiZXlvbmQgdGhlIGNhbnZhcyBlZGdlcyAobGlrZSBtb3VzZU1vdmUpXG4gIG9uT2JqZWN0U2NhbGluZzogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcmV2ZW50U2NhbGluZyA9IGZhbHNlO1xuICAgIHZhciBjdXJyZW50T2JqZWN0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjdXJyZW50T2JqZWN0ICE9PSB0aGlzLmNyb3Bab25lKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICB2YXIgbWluWCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpO1xuICAgIHZhciBtaW5ZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKTtcbiAgICB2YXIgbWF4WCA9IGN1cnJlbnRPYmplY3QuZ2V0TGVmdCgpICsgY3VycmVudE9iamVjdC5nZXRXaWR0aCgpO1xuICAgIHZhciBtYXhZID0gY3VycmVudE9iamVjdC5nZXRUb3AoKSArIGN1cnJlbnRPYmplY3QuZ2V0SGVpZ2h0KCk7XG5cbiAgICBpZiAobnVsbCAhPT0gdGhpcy5vcHRpb25zLnJhdGlvKSB7XG4gICAgICBpZiAobWluWCA8IDAgfHwgbWF4WCA+IGNhbnZhcy5nZXRXaWR0aCgpIHx8IG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgICAgcHJldmVudFNjYWxpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtaW5YIDwgMCB8fCBtYXhYID4gY2FudmFzLmdldFdpZHRoKCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgIHZhciBsYXN0U2NhbGVYID0gdGhpcy5sYXN0U2NhbGVYIHx8IDE7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWChsYXN0U2NhbGVYKTtcbiAgICB9XG4gICAgaWYgKG1pblggPCAwKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldExlZnQoMCk7XG4gICAgfVxuXG4gICAgaWYgKG1pblkgPCAwIHx8IG1heFkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkgfHwgcHJldmVudFNjYWxpbmcpIHtcbiAgICAgIHZhciBsYXN0U2NhbGVZID0gdGhpcy5sYXN0U2NhbGVZIHx8IDE7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFNjYWxlWShsYXN0U2NhbGVZKTtcbiAgICB9XG4gICAgaWYgKG1pblkgPCAwKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNldFRvcCgwKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRXaWR0aCgpIDwgdGhpcy5vcHRpb25zLm1pbldpZHRoKSB7XG4gICAgICBjdXJyZW50T2JqZWN0LnNjYWxlVG9XaWR0aCh0aGlzLm9wdGlvbnMubWluV2lkdGgpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudE9iamVjdC5nZXRIZWlnaHQoKSA8IHRoaXMub3B0aW9ucy5taW5IZWlnaHQpIHtcbiAgICAgIGN1cnJlbnRPYmplY3Quc2NhbGVUb0hlaWdodCh0aGlzLm9wdGlvbnMubWluSGVpZ2h0KTtcbiAgICB9XG5cbiAgICB0aGlzLmxhc3RTY2FsZVggPSBjdXJyZW50T2JqZWN0LmdldFNjYWxlWCgpO1xuICAgIHRoaXMubGFzdFNjYWxlWSA9IGN1cnJlbnRPYmplY3QuZ2V0U2NhbGVZKCk7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgLy8gSW5pdCBjcm9wIHpvbmVcbiAgb25Nb3VzZURvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG5cbiAgICAvLyByZWNhbGN1bGF0ZSBvZmZzZXQsIGluIGNhc2UgY2FudmFzIHdhcyBtYW5pcHVsYXRlZCBzaW5jZSBsYXN0IGBjYWxjT2Zmc2V0YFxuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcbiAgICB2YXIgcG9pbnQgPSBuZXcgZmFicmljLlBvaW50KHgsIHkpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdXNlciB3YW50IHRvIHNjYWxlIG9yIGRyYWcgdGhlIGNyb3Agem9uZS5cbiAgICB2YXIgYWN0aXZlT2JqZWN0ID0gY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xuICAgIGlmIChhY3RpdmVPYmplY3QgPT09IHRoaXMuY3JvcFpvbmUgfHwgdGhpcy5jcm9wWm9uZS5jb250YWluc1BvaW50KHBvaW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbnZhcy5kaXNjYXJkQWN0aXZlT2JqZWN0KCk7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRXaWR0aCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldEhlaWdodCgwKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWCgxKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFNjYWxlWSgxKTtcblxuICAgIHRoaXMuc3RhcnRYID0geDtcbiAgICB0aGlzLnN0YXJ0WSA9IHk7XG4gIH0sXG5cbiAgLy8gRXh0ZW5kIGNyb3Agem9uZVxuICBvbk1vdXNlTW92ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBRdWljayBjcm9wIGZlYXR1cmVcbiAgICBpZiAodGhpcy5pc0tleUNyb3BpbmcpXG4gICAgICByZXR1cm4gdGhpcy5vbk1vdXNlTW92ZUtleUNyb3AoZXZlbnQpO1xuXG4gICAgaWYgKG51bGwgPT09IHRoaXMuc3RhcnRYIHx8IG51bGwgPT09IHRoaXMuc3RhcnRZKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgIHZhciBwb2ludGVyID0gY2FudmFzLmdldFBvaW50ZXIoZXZlbnQuZSk7XG4gICAgdmFyIHggPSBwb2ludGVyLng7XG4gICAgdmFyIHkgPSBwb2ludGVyLnk7XG5cbiAgICB0aGlzLl9yZW5kZXJDcm9wWm9uZSh0aGlzLnN0YXJ0WCwgdGhpcy5zdGFydFksIHgsIHkpO1xuICB9LFxuXG4gIG9uTW91c2VNb3ZlS2V5Q3JvcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdmFyIHpvbmUgPSB0aGlzLmNyb3Bab25lO1xuXG4gICAgdmFyIHBvaW50ZXIgPSBjYW52YXMuZ2V0UG9pbnRlcihldmVudC5lKTtcbiAgICB2YXIgeCA9IHBvaW50ZXIueDtcbiAgICB2YXIgeSA9IHBvaW50ZXIueTtcblxuICAgIGlmICghem9uZS5sZWZ0IHx8ICF6b25lLnRvcCkge1xuICAgICAgem9uZS5zZXRUb3AoeSk7XG4gICAgICB6b25lLnNldExlZnQoeCk7XG4gICAgfVxuXG4gICAgdGhpcy5pc0tleUxlZnQgPSAgeCA8IHpvbmUubGVmdCArIHpvbmUud2lkdGggLyAyIDtcbiAgICB0aGlzLmlzS2V5VXAgPSB5IDwgem9uZS50b3AgKyB6b25lLmhlaWdodCAvIDIgO1xuXG4gICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoXG4gICAgICBNYXRoLm1pbih6b25lLmxlZnQsIHgpLFxuICAgICAgTWF0aC5taW4oem9uZS50b3AsIHkpLFxuICAgICAgTWF0aC5tYXgoem9uZS5sZWZ0K3pvbmUud2lkdGgsIHgpLFxuICAgICAgTWF0aC5tYXgoem9uZS50b3Arem9uZS5oZWlnaHQsIHkpXG4gICAgKTtcbiAgfSxcblxuICAvLyBGaW5pc2ggY3JvcCB6b25lXG4gIG9uTW91c2VVcDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAobnVsbCA9PT0gdGhpcy5zdGFydFggfHwgbnVsbCA9PT0gdGhpcy5zdGFydFkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgdGhpcy5jcm9wWm9uZS5zZXRDb29yZHMoKTtcbiAgICBjYW52YXMuc2V0QWN0aXZlT2JqZWN0KHRoaXMuY3JvcFpvbmUpO1xuICAgIGNhbnZhcy5jYWxjT2Zmc2V0KCk7XG5cbiAgICB0aGlzLnN0YXJ0WCA9IG51bGw7XG4gICAgdGhpcy5zdGFydFkgPSBudWxsO1xuICB9LFxuXG4gIG9uS2V5RG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZmFsc2UgPT09IHRoaXMub3B0aW9ucy5xdWlja0Nyb3BLZXkgfHwgZXZlbnQua2V5Q29kZSAhPT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCB0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybjtcblxuICAgIC8vIEFjdGl2ZSBxdWljayBjcm9wIGZsb3dcbiAgICB0aGlzLmlzS2V5Q3JvcGluZyA9IHRydWUgO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRpc2NhcmRBY3RpdmVPYmplY3QoKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldFdpZHRoKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0SGVpZ2h0KDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVYKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0U2NhbGVZKDEpO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0VG9wKDApO1xuICAgIHRoaXMuY3JvcFpvbmUuc2V0TGVmdCgwKTtcbiAgfSxcblxuICBvbktleVVwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnF1aWNrQ3JvcEtleSB8fCBldmVudC5rZXlDb2RlICE9PSB0aGlzLm9wdGlvbnMucXVpY2tDcm9wS2V5IHx8ICF0aGlzLmlzS2V5Q3JvcGluZylcbiAgICAgIHJldHVybjtcblxuICAgIC8vIFVuYWN0aXZlIHF1aWNrIGNyb3AgZmxvd1xuICAgIHRoaXMuaXNLZXlDcm9waW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydFggPSAxO1xuICAgIHRoaXMuc3RhcnRZID0gMTtcbiAgICB0aGlzLm9uTW91c2VVcCgpO1xuICB9LFxuXG4gIHNlbGVjdFpvbmU6IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIGZvcmNlRGltZW5zaW9uKSB7XG4gICAgaWYgKCF0aGlzLmhhc0ZvY3VzKCkpXG4gICAgICB0aGlzLnJlcXVpcmVGb2N1cygpO1xuXG4gICAgaWYgKCFmb3JjZURpbWVuc2lvbikge1xuICAgICAgdGhpcy5fcmVuZGVyQ3JvcFpvbmUoeCwgeSwgeCt3aWR0aCwgeStoZWlnaHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNyb3Bab25lLnNldCh7XG4gICAgICAgICdsZWZ0JzogeCxcbiAgICAgICAgJ3RvcCc6IHksXG4gICAgICAgICd3aWR0aCc6IHdpZHRoLFxuICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgY2FudmFzLmJyaW5nVG9Gcm9udCh0aGlzLmNyb3Bab25lKTtcbiAgICB0aGlzLmNyb3Bab25lLnNldENvb3JkcygpO1xuICAgIGNhbnZhcy5zZXRBY3RpdmVPYmplY3QodGhpcy5jcm9wWm9uZSk7XG4gICAgY2FudmFzLmNhbGNPZmZzZXQoKTtcblxuICAgIHRoaXMuZGFya3Jvb20uZGlzcGF0Y2hFdmVudCgnY3JvcDp1cGRhdGUnKTtcbiAgfSxcblxuICB0b2dnbGVDcm9wOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGFzRm9jdXMoKSlcbiAgICAgIHRoaXMucmVxdWlyZUZvY3VzKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5yZWxlYXNlRm9jdXMoKTtcbiAgfSxcblxuICBjcm9wQ3VycmVudFpvbmU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oYXNGb2N1cygpKVxuICAgICAgcmV0dXJuO1xuXG4gICAgLy8gQXZvaWQgY3JvcGluZyBlbXB0eSB6b25lXG4gICAgaWYgKHRoaXMuY3JvcFpvbmUud2lkdGggPCAxICYmIHRoaXMuY3JvcFpvbmUuaGVpZ2h0IDwgMSlcbiAgICAgIHJldHVybjtcblxuICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG5cbiAgICAvLyBDb21wdXRlIGNyb3Agem9uZSBkaW1lbnNpb25zXG4gICAgdmFyIHRvcCA9IHRoaXMuY3JvcFpvbmUuZ2V0VG9wKCkgLSBpbWFnZS5nZXRUb3AoKTtcbiAgICB2YXIgbGVmdCA9IHRoaXMuY3JvcFpvbmUuZ2V0TGVmdCgpIC0gaW1hZ2UuZ2V0TGVmdCgpO1xuICAgIHZhciB3aWR0aCA9IHRoaXMuY3JvcFpvbmUuZ2V0V2lkdGgoKTtcbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5jcm9wWm9uZS5nZXRIZWlnaHQoKTtcblxuICAgIC8vIEFkanVzdCBkaW1lbnNpb25zIHRvIGltYWdlIG9ubHlcbiAgICBpZiAodG9wIDwgMCkge1xuICAgICAgaGVpZ2h0ICs9IHRvcDtcbiAgICAgIHRvcCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQgPCAwKSB7XG4gICAgICB3aWR0aCArPSBsZWZ0O1xuICAgICAgbGVmdCA9IDA7XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY3JvcCB0cmFuc2Zvcm1hdGlvbi5cbiAgICAvLyBNYWtlIHN1cmUgdG8gdXNlIHJlbGF0aXZlIGRpbWVuc2lvbiBzaW5jZSB0aGUgY3JvcCB3aWxsIGJlIGFwcGxpZWRcbiAgICAvLyBvbiB0aGUgc291cmNlIGltYWdlLlxuICAgIHRoaXMuZGFya3Jvb20uYXBwbHlUcmFuc2Zvcm1hdGlvbihuZXcgQ3JvcCh7XG4gICAgICB0b3A6IHRvcCAvIGltYWdlLmdldEhlaWdodCgpLFxuICAgICAgbGVmdDogbGVmdCAvIGltYWdlLmdldFdpZHRoKCksXG4gICAgICB3aWR0aDogd2lkdGggLyBpbWFnZS5nZXRXaWR0aCgpLFxuICAgICAgaGVpZ2h0OiBoZWlnaHQgLyBpbWFnZS5nZXRIZWlnaHQoKSxcbiAgICB9KSk7XG4gIH0sXG5cbiAgLy8gVGVzdCB3ZXRoZXIgY3JvcCB6b25lIGlzIHNldFxuICBoYXNGb2N1czogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JvcFpvbmUgIT09IHVuZGVmaW5lZDtcbiAgfSxcblxuICAvLyBDcmVhdGUgdGhlIGNyb3Agem9uZVxuICByZXF1aXJlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3JvcFpvbmUgPSBuZXcgQ3JvcFpvbmUoe1xuICAgICAgZmlsbDogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGhhc0JvcmRlcnM6IGZhbHNlLFxuICAgICAgb3JpZ2luWDogJ2xlZnQnLFxuICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAvL3N0cm9rZTogJyM0NDQnLFxuICAgICAgLy9zdHJva2VEYXNoQXJyYXk6IFs1LCA1XSxcbiAgICAgIC8vYm9yZGVyQ29sb3I6ICcjNDQ0JyxcbiAgICAgIGNvcm5lckNvbG9yOiAnIzQ0NCcsXG4gICAgICBjb3JuZXJTaXplOiA4LFxuICAgICAgdHJhbnNwYXJlbnRDb3JuZXJzOiBmYWxzZSxcbiAgICAgIGxvY2tSb3RhdGlvbjogdHJ1ZSxcbiAgICAgIGhhc1JvdGF0aW5nUG9pbnQ6IGZhbHNlLFxuICAgIH0pO1xuXG4gICAgaWYgKG51bGwgIT09IHRoaXMub3B0aW9ucy5yYXRpbykge1xuICAgICAgdGhpcy5jcm9wWm9uZS5zZXQoJ2xvY2tVbmlTY2FsaW5nJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYWRkKHRoaXMuY3JvcFpvbmUpO1xuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnY3Jvc3NoYWlyJztcblxuICAgIHRoaXMuY3JvcEJ1dHRvbi5hY3RpdmUodHJ1ZSk7XG4gICAgdGhpcy5va0J1dHRvbi5oaWRlKGZhbHNlKTtcbiAgICB0aGlzLmNhbmNlbEJ1dHRvbi5oaWRlKGZhbHNlKTtcbiAgfSxcblxuICAvLyBSZW1vdmUgdGhlIGNyb3Agem9uZVxuICByZWxlYXNlRm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh1bmRlZmluZWQgPT09IHRoaXMuY3JvcFpvbmUpXG4gICAgICByZXR1cm47XG5cbiAgICB0aGlzLmNyb3Bab25lLnJlbW92ZSgpO1xuICAgIHRoaXMuY3JvcFpvbmUgPSB1bmRlZmluZWQ7XG5cbiAgICB0aGlzLmNyb3BCdXR0b24uYWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLm9rQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b24uaGlkZSh0cnVlKTtcblxuICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLmRlZmF1bHRDdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICB0aGlzLmRhcmtyb29tLmRpc3BhdGNoRXZlbnQoJ2Nyb3A6dXBkYXRlJyk7XG4gIH0sXG5cbiAgX3JlbmRlckNyb3Bab25lOiBmdW5jdGlvbihmcm9tWCwgZnJvbVksIHRvWCwgdG9ZKSB7XG4gICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuXG4gICAgdmFyIGlzUmlnaHQgPSAodG9YID4gZnJvbVgpO1xuICAgIHZhciBpc0xlZnQgPSAhaXNSaWdodDtcbiAgICB2YXIgaXNEb3duID0gKHRvWSA+IGZyb21ZKTtcbiAgICB2YXIgaXNVcCA9ICFpc0Rvd247XG5cbiAgICB2YXIgbWluV2lkdGggPSBNYXRoLm1pbigrdGhpcy5vcHRpb25zLm1pbldpZHRoLCBjYW52YXMuZ2V0V2lkdGgoKSk7XG4gICAgdmFyIG1pbkhlaWdodCA9IE1hdGgubWluKCt0aGlzLm9wdGlvbnMubWluSGVpZ2h0LCBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuXG4gICAgLy8gRGVmaW5lIGNvcm5lciBjb29yZGluYXRlc1xuICAgIHZhciBsZWZ0WCA9IE1hdGgubWluKGZyb21YLCB0b1gpO1xuICAgIHZhciByaWdodFggPSBNYXRoLm1heChmcm9tWCwgdG9YKTtcbiAgICB2YXIgdG9wWSA9IE1hdGgubWluKGZyb21ZLCB0b1kpO1xuICAgIHZhciBib3R0b21ZID0gTWF0aC5tYXgoZnJvbVksIHRvWSk7XG5cbiAgICAvLyBSZXBsYWNlIGN1cnJlbnQgcG9pbnQgaW50byB0aGUgY2FudmFzXG4gICAgbGVmdFggPSBNYXRoLm1heCgwLCBsZWZ0WCk7XG4gICAgcmlnaHRYID0gTWF0aC5taW4oY2FudmFzLmdldFdpZHRoKCksIHJpZ2h0WCk7XG4gICAgdG9wWSA9IE1hdGgubWF4KDAsIHRvcFkpXG4gICAgYm90dG9tWSA9IE1hdGgubWluKGNhbnZhcy5nZXRIZWlnaHQoKSwgYm90dG9tWSk7XG5cbiAgICAvLyBSZWNhbGlicmF0ZSBjb29yZGluYXRlcyBhY2NvcmRpbmcgdG8gZ2l2ZW4gb3B0aW9uc1xuICAgIGlmIChyaWdodFggLSBsZWZ0WCA8IG1pbldpZHRoKSB7XG4gICAgICBpZiAoaXNSaWdodClcbiAgICAgICAgcmlnaHRYID0gbGVmdFggKyBtaW5XaWR0aDtcbiAgICAgIGVsc2VcbiAgICAgICAgbGVmdFggPSByaWdodFggLSBtaW5XaWR0aDtcbiAgICB9XG4gICAgaWYgKGJvdHRvbVkgLSB0b3BZIDwgbWluSGVpZ2h0KSB7XG4gICAgICBpZiAoaXNEb3duKVxuICAgICAgICBib3R0b21ZID0gdG9wWSArIG1pbkhlaWdodDtcbiAgICAgIGVsc2VcbiAgICAgICAgdG9wWSA9IGJvdHRvbVkgLSBtaW5IZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gVHJ1bmNhdGUgdHJ1bmNhdGUgYWNjb3JkaW5nIHRvIGNhbnZhcyBkaW1lbnNpb25zXG4gICAgaWYgKGxlZnRYIDwgMCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSBsZWZ0XG4gICAgICByaWdodFggKz0gTWF0aC5hYnMobGVmdFgpO1xuICAgICAgbGVmdFggPSAwXG4gICAgfVxuICAgIGlmIChyaWdodFggPiBjYW52YXMuZ2V0V2lkdGgoKSkge1xuICAgICAgLy8gVHJhbnNsYXRlIHRvIHRoZSByaWdodFxuICAgICAgbGVmdFggLT0gKHJpZ2h0WCAtIGNhbnZhcy5nZXRXaWR0aCgpKTtcbiAgICAgIHJpZ2h0WCA9IGNhbnZhcy5nZXRXaWR0aCgpO1xuICAgIH1cbiAgICBpZiAodG9wWSA8IDApIHtcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgYm90dG9tXG4gICAgICBib3R0b21ZICs9IE1hdGguYWJzKHRvcFkpO1xuICAgICAgdG9wWSA9IDBcbiAgICB9XG4gICAgaWYgKGJvdHRvbVkgPiBjYW52YXMuZ2V0SGVpZ2h0KCkpIHtcbiAgICAgIC8vIFRyYW5zbGF0ZSB0byB0aGUgcmlnaHRcbiAgICAgIHRvcFkgLT0gKGJvdHRvbVkgLSBjYW52YXMuZ2V0SGVpZ2h0KCkpO1xuICAgICAgYm90dG9tWSA9IGNhbnZhcy5nZXRIZWlnaHQoKTtcbiAgICB9XG5cbiAgICB2YXIgd2lkdGggPSByaWdodFggLSBsZWZ0WDtcbiAgICB2YXIgaGVpZ2h0ID0gYm90dG9tWSAtIHRvcFk7XG4gICAgdmFyIGN1cnJlbnRSYXRpbyA9IHdpZHRoIC8gaGVpZ2h0O1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5yYXRpbyAmJiArdGhpcy5vcHRpb25zLnJhdGlvICE9PSBjdXJyZW50UmF0aW8pIHtcbiAgICAgIHZhciByYXRpbyA9ICt0aGlzLm9wdGlvbnMucmF0aW87XG5cbiAgICAgIGlmKHRoaXMuaXNLZXlDcm9waW5nKSB7XG4gICAgICAgIGlzTGVmdCA9IHRoaXMuaXNLZXlMZWZ0O1xuICAgICAgICBpc1VwID0gdGhpcy5pc0tleVVwO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFJhdGlvIDwgcmF0aW8pIHtcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gaGVpZ2h0ICogcmF0aW87XG4gICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICBsZWZ0WCAtPSAobmV3V2lkdGggLSB3aWR0aCk7XG4gICAgICAgIH1cbiAgICAgICAgd2lkdGggPSBuZXdXaWR0aDtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJhdGlvID4gcmF0aW8pIHtcbiAgICAgICAgdmFyIG5ld0hlaWdodCA9IGhlaWdodCAvIChyYXRpbyAqIGhlaWdodC93aWR0aCk7XG4gICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgdG9wWSAtPSAobmV3SGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBoZWlnaHQgPSBuZXdIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWZ0WCA8IDApIHtcbiAgICAgICAgbGVmdFggPSAwO1xuICAgICAgICAvL1RPRE9cbiAgICAgIH1cbiAgICAgIGlmICh0b3BZIDwgMCkge1xuICAgICAgICB0b3BZID0gMDtcbiAgICAgICAgLy9UT0RPXG4gICAgICB9XG4gICAgICBpZiAobGVmdFggKyB3aWR0aCA+IGNhbnZhcy5nZXRXaWR0aCgpKSB7XG4gICAgICAgIHZhciBuZXdXaWR0aCA9IGNhbnZhcy5nZXRXaWR0aCgpIC0gbGVmdFg7XG4gICAgICAgIGhlaWdodCA9IG5ld1dpZHRoICogaGVpZ2h0IC8gd2lkdGg7XG4gICAgICAgIHdpZHRoID0gbmV3V2lkdGg7XG4gICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgdG9wWSA9IGZyb21ZIC0gaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodG9wWSArIGhlaWdodCA+IGNhbnZhcy5nZXRIZWlnaHQoKSkge1xuICAgICAgICB2YXIgbmV3SGVpZ2h0ID0gY2FudmFzLmdldEhlaWdodCgpIC0gdG9wWTtcbiAgICAgICAgd2lkdGggPSB3aWR0aCAqIG5ld0hlaWdodCAvIGhlaWdodDtcbiAgICAgICAgaGVpZ2h0ID0gbmV3SGVpZ2h0O1xuICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgbGVmdFggPSBmcm9tWCAtIHdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmNyb3Bab25lLmxlZnQgPSBsZWZ0WDtcbiAgICB0aGlzLmNyb3Bab25lLnRvcCA9IHRvcFk7XG4gICAgdGhpcy5jcm9wWm9uZS53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuY3JvcFpvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgdGhpcy5kYXJrcm9vbS5jYW52YXMuYnJpbmdUb0Zyb250KHRoaXMuY3JvcFpvbmUpO1xuXG4gICAgdGhpcy5kYXJrcm9vbS5kaXNwYXRjaEV2ZW50KCdjcm9wOnVwZGF0ZScpO1xuICB9XG59KTtcblxufSkoKTtcbiIsIihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuXG4gIERhcmtyb29tLnBsdWdpbnNbJ2xpbmUnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQm94UGx1Z2luKCkge1xuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHZhciBsaW5lQnV0dG9uID0gYnV0dG9uR3JvdXAuY3JlYXRlQnV0dG9uKHtcbiAgICAgICAgaW1hZ2U6ICdsaW5lJ1xuICAgICAgfSk7XG5cbiAgICAgIGxpbmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZExpbmUuYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIGFkZExpbmU6IGZ1bmN0aW9uIGFkZExpbmUoKSB7XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgdmFyIGZhY3RvciA9IGltYWdlLnNjYWxlWDtcblxuICAgICAgdmFyIGxpbmUgPSBuZXcgZmFicmljLkxpbmUoWzAsIDIwMCwgMCwgMF0sIHtcbiAgICAgICAgbGVmdDogMjAwLFxuICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgd2lkdGg6IDMwMCxcbiAgICAgICAgc3Ryb2tlOiAncmVkJyxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgICAgIC8vbG9ja1VuaVNjYWxpbmc6IHRydWUsXG4gICAgICAgIGxvY2tTa2V3aW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NrZXdpbmdZOiB0cnVlLFxuICAgICAgICAvL2xvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgLy9sb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIHBhZGRpbmc6IDIwLFxuICAgICAgICBzY2FsZVg6IGZhY3RvcixcbiAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgIH0pO1xuXG4gICAgICBsaW5lLm9uKHtcbiAgICAgICAgc2NhbGluZzogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB2YXIgb2JqID0gdGhpcyxcbiAgICAgICAgICAgIHcgPSBvYmoud2lkdGggKiBvYmouc2NhbGVYIC8gZmFjdG9yLFxuICAgICAgICAgICAgaCA9IG9iai5oZWlnaHQgKiBvYmouc2NhbGVZIC8gZmFjdG9yO1xuXG4gICAgICAgICAgb2JqLnNldCh7XG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhbnZhcy5hZGQobGluZSk7XG4gICAgfVxuXG4gIH0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG5cbiAgRGFya3Jvb20ucGx1Z2luc1snYXJyb3cnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQm94UGx1Z2luKCkge1xuICAgICAgdmFyIGJ1dHRvbkdyb3VwID0gdGhpcy5kYXJrcm9vbS50b29sYmFyLmNyZWF0ZUJ1dHRvbkdyb3VwKCk7XG5cbiAgICAgIHZhciBhcnJvd0J1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiAnYXJyb3cnXG4gICAgICB9KTtcblxuICAgICAgYXJyb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZEFycm93LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBhZGRBcnJvdzogZnVuY3Rpb24gYWRkQXJyb3coKSB7XG4gICAgICB2YXIgY2FudmFzID0gdGhpcy5kYXJrcm9vbS5jYW52YXM7XG4gICAgICB2YXIgaW1hZ2UgPSB0aGlzLmRhcmtyb29tLmltYWdlO1xuICAgICAgdmFyIGZhY3RvciA9IGltYWdlLnNjYWxlWDtcblxuICAgICAgdmFyIGxpbmUgPSBuZXcgZmFicmljLkFycm93KFs1MCwgNTAsIDUwLCAyMDBdLCB7XG4gICAgICAgIHN0cm9rZTogJ3JlZCcsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICAvL2hhc0JvcmRlcnM6IGZhbHNlLFxuICAgICAgICAvL2hhc0NvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgb3JpZ2luWDogJ2NlbnRlcicsXG4gICAgICAgIG9yaWdpblk6ICdjZW50ZXInLFxuICAgICAgICAvL2xvY2tTY2FsaW5nWDogdHJ1ZSxcbiAgICAgICAgLy9sb2NrU2NhbGluZ1k6IHRydWUsXG4gICAgICAgIGxvY2tTa2V3aW5nWDogdHJ1ZSxcbiAgICAgICAgbG9ja1NrZXdpbmdZOiB0cnVlLFxuICAgICAgICBwYWRkaW5nOiAyMCxcbiAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgIHNjYWxlWTogZmFjdG9yXG4gICAgICB9KTtcblxuICAgICAgY2FudmFzLmFkZChsaW5lKTtcblxuICAgICAgbGluZS5vbih7XG4gICAgICAgIHNjYWxpbmc6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgdmFyIGZhY3RvciA9IGltYWdlLnNjYWxlWDtcblxuICAgICAgICAgIHZhciBvYmogPSB0aGlzLFxuICAgICAgICAgICAgdyA9IG9iai53aWR0aCAqIG9iai5zY2FsZVggLyBmYWN0b3IsXG4gICAgICAgICAgICBoID0gb2JqLmhlaWdodCAqIG9iai5zY2FsZVkgLyBmYWN0b3I7XG5cbiAgICAgICAgICBvYmouc2V0KHtcbiAgICAgICAgICAgIHdpZHRoOiB3LFxuICAgICAgICAgICAgaGVpZ2h0OiBoLFxuICAgICAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgICAgICBzY2FsZVk6IGZhY3RvclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfSk7XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cblxuICBEYXJrcm9vbS5wbHVnaW5zWydyZWN0J10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uIEluaXREYXJrcm9vbUJveFBsdWdpbigpIHtcbiAgICAgIHZhciBidXR0b25Hcm91cCA9IHRoaXMuZGFya3Jvb20udG9vbGJhci5jcmVhdGVCdXR0b25Hcm91cCgpO1xuXG4gICAgICB2YXIgcmVjdEJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICAgIGltYWdlOiAncmVjdCdcbiAgICAgIH0pO1xuXG4gICAgICByZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRSZWN0LmJpbmQodGhpcykpO1xuICAgIH0sXG5cbiAgICBhZGRSZWN0OiBmdW5jdGlvbiBhZGRSZWN0KCkge1xuICAgICAgdmFyIGNhbnZhcyA9IHRoaXMuZGFya3Jvb20uY2FudmFzO1xuICAgICAgdmFyIGltYWdlID0gdGhpcy5kYXJrcm9vbS5pbWFnZTtcbiAgICAgIHZhciBmYWN0b3IgPSBpbWFnZS5zY2FsZVg7XG5cbiAgICAgIHZhciByZWN0ID0gbmV3IGZhYnJpYy5SZWN0KHtcbiAgICAgICAgbGVmdDogMTAwICogZmFjdG9yLFxuICAgICAgICB0b3A6IDEwMCAqIGZhY3RvcixcbiAgICAgICAgZmlsbDogJ3JnYmEoMCwwLDAsMCknLFxuICAgICAgICB3aWR0aDogdGhpcy5kYXJrcm9vbS5pbWFnZS53aWR0aCAvIDQsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBzdHJva2U6ICdyZWQnLFxuICAgICAgICBhbmdsZTogMCxcbiAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgIHNjYWxlWTogZmFjdG9yLFxuICAgICAgICBwYWRkaW5nOiAxNFxuICAgICAgfSk7XG5cbiAgICAgIHJlY3Qub24oe1xuICAgICAgICBzY2FsaW5nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBmYWN0b3IgPSBpbWFnZS5zY2FsZVg7XG5cbiAgICAgICAgICB2YXIgb2JqID0gdGhpcyxcbiAgICAgICAgICAgIHcgPSBvYmoud2lkdGggKiBvYmouc2NhbGVYIC8gZmFjdG9yLFxuICAgICAgICAgICAgaCA9IG9iai5oZWlnaHQgKiBvYmouc2NhbGVZIC8gZmFjdG9yO1xuXG4gICAgICAgICAgb2JqLnNldCh7XG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhbnZhcy5hZGQocmVjdCk7XG4gICAgfVxuXG4gIH0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG5cbiAgRGFya3Jvb20ucGx1Z2luc1sndGV4dCddID0gRGFya3Jvb20uUGx1Z2luLmV4dGVuZCh7XG5cbiAgICBpbml0aWFsaXplOiBmdW5jdGlvbiBJbml0RGFya3Jvb21Cb3hQbHVnaW4oKSB7XG4gICAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgICAgdmFyIHRleHRCdXR0b24gPSBidXR0b25Hcm91cC5jcmVhdGVCdXR0b24oe1xuICAgICAgICBpbWFnZTogJ3RleHQnXG4gICAgICB9KTtcblxuICAgICAgdGV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkVGV4dC5iaW5kKHRoaXMpKTtcbiAgICB9LFxuXG4gICAgYWRkVGV4dDogZnVuY3Rpb24gYWRkVGV4dCgpIHtcbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmRhcmtyb29tLmNhbnZhcztcbiAgICAgIHZhciBpbWFnZSA9IHRoaXMuZGFya3Jvb20uaW1hZ2U7XG4gICAgICB2YXIgZmFjdG9yID0gaW1hZ2Uuc2NhbGVYO1xuXG5cbiAgICAgIHZhciB0ZXh0ID0gbmV3IGZhYnJpYy5JVGV4dCgnU2FtcGxlIHRleHQuLi4nLHtcbiAgICAgICAgbGVmdDogMTAwICogZmFjdG9yLFxuICAgICAgICB0b3A6IDEwMCAqIGZhY3RvcixcbiAgICAgICAgZmlsbDogJ3JlZCcsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdNb25vc3BhY2UnLFxuICAgICAgICBsb2NrU2tld2luZ1g6IHRydWUsXG4gICAgICAgIGxvY2tTa2V3aW5nWTogdHJ1ZSxcbiAgICAgICAgc2NhbGVYOiBmYWN0b3IsXG4gICAgICAgIHNjYWxlWTogZmFjdG9yLFxuICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgfSk7XG5cbiAgICAgIHRleHQub24oe1xuICAgICAgICBzY2FsaW5nOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHZhciBmYWN0b3IgPSBpbWFnZS5zY2FsZVg7XG5cbiAgICAgICAgICB2YXIgb2JqID0gdGhpcyxcbiAgICAgICAgICAgIHcgPSBvYmoud2lkdGggKiBvYmouc2NhbGVYIC8gZmFjdG9yLFxuICAgICAgICAgICAgaCA9IG9iai5oZWlnaHQgKiBvYmouc2NhbGVZIC8gZmFjdG9yO1xuXG4gICAgICAgICAgb2JqLnNldCh7XG4gICAgICAgICAgICB3aWR0aDogdyxcbiAgICAgICAgICAgIGhlaWdodDogaCxcbiAgICAgICAgICAgIHNjYWxlWDogZmFjdG9yLFxuICAgICAgICAgICAgc2NhbGVZOiBmYWN0b3JcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNhbnZhcy5hZGQodGV4dCk7XG4gICAgfVxuXG4gIH0pO1xuXG59KSgpO1xuIiwiKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5EYXJrcm9vbS5wbHVnaW5zWydzYXZlJ10gPSBEYXJrcm9vbS5QbHVnaW4uZXh0ZW5kKHtcblxuICBkZWZhdWx0czoge1xuICAgIGNhbGxiYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZGFya3Jvb20uc2VsZkRlc3Ryb3koKTtcbiAgICB9XG4gIH0sXG5cbiAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdGlhbGl6ZURhcmtyb29tU2F2ZVBsdWdpbigpIHtcbiAgICB2YXIgYnV0dG9uR3JvdXAgPSB0aGlzLmRhcmtyb29tLnRvb2xiYXIuY3JlYXRlQnV0dG9uR3JvdXAoKTtcblxuICAgIHRoaXMuZGVzdHJveUJ1dHRvbiA9IGJ1dHRvbkdyb3VwLmNyZWF0ZUJ1dHRvbih7XG4gICAgICBpbWFnZTogJ3NhdmUnXG4gICAgfSk7XG5cbiAgICB0aGlzLmRlc3Ryb3lCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wdGlvbnMuY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gIH0sXG59KTtcblxufSkoKTtcbiIsIjsoZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsIERhcmtyb29tLCBmYWJyaWMsICQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIGpvaW5BdHRyaWJ1dGVzKGF0dHJpYnV0ZXNBcnJheSkge1xuICAgIHZhciBhdHRyaWJ1dGVzID0gW107XG4gICAgZm9yICh2YXIgaSBpbiBhdHRyaWJ1dGVzQXJyYXkpIHtcbiAgICAgIGF0dHJpYnV0ZXMucHVzaChpICsgJz1cIicgKyBhdHRyaWJ1dGVzQXJyYXlbaV0gKyAnXCInKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJpYnV0ZXMuam9pbignICcpO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udHJvbENvbnRhaW5lcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIENvbnRyb2xDb250YWluZXIucHJvdG90eXBlID0ge1xuICAgIGNyZWF0ZUNvbnRyb2xHcm91cDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIHZhciAkZ3JvdXAgPSAkKCc8ZGl2IGNsYXNzPVwiZGFya3Jvb20tY29udHJvbC1ncm91cFwiPjwvZGl2PicpO1xuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgkZ3JvdXApO1xuXG4gICAgICByZXR1cm4gbmV3IENvbnRyb2xHcm91cCgkZ3JvdXApO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBDb250cm9sR3JvdXAoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBDb250cm9sR3JvdXAucHJvdG90eXBlID0ge1xuICAgIGNyZWF0ZUNvbnRyb2w6IGZ1bmN0aW9uKHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBpZDogJ2Rhcmtyb29tLWNvbnRyb2wtJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJy0nICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwKSxcbiAgICAgICAgICBjbGFzczogJ2Rhcmtyb29tLWNvbnRyb2wtZWxlbWVudCdcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBvcHRpb25zOiB7fSxcbiAgICAgICAgc2NvcGU6IFtdLFxuICAgICAgICBncm91cDogJ2RlZmF1bHQnLFxuICAgICAgICBoaWRlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICBwcm9wZXJ0aWVzID0gJC5leHRlbmQodHJ1ZSwgZGVmYXVsdHMsIHByb3BlcnRpZXMpO1xuXG4gICAgICBzd2l0Y2ggKHByb3BlcnRpZXMudHlwZSkge1xuICAgICAgICBjYXNlICdjb2xvcic6XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICBjYXNlICdyYW5nZSc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5wdXRDb250cm9sKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlU2VsZWN0Q29udHJvbChwcm9wZXJ0aWVzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgICBjcmVhdGVJbnB1dENvbnRyb2w6IGZ1bmN0aW9uKHByb3BlcnRpZXMpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVzID0gam9pbkF0dHJpYnV0ZXMocHJvcGVydGllcy5hdHRyaWJ1dGVzKTtcblxuICAgICAgdmFyICRpbnB1dCA9ICQoJzxpbnB1dCB0eXBlPVwiJysgcHJvcGVydGllcy50eXBlICsnXCIgJyArIGF0dHJpYnV0ZXMgKycgdmFsdWU9XCInKyBwcm9wZXJ0aWVzLnZhbHVlICsnXCI+Jyk7XG4gICAgICB2YXIgJGxhYmVsID0gbnVsbDtcbiAgICAgIGlmIChwcm9wZXJ0aWVzLmxhYmVsKSB7XG4gICAgICAgICRsYWJlbCA9ICQoJzxsYWJlbCBjbGFzcz1cImRhcmtyb29tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCInKyBwcm9wZXJ0aWVzLmF0dHJpYnV0ZXMuaWQgKydcIj4nKyBwcm9wZXJ0aWVzLmxhYmVsICsnPC9sYWJlbD4nKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgkbGFiZWwpLmFwcGVuZCgkaW5wdXQpO1xuXG4gICAgICByZXR1cm4gbmV3IENvbnRyb2woJGlucHV0LCAkbGFiZWwsIHByb3BlcnRpZXMpO1xuICAgIH0sXG4gICAgY3JlYXRlU2VsZWN0Q29udHJvbDogZnVuY3Rpb24ocHJvcGVydGllcykge1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBqb2luQXR0cmlidXRlcyhwcm9wZXJ0aWVzLmF0dHJpYnV0ZXMpO1xuXG4gICAgICB2YXIgJHNlbGVjdCA9ICQoJzxzZWxlY3QgJyArIGF0dHJpYnV0ZXMgKyc+Jyk7XG4gICAgICB2YXIgJGxhYmVsID0gbnVsbDtcbiAgICAgIGlmIChwcm9wZXJ0aWVzLmxhYmVsKSB7XG4gICAgICAgICRsYWJlbCA9ICQoJzxsYWJlbCBjbGFzcz1cImRhcmtyb29tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCInKyBwcm9wZXJ0aWVzLmF0dHJpYnV0ZXMuaWQgKydcIj4nKyBwcm9wZXJ0aWVzLmxhYmVsICsnPC9sYWJlbD4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBvcHRpb25zID0gJyc7XG4gICAgICBmb3IgKHZhciBpIGluIHByb3BlcnRpZXMub3B0aW9ucykge1xuICAgICAgICB2YXIgcm93ID0gcHJvcGVydGllcy5vcHRpb25zW2ldO1xuICAgICAgICB2YXIgc2VsZWN0ZWQgPSByb3cudmFsdWUgPT0gcHJvcGVydGllcy52YWx1ZSA/ICAnc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiJyA6ICcnO1xuXG4gICAgICAgIG9wdGlvbnMgKz0gJzxvcHRpb24gdmFsdWU9XCInKyByb3cudmFsdWUgKydcIiAnKyBzZWxlY3RlZCArJz4nKyByb3cudGl0bGUgKyc8L29wdGlvbj4nO1xuICAgICAgfVxuXG4gICAgICAkc2VsZWN0LmFwcGVuZChvcHRpb25zKTtcblxuICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZCgkbGFiZWwpLmFwcGVuZCgkc2VsZWN0KTtcblxuICAgICAgcmV0dXJuIG5ldyBDb250cm9sKCRzZWxlY3QsICRsYWJlbCwgcHJvcGVydGllcyk7XG4gICAgfSxcbiAgICBjcmVhdGVCdXR0b25Db250cm9sOiBmdW5jdGlvbihwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgYXR0cmlidXRlcyA9IGpvaW5BdHRyaWJ1dGVzKHByb3BlcnRpZXMuYXR0cmlidXRlcyk7XG5cbiAgICAgIHZhciAkYnV0dG9uID0gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgJyArIGF0dHJpYnV0ZXMgKyc+JysgcHJvcGVydGllcy50aXRsZSArJzwvYnV0dG9uPicpO1xuXG4gICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kKCRidXR0b24pO1xuXG4gICAgICByZXR1cm4gbmV3IENvbnRyb2woJGJ1dHRvbiwgbnVsbCwgcHJvcGVydGllcyk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIENvbnRyb2woZWxlbWVudCwgbGFiZWxFbGVtZW50LCBwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IGxhYmVsRWxlbWVudDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuXG4gICAgdGhpcy5oaWRlKHByb3BlcnRpZXMuaGlkZSk7XG4gICAgdGhpcy5kaXNhYmxlKHByb3BlcnRpZXMuZGlzYWJsZWQpO1xuICB9XG5cbiAgQ29udHJvbC5wcm90b3R5cGUgPSB7XG4gICAgYWN0aXZlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkQ2xhc3MoJ2Rhcmtyb29tLWNvbnRyb2wtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUNsYXNzKCdkYXJrcm9vbS1jb250cm9sLWFjdGl2ZScpO1xuICAgICAgfVxuICAgIH0sXG4gICAgaGlkZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZENsYXNzKCdkYXJrcm9vbS1jb250cm9sLWhpZGRlbicpO1xuICAgICAgICBpZiAodGhpcy5sYWJlbEVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLmxhYmVsRWxlbWVudC5hZGRDbGFzcygnZGFya3Jvb20tY29udHJvbC1oaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDbGFzcygnZGFya3Jvb20tY29udHJvbC1oaWRkZW4nKTtcbiAgICAgICAgaWYgKHRoaXMubGFiZWxFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5sYWJlbEVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2Rhcmtyb29tLWNvbnRyb2wtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRpc2FibGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnByb3AoJ2Rpc2FibGVkJywgdmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgQVZBSUxBQkxFX0ZPTlRTID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIEFMTF9GT05UUyA9IFtcIkN1cnNpdmVcIiwgXCJNb25vc3BhY2VcIiwgXCJTZXJpZlwiLCBcIlNhbnMtc2VyaWZcIiwgXCJGYW50YXN5XCIsIFwiQXJpYWxcIiwgXCJBcmlhbCBCbGFja1wiLFxuICAgICAgXCJBcmlhbCBOYXJyb3dcIiwgXCJBcmlhbCBSb3VuZGVkIE1UIEJvbGRcIiwgXCJCb29rbWFuIE9sZCBTdHlsZVwiLCBcIkJyYWRsZXkgSGFuZCBJVENcIiwgXCJDZW50dXJ5XCIsXG4gICAgICBcIkNlbnR1cnkgR290aGljXCIsIFwiQ29taWMgU2FucyBNU1wiLCBcIkNvdXJpZXJcIiwgXCJDb3VyaWVyIE5ld1wiLCBcIkdlb3JnaWFcIiwgXCJHZW50aXVtXCIsIFwiSW1wYWN0XCIsXG4gICAgICBcIktpbmdcIiwgXCJMdWNpZGEgQ29uc29sZVwiLCBcIkxhbGl0XCIsIFwiTW9kZW5hXCIsIFwiTW9ub3R5cGUgQ29yc2l2YVwiLCBcIlBhcHlydXNcIiwgXCJUYWhvbWFcIiwgXCJUZVhcIixcbiAgICAgIFwiVGltZXNcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgXCJUcmVidWNoZXQgTVNcIiwgXCJWZXJkYW5hXCIsIFwiVmVyb25hXCIsIFwiVWJ1bnR1XCIsIFwiVWJ1bnR1IE1vbm9cIixcbiAgICAgIFwiVWJ1bnR1IENvbmRlbnNlZFwiLCBcIkhlbHZldGljYVwiXS5zb3J0KCk7XG5cbiAgICB2YXIgZm9udERldGVjdG9yID0gKG5ldyBEZXRlY3RvcigpKS5kZXRlY3Q7XG5cbiAgICByZXR1cm4gQUxMX0ZPTlRTLmZpbHRlcihmdW5jdGlvbihmb250KSB7IHJldHVybiBmb250RGV0ZWN0b3IoZm9udCk7IH0pO1xuICB9KSgpO1xuXG4gIGZ1bmN0aW9uIGdldE9iamVjdFN0eWxlKHN0eWxlTmFtZSwgb2JqZWN0KSB7XG4gICAgaWYgKCFvYmplY3QpIHJldHVybiAnJztcblxuICAgIHJldHVybiAob2JqZWN0LmdldFNlbGVjdGlvblN0eWxlcyAmJiBvYmplY3QuaXNFZGl0aW5nKVxuICAgICAgPyAob2JqZWN0LmdldFNlbGVjdGlvblN0eWxlcygpW3N0eWxlTmFtZV0gfHwgJycpXG4gICAgICA6IChvYmplY3Rbc3R5bGVOYW1lXSB8fCAnJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRPYmplY3RTdHlsZShzdHlsZU5hbWUsIHZhbHVlLCBvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCkgcmV0dXJuO1xuXG4gICAgaWYgKG9iamVjdC5zZXRTZWxlY3Rpb25TdHlsZXMgJiYgb2JqZWN0LmlzRWRpdGluZykge1xuICAgICAgdmFyIHN0eWxlID0ge307XG4gICAgICBzdHlsZVtzdHlsZU5hbWVdID0gdmFsdWU7XG4gICAgICBvYmplY3Quc2V0U2VsZWN0aW9uU3R5bGVzKHN0eWxlKTtcbiAgICAgIG9iamVjdC5zZXRDb29yZHMoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvYmplY3Rbc3R5bGVOYW1lXSA9IHZhbHVlO1xuICAgIH1cblxuICAgIG9iamVjdC5zZXRDb29yZHMoKTtcbiAgfVxuXG5cbiAgZnVuY3Rpb24gZ2V0T2JqZWN0UHJvcChuYW1lLCBvYmplY3QpIHtcbiAgICBpZiAoIW9iamVjdCkgcmV0dXJuICcnO1xuXG4gICAgcmV0dXJuIG9iamVjdFtuYW1lXSB8fCAnJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldE9iamVjdFByb3AobmFtZSwgdmFsdWUsIG9iamVjdCkge1xuICAgIGlmICghb2JqZWN0KSByZXR1cm47XG5cbiAgICBvYmplY3Quc2V0KG5hbWUsIHZhbHVlKS5zZXRDb29yZHMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbG9yKG9iamVjdCkge1xuICAgIHZhciB0eXBlID0gb2JqZWN0LmdldCgndHlwZScpO1xuICAgIGlmICh0eXBlID09ICd0ZXh0JyB8fCB0eXBlID09ICdpLXRleHQnKSB7XG4gICAgICByZXR1cm4gZ2V0T2JqZWN0U3R5bGUoJ2ZpbGwnLCBvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0T2JqZWN0U3R5bGUoJ3N0cm9rZScsIG9iamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRDb2xvcihvYmplY3QsIGNvbG9yKSB7XG4gICAgdmFyIHR5cGUgPSBvYmplY3QuZ2V0KCd0eXBlJyk7XG4gICAgaWYgKHR5cGUgPT0gJ3RleHQnIHx8IHR5cGUgPT0gJ2ktdGV4dCcpIHtcbiAgICAgIHJldHVybiBzZXRPYmplY3RTdHlsZSgnZmlsbCcsIGNvbG9yLCBvYmplY3QpO1xuICAgIH1cbiAgICByZXR1cm4gc2V0T2JqZWN0U3R5bGUoJ3N0cm9rZScsIGNvbG9yLCBvYmplY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2l6ZShvYmplY3QpIHtcbiAgICB2YXIgdHlwZSA9IG9iamVjdC5nZXQoJ3R5cGUnKTtcbiAgICBpZiAodHlwZSA9PSAndGV4dCcgfHwgdHlwZSA9PSAnaS10ZXh0Jykge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoKGdldE9iamVjdFN0eWxlKCdmb250U2l6ZScsIG9iamVjdCkgLSAxMikgLyAyKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldE9iamVjdFN0eWxlKCdzdHJva2VXaWR0aCcsIG9iamVjdCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTaXplKG9iamVjdCwgc2l6ZSkge1xuICAgIHZhciB0eXBlID0gb2JqZWN0LmdldCgndHlwZScpO1xuICAgIGlmICh0eXBlID09ICd0ZXh0JyB8fCB0eXBlID09ICdpLXRleHQnKSB7XG4gICAgICBzZXRPYmplY3RTdHlsZSgnZm9udFNpemUnLCAxMiArIHNpemUgKiAyLCBvYmplY3QpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldE9iamVjdFN0eWxlKCdzdHJva2VXaWR0aCcsIHNpemUsIG9iamVjdClcbiAgICB9XG4gICAgb2JqZWN0LnNldENvb3JkcygpO1xuICB9XG5cblxuXG5cbiAgRGFya3Jvb20ucGx1Z2luc1snY29udHJvbHMnXSA9IERhcmtyb29tLlBsdWdpbi5leHRlbmQoe1xuICAgIHVuZG9UcmFuc2Zvcm1hdGlvbnM6IFtdLFxuXG4gICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24gSW5pdERhcmtyb29tQ29udHJvbHNQbHVnaW4oKSB7XG4gICAgICB0aGlzLmRhcmtyb29tLmNhbnZhcy5vbignb2JqZWN0OnNlbGVjdGVkJywgdGhpcy5fb25PYmplY3RTZWxlY3RlZC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdzZWxlY3Rpb246Y2xlYXJlZCcsIHRoaXMuX29uT2JqZWN0U2VsZWN0aW9uQ2xlYXJlZC5iaW5kKHRoaXMpKTtcblxuICAgICAgdmFyICRjb250YWluZXIgPSAkKCc8ZGl2IGNsYXNzPVwiZGFya3Jvb20tY29udHJvbHMtY29udGFpbmVyXCI+PC9kaXY+Jyk7XG4gICAgICAkKHRoaXMuZGFya3Jvb20uY29udGFpbmVyRWxlbWVudCkucHJlcGVuZCgkY29udGFpbmVyKTtcblxuICAgICAgdGhpcy5jb250cm9sc0NvbnRhaW5lciA9IG5ldyBDb250cm9sQ29udGFpbmVyKCRjb250YWluZXIpO1xuICAgICAgdGhpcy5faW5pdENvbnRyb2xzKCk7XG4gICAgfSxcblxuICAgIF9pbml0Q29udHJvbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgdmFyIGNvbnRyb2xHcm91cCA9IHRoaXMuY29udHJvbHNDb250YWluZXIuY3JlYXRlQ29udHJvbEdyb3VwKCk7XG5cbiAgICAgIHZhciBjb2xvcklucHV0ID0gY29udHJvbEdyb3VwLmNyZWF0ZUNvbnRyb2woe1xuICAgICAgICBsYWJlbDogJ0NvbG9yJyxcbiAgICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgICAgdmFsdWU6ICcjZmYwMDAwJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbG9ySW5wdXQuZWxlbWVudC5vbignaW5wdXQgY2hhbmdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgIHZhciBhY3RpdmVPYmplY3QgPSBzZWxmLmRhcmtyb29tLmNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcbiAgICAgICAgaWYgKGFjdGl2ZU9iamVjdCAhPSBudWxsKSB7XG4gICAgICAgICAgc2V0Q29sb3IoYWN0aXZlT2JqZWN0LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgICBzZWxmLmRhcmtyb29tLmNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb2xvcklucHV0LnByb3BlcnRpZXMudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb2xvcklucHV0ID0gY29sb3JJbnB1dDtcblxuICAgICAgdmFyIHNpemVSYW5nZSA9IGNvbnRyb2xHcm91cC5jcmVhdGVDb250cm9sKHtcbiAgICAgICAgbGFiZWw6ICdTaXplJyxcbiAgICAgICAgdHlwZTogJ3JhbmdlJyxcbiAgICAgICAgdmFsdWU6ICcyJyxcbiAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICBtYXg6IDE2LFxuICAgICAgICAgIHN0ZXA6IDFcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHNpemVSYW5nZS5lbGVtZW50Lm9uKCdpbnB1dCBjaGFuZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgdmFyIGFjdGl2ZU9iamVjdCA9IHNlbGYuZGFya3Jvb20uY2FudmFzLmdldEFjdGl2ZU9iamVjdCgpO1xuICAgICAgICBpZiAoYWN0aXZlT2JqZWN0ICE9IG51bGwpIHtcbiAgICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlSW50KHRoaXMudmFsdWUsIDEwKTtcbiAgICAgICAgICBzZXRTaXplKGFjdGl2ZU9iamVjdCwgc2l6ZSk7XG4gICAgICAgICAgc2VsZi5kYXJrcm9vbS5jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2l6ZVJhbmdlLnByb3BlcnRpZXMudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zaXplUmFuZ2UgPSBzaXplUmFuZ2U7XG5cbiAgICAgIHZhciBmb250T3B0aW9ucyA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBpIGluIEFWQUlMQUJMRV9GT05UUykge1xuICAgICAgICB2YXIgbmFtZSA9IEFWQUlMQUJMRV9GT05UU1tpXTtcbiAgICAgICAgZm9udE9wdGlvbnNbbmFtZV0gPSB7XG4gICAgICAgICAgdmFsdWU6IG5hbWUsXG4gICAgICAgICAgdGl0bGU6IG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvbnRTZWxlY3Rpb24gPSBjb250cm9sR3JvdXAuY3JlYXRlQ29udHJvbCh7XG4gICAgICAgIGxhYmVsOiAnRm9udCcsXG4gICAgICAgIHR5cGU6ICdzZWxlY3QnLFxuICAgICAgICB2YWx1ZTogJ01vbm9zcGFjZScsXG4gICAgICAgIG9wdGlvbnM6IGZvbnRPcHRpb25zLFxuICAgICAgICBoaWRlOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgZm9udFNlbGVjdGlvbi5lbGVtZW50Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbihldil7XG4gICAgICAgIHZhciBhY3RpdmVPYmplY3QgPSBzZWxmLmRhcmtyb29tLmNhbnZhcy5nZXRBY3RpdmVPYmplY3QoKTtcbiAgICAgICAgaWYgKGFjdGl2ZU9iamVjdCAhPSBudWxsKSB7XG4gICAgICAgICAgc2V0T2JqZWN0UHJvcCgnZm9udEZhbWlseScsIHRoaXMudmFsdWUsIGFjdGl2ZU9iamVjdCk7XG4gICAgICAgICAgc2VsZi5kYXJrcm9vbS5jYW52YXMucmVuZGVyQWxsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm9udFNlbGVjdGlvbi5wcm9wZXJ0aWVzLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZm9udFNlbGVjdGlvbiA9IGZvbnRTZWxlY3Rpb247XG5cbiAgICAgIHRoaXMuZGFya3Jvb20uY2FudmFzLm9uKCdvYmplY3Q6YWRkZWQnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgaWYgKCFzZWxmLmRhcmtyb29tLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvYmogPSBldi50YXJnZXQ7XG4gICAgICAgIHZhciBjb2xvciA9IHNlbGYuY29sb3JJbnB1dC5wcm9wZXJ0aWVzLnZhbHVlO1xuICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlSW50KHNlbGYuc2l6ZVJhbmdlLnByb3BlcnRpZXMudmFsdWUsIDEwKTtcblxuICAgICAgICBpZiAob2JqLnNlbGVjdGFibGUpIHtcbiAgICAgICAgICBzZXRDb2xvcihvYmosIGNvbG9yKTtcbiAgICAgICAgICBzZXRTaXplKG9iaiwgc2l6ZSk7XG5cbiAgICAgICAgICBzZWxmLmRhcmtyb29tLmNhbnZhcy5yZW5kZXJBbGwoKTtcbiAgICAgICAgICBzZWxmLmRhcmtyb29tLmNhbnZhcy5zZXRBY3RpdmVPYmplY3Qob2JqKTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuICAgICAgdmFyIGRlbGV0ZUJ1dHRvbiA9IGNvbnRyb2xHcm91cC5jcmVhdGVCdXR0b25Db250cm9sKHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICB0aXRsZTogJ0RFTEVURScsXG4gICAgICAgIGF0dHJpYnV0ZXM6IHtcbiAgICAgICAgICBjbGFzczogJ2Rhcmtyb29tLWRlbGV0ZS1idXR0b24nXG4gICAgICAgIH0sXG4gICAgICAgIGhpZGU6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBkZWxldGVCdXR0b24uZWxlbWVudC5jbGljayh0aGlzLmRlbGV0ZUFjdGl2ZU9iamVjdC5iaW5kKHRoaXMpKTtcblxuICAgICAgdGhpcy5kZWxldGVCdXR0b24gPSBkZWxldGVCdXR0b247XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfb25PYmplY3RTZWxlY3RlZDogZnVuY3Rpb24oZXYpIHtcbiAgICAgIHZhciBvYmogPSBldi50YXJnZXQ7XG4gICAgICB2YXIgY29sb3IgPSBnZXRDb2xvcihvYmopO1xuICAgICAgdmFyIHNpemUgPSBnZXRTaXplKG9iaik7XG4gICAgICB2YXIgdHlwZSA9IG9iai5nZXQoJ3R5cGUnKTtcblxuICAgICAgdGhpcy5jb2xvcklucHV0LmVsZW1lbnQudmFsKGNvbG9yKTtcbiAgICAgIHRoaXMuc2l6ZVJhbmdlLmVsZW1lbnQudmFsKHNpemUpO1xuXG4gICAgICBpZiAodHlwZSA9PSAndGV4dCcgfHwgdHlwZSA9PSAnaS10ZXh0Jykge1xuICAgICAgICB2YXIgZm9udEZhbWlseSA9IGdldE9iamVjdFByb3AoJ2ZvbnRGYW1pbHknLCBvYmopO1xuICAgICAgICB0aGlzLmZvbnRTZWxlY3Rpb24uZWxlbWVudC52YWwoZm9udEZhbWlseSk7XG4gICAgICAgIHRoaXMuZm9udFNlbGVjdGlvbi5oaWRlKGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZWxldGVCdXR0b24uaGlkZShmYWxzZSk7XG4gICAgfSxcblxuICAgIF9vbk9iamVjdFNlbGVjdGlvbkNsZWFyZWQ6IGZ1bmN0aW9uKGV2KSB7XG4gICAgICBpZiAodGhpcy5jb2xvcklucHV0KSB7XG4gICAgICAgIHRoaXMuY29sb3JJbnB1dC5lbGVtZW50LnZhbCh0aGlzLmNvbG9ySW5wdXQucHJvcGVydGllcy52YWx1ZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zaXplUmFuZ2UpIHtcbiAgICAgICAgdGhpcy5zaXplUmFuZ2UuZWxlbWVudC52YWwodGhpcy5zaXplUmFuZ2UucHJvcGVydGllcy52YWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvbnRTZWxlY3Rpb24uaGlkZSh0cnVlKTtcbiAgICAgIHRoaXMuZGVsZXRlQnV0dG9uLmhpZGUodHJ1ZSk7XG4gICAgfSxcblxuICAgIGRlbGV0ZUFjdGl2ZU9iamVjdDogZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYWN0aXZlT2JqZWN0ID0gdGhpcy5kYXJrcm9vbS5jYW52YXMuZ2V0QWN0aXZlT2JqZWN0KCk7XG4gICAgICBpZiAoYWN0aXZlT2JqZWN0ICE9IG51bGwpIHtcbiAgICAgICAgYWN0aXZlT2JqZWN0LnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWxldGVCdXR0b24uaGlkZSh0cnVlKTtcbiAgICB9XG4gIH0pO1xufSkod2luZG93LCBkb2N1bWVudCwgRGFya3Jvb20sIGZhYnJpYywgalF1ZXJ5KTtcbiJdfQ==
