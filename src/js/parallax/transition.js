let d3 = require('d3');

module.exports = function(ParallaxConstructor) {

  ParallaxConstructor.prototype.transition = function transition(easing) {
    this.currentOffset = this.currentOffset + this.diff;
    if (this.currentOffset <= 0) {
      if (this.currentOffset > (-1 * (this.maxOffset + this.stepWidth))) {

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
    this.calcSlide();

    this[easing] = true;
    setTimeout(() => {
      this[easing] = false;
    }, this.transitionDuration * 1.2);

  }

  ParallaxConstructor.prototype.transitionTo = function transitionTo(slide) {
    let saveOffset = this.currentOffset;
    this.currentOffset = -1 * ((slide - 1) * this.stepWidth);

    if (this.currentOffset <= 0 && this.currentOffset > (-1 * (this.maxOffset + this.stepWidth))) {

      this.d3SlidesContainer
        .transition()
        .duration(this.transitionDuration/2)
        .ease(d3.easeQuadInOut)
        .style("left", `${this.currentOffset}px`);

    } else {
      this.currentOffset = saveOffset;
    }

    this.calcSlide();
  }

  ParallaxConstructor.prototype.calcSlide = function calcSlide() {
    this.currentSlide = this.currentOffset === 0 ? 1 : -1 * (this.currentOffset / this.stepWidth ) + 1;
    return this.currentSlide;
  }

  ParallaxConstructor.prototype.getSlide = function getSlide() {
    return this.currentSlide;
  }

  ParallaxConstructor.prototype.setSlide = function setSlide(step) {
    this.transitionTo(step);
  }

  return ParallaxConstructor;
}
