let d3 = require('d3');

module.exports = function(ParallaxConstructor) {

  ParallaxConstructor.prototype.transition = function transition(easing) {
    this.currentOffset = this.currentOffset + this.diff;
    if (this.currentOffset <= 0) {
      if (this.currentOffset > (-1 * this.maxOffset)) {

        this.d3SlidesContainer
          .transition()
          .duration(this.transitionDuration)
          .ease(d3.easeQuadInOut)
          .style("left", `${this.currentOffset}px`);

      } else {
        this.currentOffset = (-1 * this.maxOffset - this.diff);
      }
    } else {
      this.currentOffset = 0;
    }

    this[easing] = true;
    setTimeout(() => {
      this[easing] = false;
    }, this.transitionDuration * 1.2);

  }

  return ParallaxConstructor;
}
