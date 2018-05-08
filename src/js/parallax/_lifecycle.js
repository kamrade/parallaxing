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

    // this.slide_01.welcomeText = new SplitText('.welcome-text');
    // this.slide_01.welcomeTextTimeline = new TimelineLite();
    //
    // let $chars = $(this.slide_01.welcomeText.chars);
    // $chars.sort( () => 0.5 * Math.random() );
    //
    // $chars.each( (index, el) => {
    //   this.slide_01.welcomeTextTimeline.from($(el), 0.005, {
    //     visibility: 'hidden'
    //   }, index * 0.005);
    // });

    // let $welcomeTitle = $('.welcome-title');
    // let self = this;
    // this.welcomeText = this.welcomeText || $welcomeTitle.text();
    // $welcomeTitle.text('');
    // let demo = { textLength: 0 };
    // let tween = TweenLite.to(demo, 1.5, {
    //   textLength: this.welcomeText.length,
    //   onUpdate: showScore
    // });
    // function showScore() {
    //   $welcomeTitle.text(self.welcomeText.substr( 0, demo.textLength ));
    // }
  }

  ParallaxConstructor.prototype.slide_01_Destructor = function slide_01_Destructor() {
  }

  return ParallaxConstructor;
}
