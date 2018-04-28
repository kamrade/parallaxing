var throttle = require('throttle-debounce/throttle');
const options = require('./options');

module.exports = function ParallaxConstructor() {

  // cashe dom
  this.slidesContainer    = document.querySelector('.slides-container');
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


  // --------------------------------------------------------------------------------
  // event handlers
  window.onresize = throttle(this.throttlingInterval, this.updateSize.bind(this));

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

  // mouse control on page
  this.mouseDownHandler = (event) => {
    console.log(':: mousedown');
    
    this.startX = event.clientX;
    let leftStr = this.slidesContainer.style.left || '0px';
    let left = parseInt(leftStr.substring(0, leftStr.length - 2));
    this.startOffset = left;
    
    window.onmousemove = this.mouseMoveHandler;
    window.onmouseup = this.mouseUpHandler;
    // this.$slidesContainer.addClass('notransition');
  }

  this.mouseMoveHandler = (event) => {
    console.log(':: mousemove');
    let offset = event.clientX - this.startX;
    let newOffset = this.startOffset + offset/2;
    // this.slidesContainer.style.left = newOffset + 'px';
    // this.slidesContainer.style.transform = `translateX(${newOffset}px)`;

    if (offset > 200) {
      window.onmousemove = null;
      this.setPrevSlide();
    } else if (offset < -200) {
      window.onmousemove = null;
      this.setNextSlide();
    }
  }

  this.mouseUpHandler = (event) => {
    console.log(':: mouseup');
    this.setSlide(this.currentSlide, 600);
    window.onmousemove = null;
    window.onmouseup = null;
  }

  window.onmousedown = this.mouseDownHandler;
  

}
