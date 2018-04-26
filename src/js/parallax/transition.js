let d3 = require('d3');

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

  ParallaxConstructor.prototype.setSlide = function setSlide(slide) {
    if (slide > 0 && slide < (this.slidesCount + 1)) {

      // set class 'active' to active slide
      this.slides.forEach(slide => slide.classList.remove('active'));
      this.slides[slide - 1].classList.add('active');

      this.currentSlide  = slide;
      this.currentOffset = -1 * (this.currentSlide - 1) * this.stepWidth;
      this.d3SlidesContainer
        .transition()
        .duration(this.transitionDuration)
        .ease(d3.easeQuadInOut)
        .style("left", `${this.currentOffset}px`);

    }
  }

  return ParallaxConstructor;
}
