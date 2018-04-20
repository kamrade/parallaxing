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

      this.slideBlocks[this.currentSlide - 1].forEach(block => {
        block.style.transform = 'translateX(300px) rotate(30deg)';
      });

      this.currentSlide  = slide;
      this.currentOffset = -1 * (this.currentSlide - 1) * this.stepWidth;
      this.d3SlidesContainer
        .transition()
        .duration(this.transitionDuration)
        .ease(d3.easeQuadInOut)
        .style("left", `${this.currentOffset}px`);

      this.slideBlocks[slide - 1].forEach(block => {
        block.style.transform = 'translateX(0px) rotate(0deg)';
      });

    }
  }

  return ParallaxConstructor;
}
