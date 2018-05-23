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
        this.slide_01_Constructor();
        break;
      case 2:
        break;
      default:
        break;
    }

  }

  ParallaxConstructor.prototype.slide_01_Constructor = function slide_01_Constructor() {

    this.slide_01 = this.slide_01 || {};

    this.slide_01.welcomeTitle = new SplitText('.welcome-title');
    this.slide_01.welcomeTitleTimeline = new TimelineLite();

    this.slide_01.welcomeTitleTimeline.staggerFrom(this.slide_01.welcomeTitle.chars, 0.2, {
      scale: 0,
      visibility: 'hidden'
    }, 0.08);
  }

  ParallaxConstructor.prototype.slide_01_Destructor = function slide_01_Destructor() {
  }

  return ParallaxConstructor;
}
