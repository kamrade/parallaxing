let d3 = require('d3');

module.exports = function ParallaxConstructor() {
  this.slidesContainer    = document.querySelector('.slides-container');
  this.d3SlidesContainer  = d3.select(this.slidesContainer);
  this.slides             = document.querySelectorAll('.slide');
  this.windowWidth        = window.innerWidth;

  this.easingDown         = false;
  this.easingUp           = false;

  this.transitionDuration = 1500;

  this.currentOffset = 0;
  this.diff          = 0;
  this.step          = this.windowWidth;
  this.currentStep   = 1;

  this.slidesCount                 = this.slides.length;
  this.slidesWidth                 = this.slidesCount * this.windowWidth;
  this.maxOffset                   = this.slidesCount * this.windowWidth;
  this.slidesContainer.style.width = `${this.slidesWidth}px`;

  window.onwheel = (event) => {
    event.preventDefault();

    if (event.deltaY < 0) {
      if (!this.easingUp) {
        this.diff = this.step;
        this.transition('easingUp');
        console.log( this.getStep() );
      }
    }
    if (event.deltaY > 0) {
      if (!this.easingDown) {
        this.diff = -1 * this.step;
        this.transition('easingDown');
        console.log( this.getStep() );
      }
    }

  }

}
