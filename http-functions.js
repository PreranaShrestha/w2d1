module.exports = function getHTML (options, callback) {
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
};