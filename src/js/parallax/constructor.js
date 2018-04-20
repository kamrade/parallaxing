let d3 = require('d3');
let _ = require('lodash');

module.exports = function ParallaxConstructor() {

  // cashe dom
  this.slidesContainer    = document.querySelector('.slides-container');
  this.d3SlidesContainer  = d3.select(this.slidesContainer);
  this.slides             = document.querySelectorAll('.slide');
  this.windowWidth        = window.innerWidth;

  // cashe slide-blocks
  this.slideBlocks = [];
  this.slides.forEach((slide, i) => {
    let blocks = slide.querySelectorAll('.slide-content--block');
    this.slideBlocks.push(blocks);
  });

  this.slideBlocks.map(slideBlock => {
    slideBlock.forEach(block => {
      block.style.transform = 'translateX(100px)';
    });
  });

  // init
  this.easingDown         = false;
  this.easingUp           = false;
  this.transitionDuration = 1200;
  this.throttlingInterval = 500; // ms
  this.currentOffset      = 0;
  this.currentSlide       = 1;
  this.stepWidth          = this.windowWidth;

  // calc values
  this.slidesCount        = this.slides.length;
  this.slidesWidth        = this.slidesCount * this.windowWidth;
  this.maxOffset          = (this.slidesCount - 1) * this.windowWidth;

  // setup
  this.slidesContainer.style.width = `${this.slidesWidth}px`;

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
