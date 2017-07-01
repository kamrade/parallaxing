var $ = require('jquery');

module.exports = function(output){
  console.log(output + " : this text is from console-debug module 04");
  $('.sub-title').text('We are glad to see you');
};
