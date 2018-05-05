module.exports = function(ParallaxConstructor) {

  ParallaxConstructor.prototype.slideWillChange = function slideWillChange() {

    switch(this.currentSlide) {
      case 1:
        console.log(':: out of 1');
        break;
      case 2:
        console.log(':: out of 2');
        break;
      default:
        console.log('out of default');
    }

  }

  ParallaxConstructor.prototype.slideHasBeenChanged = function slideHasBeenChanged() {

    switch(this.currentSlide) {
      case 1:
        console.log(':: in to 1');
        break;
      case 2:
        console.log(':: in to 2');
        break;
      default:
        console.log(':: in to default');
    }

  }

  return ParallaxConstructor;
}
