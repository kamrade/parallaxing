(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./module":2}],2:[function(require,module,exports){
module.exports = {
  pi: 3.14,
  letter: "Letter"
};
},{}]},{},[1]);
