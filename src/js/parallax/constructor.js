var throttle = require('throttle-debounce/throttle');
import $ from 'jquery';
const options = require('./_options');



module.exports = function ParallaxConstructor() {

  // cache dom
  this.$main = $('.app > .main');
  this.$showMenuBtn = $('.menu-toggler');
  this.$sidebar = $('.main-sidebar');
  this.$toggleSlide = this.$sidebar.find('.toggle-slide');
  this.$headerMenuItem = $('.header-menu-item');
  this.$menu = $('.main-menu');
  this.$btnClose = $('.btn-close');
  this.$slidesContainer = $('.slides-container');
  this.$slides = $('.slide');
  let $window = $(window);
  let self = this;

  // init
  this.easingDown = false;
  this.easingUp = false;
  this.slideTransitionDuration = options.slideTransitionDuration;
  this.throttlingInterval = options.throttlingInterval;
  this.currentOffset = 0;
  this.currentSlide = 1;
  this.slidesCount = this.$slides.length;

  this.init = function init() {
    this.windowWidth = $window.width();
    this.windowHeight = $window.height();

    // console.log(this.windowWidth, window.innerWidth);

    let headerHeight = $(".header").height();

    if (window.innerWidth > 768 ) {

      this.stepWidth = this.windowWidth;
      this.slidesWidth = this.slidesCount * this.stepWidth;
      this.$slidesContainer.css('display', 'flex');
      this.maxOffset = (this.slidesCount - 1) * this.stepWidth;
      this.$slidesContainer.width(`${this.slidesWidth}px`);
      this.$main.height(this.windowHeight);
      this.$slides.height(this.windowHeight - headerHeight);
      // this.$slides.css('min-height', this.windowHeight);
      this.$slides.width(this.windowWidth);
      window.onwheel = this.onWheelHandler.bind(this);
      window.onkeydown = this.globalKeyDownHandler.bind(this);
      this.currentOffset = -1 * (this.currentSlide - 1) * this.stepWidth;
      this.$slidesContainer.css('transform', `matrix(1,0,0,1,${this.currentOffset},0)`);

    } else {

      this.$slidesContainer.width('100%');
      this.$slidesContainer.css('display', 'block');
      this.$main.height('auto');
      this.$slides.height('auto');
      // this.$slides.css('min-height', this.windowHeight);
      this.$slides.width('auto');
      window.onwheel = null;
      window.onkeydown = null;
      this.$slidesContainer.css('transform', 'matrix(1,0,0,1,0,0)');

    }
  }

  // init
  this.init();

  this.$slides.eq(this.currentSlide - 1).addClass('active');

  window.onresize = throttle(this.throttlingInterval, this.updateSize.bind(this));

  this.$showMenuBtn.on('click', function (event) {
    self.$menu.addClass('active');
    self.$menu.fadeIn();
  });

  this.$btnClose.on('click', function (event) {
    self.$menu.removeClass('active');
    self.$menu.fadeOut();
  });

}
