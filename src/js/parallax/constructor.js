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

  // при первичной загрузке при вычислении ширины окна учитывается scrollBar.
  // обычно ширина scrollBar 16px. После использования обнуляется,
  // потому что при resize scrollBar уже отсутствует.
  let addon = 16;

  this.init = function init() {

    this.windowWidth = $window.width() + addon;
    addon = 0;
    this.windowHeight = $window.height();

    let headerHeight = $(".header").height();

    this.$headerMenuItem.removeClass('active');
    this.$headerMenuItem.eq(this.currentSlide-1).addClass('active');

    if (window.innerWidth > 768 ) {

      this.stepWidth = this.windowWidth;
      this.slidesWidth = this.slidesCount * this.stepWidth;
      this.$slidesContainer.css('display', 'flex');
      this.maxOffset = (this.slidesCount - 1) * this.stepWidth;
      this.$slidesContainer.width(`${this.slidesWidth}px`);
      this.$main.height(this.windowHeight);
      this.$slides.height(this.windowHeight - headerHeight);
      this.$slides.width(this.windowWidth);
      this.currentOffset = -1 * (this.currentSlide - 1) * this.stepWidth;
      this.$slidesContainer.css('transform', `matrix(1,0,0,1,${this.currentOffset},0)`);

      window.onwheel = this.onWheelHandler.bind(this);
      window.onkeydown = this.globalKeyDownHandler.bind(this);
      $window.scroll(null);

    } else {

      this.$slidesContainer.width('100%');
      this.$slidesContainer.css('display', 'block');
      this.$main.height('auto');
      this.$slides.height('auto');
      this.$slides.css('min-height', $window.height());
      this.$slides.width('auto');
      this.$slidesContainer.css('transform', 'matrix(1,0,0,1,0,0)');

      $('html, body').animate({
        scrollTop: self.$slides.eq(this.currentSlide - 1).offset().top
      }, 100);

      window.onwheel = null;

      $window.scroll(() => {

        if ($window.width() < 768) {

          let winScrollPos = $window.scrollTop()
          let headerSize = 44;
          let sensitivity = $window.height()/4 + headerSize;
          let currentSlide = 0;

          for (let i = 0, l = self.$slides.length; i < l; i++ ) {

            let currOffset = winScrollPos+sensitivity;
            let currSlideOffset = self.$slides.eq(i).offset().top;
            let nextSlideOffset = self.$slides.eq(i+1).length ? self.$slides.eq(i+1).offset().top : 1000000;

            if (currOffset > currSlideOffset && currOffset < nextSlideOffset) {
              currentSlide = i;
              self.currentSlide = currentSlide + 1;
              break;
            }
          }

          self.$headerMenuItem.removeClass('active');
          self.$headerMenuItem.eq(self.currentSlide - 1).addClass('active');

        }

      });

      window.onkeydown = null;

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
