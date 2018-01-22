function getHTML (options, callback) {

  var https = require('https');
    var responseBody = '';
    https.get(options, function(res) {
      res.on("data", function(chunk) {
        responseBody += chunk;
      });
      res.on("end", function() {
        callback(responseBody);
      });

    });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};
getHTML(requestOptions, printHTML);