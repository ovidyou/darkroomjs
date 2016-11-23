(function ($) {
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
