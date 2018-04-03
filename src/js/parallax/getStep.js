module.exports = function(ParallaxConstructor) {

  ParallaxConstructor.prototype.getStep = function getStep() {
    this.currentStep = this.currentOffset === 0 ? 1 : -1 * (this.currentOffset / this.step ) + 1;
    return this.currentStep;
  }

  return ParallaxConstructor;
}
