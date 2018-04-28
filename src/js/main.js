import $ from 'jquery';

console.log(':: start');

let ParallaxConstructor = require('./parallax/constructor');
ParallaxConstructor = require('./parallax/helpers')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/transition')(ParallaxConstructor);

function Parallax() {
  let parallax = new ParallaxConstructor();
  return parallax;
}

function hidePreloader() {
  let $preloader = $('.preloader');
  $preloader.hide();
}

window.onload = () => {
  hidePreloader();
  window.prlx = Parallax();
}
