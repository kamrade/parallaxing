import { TweenLite } from "gsap";
import $ from 'jquery';

module.exports = function transitions(ParallaxConstructor) {

  ParallaxConstructor.prototype.transition = function transition(easing) {

    if (easing === 'easingUp') {
      if (this.currentSlide !== 1) {
        let newSlide = this.currentSlide - 1;
        this.setSlide(newSlide);
      }
    } else if (easing === 'easingDown') {
      if (this.currentSlide !== this.slidesCount) {
        let newSlide = this.currentSlide + 1;
        this.setSlide(newSlide);
      }
    }

    this[easing] = true;
    setTimeout(() => {
      this[easing] = false;
    }, this.transitionDuration * 1.2);
    
  }

  ParallaxConstructor.prototype.setNextSlide = function setNextSlide() {
    if (this.currentSlide !== this.slidesCount) {
      this.setSlide(this.currentSlide + 1);
    }
  }

  ParallaxConstructor.prototype.setPrevSlide = function setPrevSlide() {
    if (this.currentSlide !== 1) {
      this.setSlide(this.currentSlide - 1);
    }
  }

  ParallaxConstructor.prototype.setSlide = function setSlide(slide, duration) {

    let transitionDuration = duration || this.transitionDuration;
    
    if (slide > 0 && slide < (this.slidesCount + 1)) {

      this.$slides.each((index, slide) => {
        $(slide).removeClass('active');
      });
      this.$slides.eq(slide - 1).addClass('active');

      this.currentSlide  = slide;
      this.currentOffset = -1 * (this.currentSlide - 1) * this.stepWidth;

      TweenLite.to(this.$slidesContainer, 1.3, { x: this.currentOffset });
    }
  }

  return ParallaxConstructor;
}
