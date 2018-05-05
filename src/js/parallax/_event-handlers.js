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

    return ParallaxConstructor;
}
