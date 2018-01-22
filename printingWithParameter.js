function getAndPrintHTML (options) {
  var https = require('https');
    var responseBody = '';
    https.get(options, function(res) {
      res.on("data", function(chunk) {
        responseBody += chunk;
      });
      res.on("end", function() {
        console.log(responseBody);
      });

    });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);