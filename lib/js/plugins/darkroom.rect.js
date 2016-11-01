(function () {
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
