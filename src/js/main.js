import $ from 'jquery';

console.log(':: start');

let ParallaxConstructor = require('./parallax/constructor');
ParallaxConstructor = require('./parallax/helpers')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/_event-handlers')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/transition')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/lifecycle')(ParallaxConstructor);

window.onload = () => {
  $('.preloader').hide();
  window.prlx = new ParallaxConstructor();
};
