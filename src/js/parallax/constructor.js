let d3 = require('d3');
let _ = require('lodash');
const options = require('./options');

module.exports = function ParallaxConstructor() {

  // cashe dom
  this.slidesContainer    = document.querySelector('.slides-container');
  this.d3SlidesContainer  = d3.select(this.slidesContainer);
  this.slides             = document.querySelectorAll('.slide');
  this.windowWidth        = window.innerWidth;
  this.windowHeight       = window.innerHeight;

  // init
  this.easingDown         = false;
  this.easingUp           = false;
  this.transitionDuration = options.transitionDuration;
  this.throttlingInterval = options.throttlingInterval;
  this.currentOffset      = 0;
  this.currentSlide       = 1;
  this.stepWidth          = this.windowWidth;

  // calc values
  this.slidesCount        = this.slides.length;
  this.slidesWidth        = this.slidesCount * this.windowWidth;
  this.maxOffset          = (this.slidesCount - 1) * this.windowWidth;

  // setup
  this.slidesContainer.style.width = `${this.slidesWidth}px`;

  // init active class
  this.slides[this.currentSlide - 1].classList.add('active');

  // this.slides.forEach(slide => slide.style.height = that.windowHeight);
  // console.log(that.windowHeight);


  // --------------------------------------------------------------------------------
  // event handlers
  window.onresize = _.throttle(this.updateSize.bind(this), this.throttlingInterval);

  window.onwheel = (event) => {
    event.preventDefault();

    if (event.deltaY < 0) {
      if (!this.easingUp) {
        this.transition('easingUp');
      }
    }
    if (event.deltaY > 0) {
      if (!this.easingDown) {
        this.transition('easingDown');
      }
    }

  }

}
