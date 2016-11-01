(function () {
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
