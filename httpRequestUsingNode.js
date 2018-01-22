function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var https = require('https');
  var fs = require('fs');
  https.get(requestOptions, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      console.log(data + '\n');
    });


    res.on('end', function() {
      console.log('Response steam complete');
    });
  });


}
getAndPrintHTMLChunks();