//
// Arrow for fabric.js
//
(function($){
  $.Arrow = $.util.createClass($.Line, $.Observable, {
    initialize: function(e,t) {
      this.callSuper("initialize", e, t);
      this.set({type:'arrow'});
    },
    _render: function(e) {
      e.beginPath();
      var r = this.calcLinePoints();
      var headlen = Math.round(10 + this.strokeWidth * 1.2) ;   // length of head in pixels
      var lineMaxY = r.y2 - headlen;

      e.moveTo(r.x1, r.y1);
      e.lineTo(r.x2, lineMaxY + 1);

      e.lineWidth = this.strokeWidth;
      e.lineJoin = 'miter';
      var s = e.strokeStyle;
      e.strokeStyle = this.stroke || e.fillStyle, this.stroke && this._renderStroke(e), e.strokeStyle = s;

      // Draw Arrow head
      var centerX = r.x2;
      var angle = 40;
      var arrowX1 = centerX - headlen*Math.tan(angle * Math.PI/180);

      e.beginPath();
      e.moveTo(arrowX1, lineMaxY);
      e.lineTo(centerX, r.y2);
      e.lineTo(-arrowX1, lineMaxY);
      e.lineTo(arrowX1, lineMaxY);

      this.fill = this.stroke;
      e.lineWidth = 1;
      this._renderFill(e);
    },
    complexity: function() {
      return 2
    }
  });
  $.Arrow.fromObject = function(e) {
    var n = [e.x1, e.y1, e.x2, e.y2];
    return new $.Arrow(n, e)
  }
})(fabric);
