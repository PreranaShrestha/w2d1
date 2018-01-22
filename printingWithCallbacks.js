var getHTML = require('./http-functions');
var printHTML = require('./printHTML');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);