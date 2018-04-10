let d3 = require('d3');

module.exports = function ParallaxConstructor() {
  this.slidesContainer    = document.querySelector('.slides-container');
  this.d3SlidesContainer  = d3.select(this.slidesContainer);
  this.slides             = document.querySelectorAll('.slide');
  this.windowWidth        = window.innerWidth;

  this.easingDown         = false;
  this.easingUp           = false;

  this.transitionDuration = 1200;

  this.currentOffset = 0;
  this.diff          = 0;
  this.stepWidth     = this.windowWidth;
  this.currentSlide  = 1;

  this.slidesCount                 = this.slides.length;
  this.slidesWidth                 = this.slidesCount * this.windowWidth;
  this.maxOffset                   = (this.slidesCount - 1) * this.windowWidth;
  this.slidesContainer.style.width = `${this.slidesWidth}px`;

  window.onwheel = (event) => {
    event.preventDefault();

    if (event.deltaY < 0) {
      if (!this.easingUp) {
        this.diff = this.stepWidth;
        this.transition('easingUp');
      }
    }
    if (event.deltaY > 0) {
      if (!this.easingDown) {
        this.diff = -1 * this.stepWidth;
        this.transition('easingDown');
      }
    }

  }

}
