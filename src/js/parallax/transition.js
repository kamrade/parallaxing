let $ = require('jquery');

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

      this.$slidesContainer.stop();

      // set class 'active' to active slide
      this.slides.forEach(slide => slide.classList.remove('active'));
      this.slides[slide - 1].classList.add('active');

      this.currentSlide  = slide;
      this.currentOffset = -1 * (this.currentSlide - 1) * this.stepWidth;
      
      this.$slidesContainer.animate({
        left: `${this.currentOffset}px`
      }, transitionDuration);
    }
  }

  return ParallaxConstructor;
}
