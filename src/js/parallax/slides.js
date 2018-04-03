module.exports = function(ParallaxConstructor) {

  ParallaxConstructor.prototype.calcSlide = function calcSlide() {
    this.currentStep = this.currentOffset === 0 ? 1 : -1 * (this.currentOffset / this.stepWidth ) + 1;
    return this.currentStep;
  }

  ParallaxConstructor.prototype.getSlide = function getSlide() {
    return this.currentStep;
  }

  ParallaxConstructor.prototype.setSlide = function setSlide(step) {
    this.transitionTo(step);
  }

  return ParallaxConstructor;
}
