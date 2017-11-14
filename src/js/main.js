// Libraries

let $ = require('jquery');
window.$ = $;
window.jquery = $;
window.jQuery = $;

// let Tether = require('../../node_modules/tether/dist/js/tether');
// window.Tether = Tether;
// require('../../node_modules/bootstrap/dist/js/bootstrap');
// let Handlebars = require('handlebars');

let simpleArray = [1,2,3];
let newSimpleArray = [ ...simpleArray, 4, 5 ];
let img = () => ({ ret: 42 });
let importedModule = require('./module');
