import $ from 'jquery';

module.exports = function(ParallaxConstructor) {

  ParallaxConstructor.prototype.onWheelHandler = function onWheelHandler(event) {
    event.preventDefault();

    if (event.deltaY < 0) {
      if (!this.easingUp) {
        this.transition('easingUp');
      }
    } else if (event.deltaY > 0) {
      if (!this.easingDown) {
        this.transition('easingDown');
      }
    }

  }

  ParallaxConstructor.prototype.updateSize = function updateSize() {

    console.log(':: updateSize');

    this.windowWidth = $(window).width();
    this.stepWidth = this.windowWidth;
    this.slidesWidth = this.slidesCount * this.windowWidth;
    this.maxOffset = (this.slidesCount - 1) * this.windowWidth;
    this.$slidesContainer.width(`${this.slidesWidth}px`);

  }

  return ParallaxConstructor;
  
}
