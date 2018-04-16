console.log(':: start');

let ParallaxConstructor = require('./parallax/constructor');
ParallaxConstructor = require('./parallax/transition')(ParallaxConstructor);

function Parallax() {
  let parallax = new ParallaxConstructor();
  return parallax;
}

function hidePreloader() {
  let preloader = document.querySelector('.preloader');
  preloader.style.display = 'none';
}

window.onload = () => {
  hidePreloader();
  window.prlx = Parallax();
}
