var throttle = require('throttle-debounce/throttle');
import $ from 'jquery';
const options = require('./options');

module.exports = function ParallaxConstructor() {

  // cashe dom
  this.$slidesContainer   = $('.slides-container');
  this.$slides            = $('.slide');
  let $window             = $(window);
  this.windowWidth        = $window.width();
  this.windowHeight       = $window.height();

  // init
  this.easingDown         = false;
  this.easingUp           = false;
  this.transitionDuration = options.transitionDuration;
  this.throttlingInterval = options.throttlingInterval;
  this.currentOffset      = 0;
  this.currentSlide       = 1;
  this.stepWidth          = this.windowWidth;

  // calc values
  this.slidesCount        = this.$slides.length;
  this.slidesWidth        = this.slidesCount * this.windowWidth;
  this.maxOffset          = (this.slidesCount - 1) * this.windowWidth;

  // setup
  this.$slidesContainer.width(`${this.slidesWidth}px`);

  // init active class
  this.$slides.eq(this.currentSlide - 1).addClass('active');

  // playground
  let $welcomeTitle = $('.welcome-title');
  let n = 1;
  let initialText = $welcomeTitle.text();
  let typingSpeed = 120;
  let cycles = initialText.length;
  
  let interval = setInterval(function() {
    $welcomeTitle.html( initialText.substring(0, n) + '<i class="fas fa-square blinking"></i>' );
    n++;
    if (n > cycles) {
      clearInterval(interval);
    }
  }, typingSpeed);
  


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
    this.startX = event.clientX;
    let leftStr = this.$slidesContainer.css('left') || '0px';
    let left = parseInt(leftStr.substring(0, leftStr.length - 2));
    this.startOffset = left;
    window.onmousemove = this.mouseMoveHandler;
    window.onmouseup = this.mouseUpHandler;
  }

  this.mouseMoveHandler = (event) => {
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
    this.setSlide(this.currentSlide, 600);
    window.onmousemove = null;
    window.onmouseup = null;
  }

  window.onmousedown = this.mouseDownHandler;
  

}
