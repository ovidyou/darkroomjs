(function($) {
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
