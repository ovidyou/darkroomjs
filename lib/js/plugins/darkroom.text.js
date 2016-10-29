(function () {
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
