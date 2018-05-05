import $ from 'jquery';

console.log(':: start');

let ParallaxConstructor = require('./parallax/constructor');
ParallaxConstructor = require('./parallax/_helpers')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/_event-handlers')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/_transition')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/_lifecycle')(ParallaxConstructor);

window.onload = () => {
  $('.preloader').hide();
  window.prlx = new ParallaxConstructor();
};
