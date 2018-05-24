import $ from 'jquery';
import { TweenLite, TimelineLite } from 'gsap';


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

  ParallaxConstructor.prototype.slide_01_Listener = function slide_01_Listener() {

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
