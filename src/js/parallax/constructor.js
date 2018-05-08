var throttle = require('throttle-debounce/throttle');
import $ from 'jquery';
const options = require('./_options');

module.exports = function ParallaxConstructor() {

  // cashe dom
  this.$main = $('.app > .main');
  this.$showMenuBtn = $('.menu-toggler');
  this.$sidebar = $('.main-sidebar');
  this.$toggleSlide = this.$sidebar.find('.toggle-slide');
  this.$menu = $('.main-menu');
  this.$btnClose = $('.btn-close');
  this.$slidesContainer = $('.slides-container');
  this.$slides = $('.slide');
  let $window = $(window);
  this.windowWidth = $window.width();
  this.windowHeight = $window.height();
  let self = this;


  // init
  this.easingDown         = false;
  this.easingUp           = false;
  this.slideTransitionDuration = options.slideTransitionDuration;
  this.throttlingInterval = options.throttlingInterval;
  this.currentOffset      = 0;
  this.currentSlide       = 1;
  this.stepWidth          = this.windowWidth;

  // calc values
  this.slidesCount        = this.$slides.length;
  this.slidesWidth        = this.slidesCount * this.stepWidth;
  this.maxOffset          = (this.slidesCount - 1) * this.stepWidth;

  // setup
  this.$slidesContainer.width(`${this.slidesWidth}px`);
  this.$slides.eq(this.currentSlide - 1).addClass('active');
  this.$main.height(this.windowHeight);

  // --------------------------------------------------------------------------------
  // event handlers
  window.onresize = throttle(this.throttlingInterval, this.updateSize.bind(this));
  window.onwheel = this.onWheelHandler.bind(this);

  // -----------------------------------------------------------
  // mouse control on page
  window.onmousedown = this.mouseDownHandler.bind(this);

  this.$showMenuBtn.on('click', function (event) {
    self.$menu.addClass('active');
    self.$menu.fadeIn();
  });

  this.$btnClose.on('click', function (event) {
    self.$menu.removeClass('active');
    self.$menu.fadeOut();
  });
}
