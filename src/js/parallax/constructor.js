var throttle = require('throttle-debounce/throttle');
import $ from 'jquery';
const options = require('./_options');

module.exports = function ParallaxConstructor() {

  // cashe dom
  this.$slidesContainer = $('.slides-container');
  this.$slides = $('.slide');
  let $window = $(window);
  this.windowWidth = $window.width();
  this.windowHeight = $window.height();

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
  this.$slides.eq(this.currentSlide - 1).addClass('active');

  // --------------------------------------------------------------------------------
  // event handlers
  window.onresize = throttle(this.throttlingInterval, this.updateSize.bind(this));
  window.onwheel = this.onWheelHandler.bind(this);


  // -----------------------------------------------------------
  // mouse control on page
  // TODO: make everything correct

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

    if (offset > 200) {
      window.onmousemove = null;
      this.setPrevSlide();
    } else if (offset < -200) {
      window.onmousemove = null;
      this.setNextSlide();
    }
  }

  this.mouseUpHandler = (event) => {
    window.onmousemove = null;
    window.onmouseup = null;
  }

  window.onmousedown = this.mouseDownHandler;

}
