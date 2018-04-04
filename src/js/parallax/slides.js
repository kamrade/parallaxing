module.exports = function(ParallaxConstructor) {

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
