(function () {
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
