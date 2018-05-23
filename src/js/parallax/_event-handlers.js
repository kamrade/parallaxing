import $ from 'jquery';
import { TweenLite } from "gsap";

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
    this.init();
  }

  ParallaxConstructor.prototype.globalKeyDownHandler = function globalKeyDownHandler(event) {
    if (event.keyCode === 39) {
      this.setNextSlide();
    } else  if (event.keyCode === 37) {
      this.setPrevSlide();
    }
  }

  return ParallaxConstructor;
}
