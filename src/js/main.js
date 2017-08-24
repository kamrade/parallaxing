// Libraries

// let $ = require('jquery');
// window.$ = $;
// window.jquery = $;
// window.jQuery = $;

// let Tether = require('../../node_modules/tether/dist/js/tether');
// window.Tether = Tether;
// require('../../node_modules/bootstrap/dist/js/bootstrap');
// let Handlebars = require('handlebars');

console.log("Basic Project");

let img = () => {
  return 42;
};
console.log(img());

let importedModule = require('./module');
console.dir( importedModule );