import $ from 'jquery';

console.log(':: start');

let ParallaxConstructor = require('./parallax/constructor');
ParallaxConstructor = require('./parallax/_lifecycle')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/_event-handlers')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/_transition')(ParallaxConstructor);

window.onload = () => {

  $('.preloader').hide();

  window.prlx = new ParallaxConstructor();
  prlx.slide_01_Listener();
};
