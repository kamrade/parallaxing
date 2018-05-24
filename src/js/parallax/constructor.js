var throttle = require('throttle-debounce/throttle');
import $ from 'jquery';
const options = require('./_options');

import SplitText from '../libs/split-text';

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

  this.slide_01_Constructor = function slide_01_Constructor() {

    this.slide_01 = this.slide_01 || {};

    this.slide_01.animateText01A = new SplitText('.animate-text-01A');
    this.slide_01.welcomeTitleTimeline01A = new TimelineLite();

    this.slide_01.animateText01B = new SplitText('.animate-text-01B');
    this.slide_01.welcomeTitleTimeline01B = new TimelineLite();

    this.slide_01.animateText01C = new SplitText('.animate-text-01C');
    this.slide_01.welcomeTitleTimeline01C = new TimelineLite();

    // --------------

    this.slide_01.animateText02A = new SplitText('.animate-text-02A');
    this.slide_01.welcomeTitleTimeline02A = new TimelineLite();

    this.slide_01.animateText02B = new SplitText('.animate-text-02B');
    this.slide_01.welcomeTitleTimeline02B = new TimelineLite();

    this.slide_01.animateText02C = new SplitText('.animate-text-02C');
    this.slide_01.welcomeTitleTimeline02C = new TimelineLite();

    this.slide_01.animateText02D = new SplitText('.animate-text-02D');
    this.slide_01.welcomeTitleTimeline02D = new TimelineLite();

    // --------------------

    this.slide_01.animateText03A = new SplitText('.animate-text-03A');
    this.slide_01.welcomeTitleTimeline03A = new TimelineLite();

    this.slide_01.animateText03B = new SplitText('.animate-text-03B');
    this.slide_01.welcomeTitleTimeline03B = new TimelineLite();

  }

  this.slide_01_Constructor();
}
