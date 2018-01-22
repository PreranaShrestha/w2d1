function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var https = require('https');
  var responseBody = '';
  https.get(requestOptions, function(res) {
    res.on("data", function(chunk) {
      responseBody += chunk;
    });
    res.on("end", function() {
      console.log(responseBody);
    });

  });

}
getAndPrintHTML();