import $ from 'jquery';
import { TweenLite, TimelineLite } from 'gsap';
import SplitText from '../libs/split-text';

module.exports = function(ParallaxConstructor) {

  ParallaxConstructor.prototype.slideWillChange = function slideWillChange() {

    switch(this.currentSlide) {
      case 1:
        this.slide_01_Destructor();
        break;
      case 2:
        break;
      default:
        break;
    }

  }

  ParallaxConstructor.prototype.slideHasBeenChanged = function slideHasBeenChanged() {

    switch(this.currentSlide) {
      case 1:
        this.slide_01_Listener();
        break;
      case 2:
        break;
      default:
        break;
    }

  }

  ParallaxConstructor.prototype.slide_01_Constructor = function slide_01_Constructor() {
    this.slide_01 = this.slide_01 || {};

    this.slide_01.animateText01A = new SplitText('.animate-text-01A');
    this.slide_01.animateText01B = new SplitText('.animate-text-01B');
    this.slide_01.animateText01C = new SplitText('.animate-text-01C');

    // --------------

    this.slide_01.animateText02A = new SplitText('.animate-text-02A');
    this.slide_01.animateText02B = new SplitText('.animate-text-02B');
    this.slide_01.animateText02C = new SplitText('.animate-text-02C');
    this.slide_01.animateText02D = new SplitText('.animate-text-02D');

    // --------------------

    this.slide_01.animateText03A = new SplitText('.animate-text-03A');
    this.slide_01.animateText03B = new SplitText('.animate-text-03B');
  }

  // Пока приходится дублировать конструктор в листенере
  // потому что иначе почему-то теряются отдельные буквы иногда. :(

  ParallaxConstructor.prototype.slide_01_Listener = function slide_01_Listener() {

    this.slide_01 = this.slide_01 || {};

    this.slide_01.animateText01A = new SplitText('.animate-text-01A');
    this.slide_01.animateText01B = new SplitText('.animate-text-01B');
    this.slide_01.animateText01C = new SplitText('.animate-text-01C');

    // --------------

    this.slide_01.animateText02A = new SplitText('.animate-text-02A');
    this.slide_01.animateText02B = new SplitText('.animate-text-02B');
    this.slide_01.animateText02C = new SplitText('.animate-text-02C');
    this.slide_01.animateText02D = new SplitText('.animate-text-02D');

    // --------------------

    this.slide_01.animateText03A = new SplitText('.animate-text-03A');
    this.slide_01.animateText03B = new SplitText('.animate-text-03B');

    this.slide_01.welcomeTitleTimeline01A = new TimelineLite();
    this.slide_01.welcomeTitleTimeline01B = new TimelineLite();
    this.slide_01.welcomeTitleTimeline01C = new TimelineLite();

    this.slide_01.welcomeTitleTimeline02A = new TimelineLite();
    this.slide_01.welcomeTitleTimeline02B = new TimelineLite();
    this.slide_01.welcomeTitleTimeline02C = new TimelineLite();
    this.slide_01.welcomeTitleTimeline02D = new TimelineLite();

    this.slide_01.welcomeTitleTimeline03A = new TimelineLite();
    this.slide_01.welcomeTitleTimeline03B = new TimelineLite();

    this.slide_01.welcomeTitleTimeline01A.staggerFrom(this.slide_01.animateText01A.chars, 0.8, {
      scale: 0,
      visibility: 'hidden'
    }, 0.03);

    this.slide_01.welcomeTitleTimeline01B.staggerFrom(this.slide_01.animateText01B.chars, 1.2, {
      scale: 0,
      visibility: 'hidden'
    }, 0.04);

    this.slide_01.welcomeTitleTimeline01C.staggerFrom(this.slide_01.animateText01C.chars, 1.7, {
      scale: 0,
      visibility: 'hidden'
    }, 0.02);

    this.slide_01.welcomeTitleTimeline02A.staggerFrom(this.slide_01.animateText02A.chars, 0.9, {
      scale: 0,
      visibility: 'hidden'
    }, 0.02);

    this.slide_01.welcomeTitleTimeline02B.staggerFrom(this.slide_01.animateText02B.chars, 1.2, {
      scale: 0,
      visibility: 'hidden'
    }, 0.03);

    this.slide_01.welcomeTitleTimeline02C.staggerFrom(this.slide_01.animateText02C.chars, 1.4, {
      scale: 0,
      visibility: 'hidden'
    }, 0.02);

    this.slide_01.welcomeTitleTimeline02D.staggerFrom(this.slide_01.animateText02D.chars, 1.0, {
      scale: 0,
      visibility: 'hidden'
    }, 0.03);

    this.slide_01.welcomeTitleTimeline03A.staggerFrom(this.slide_01.animateText03A.chars, 0.9, {
      scale: 0,
      visibility: 'hidden'
    }, 0.02);

    this.slide_01.welcomeTitleTimeline03B.staggerFrom(this.slide_01.animateText03B.chars, 1.2, {
      scale: 0,
      visibility: 'hidden'
    }, 0.06);
  }

  ParallaxConstructor.prototype.slide_01_Destructor = function slide_01_Destructor() {

  }

  return ParallaxConstructor;
}
