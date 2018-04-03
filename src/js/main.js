console.log(':: start');

let ParallaxConstructor = require('./parallax/constructor');
ParallaxConstructor = require('./parallax/getStep')(ParallaxConstructor);
ParallaxConstructor = require('./parallax/transition')(ParallaxConstructor);

function Parallax() {
  let parallax = new ParallaxConstructor();
  parallax.getStep();
  return parallax;
}

function hidePreloader() {
  let preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
}

window.onload = () => {
  hidePreloader();
  Parallax();
}
