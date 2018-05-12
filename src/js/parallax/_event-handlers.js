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
    this.windowWidth = $(window).width();
    this.windowHeight = $(window).height();
    this.stepWidth = this.windowWidth;
    this.slidesWidth = this.slidesCount * this.windowWidth;
    this.maxOffset = (this.slidesCount - 1) * this.windowWidth;
    this.$slidesContainer.width(`${this.slidesWidth}px`);
    this.$main.height(this.windowHeight);
    // this.setSlide(this.currentSlide);
    this.updateSlidesContainerOffset();
  }

  // mouse swipe
  ParallaxConstructor.prototype.mouseDownHandler = function mouseDownHandler(event) {
    this.startX = event.clientX;
    let leftStr = this.$slidesContainer.css('left') || '0px';
    let left = parseInt(leftStr.substring(0, leftStr.length - 2));
    this.startOffset = left;
    window.onmousemove = this.mouseMoveHandler.bind(this);
    window.onmouseup = this.mouseUpHandler.bind(this);
  }

  ParallaxConstructor.prototype.mouseMoveHandler = function mouseMoveHandler(event) {
    let offset = event.clientX - this.startX;
    let newOffset = this.startOffset + offset/2;
    if (offset > 200) {
      window.onmousemove = null;
      this.setPrevSlide();
    } else if (offset < -200) {
      window.onmousemove = null;
      this.setNextSlide();
    }
  }

  ParallaxConstructor.prototype.mouseUpHandler = function mouseUpHandler(event) {
    window.onmousemove = null;
    window.onmouseup = null;
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
