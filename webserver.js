var express = require('express');
var app = express();

var redirectBaseUrl = process.env.REDIRECT_BASE_URL;
if (!redirectBaseUrl) {
  console.log("ERROR missing environment var REDIRECT_BASE_URL");
  process.exit(1);
}

console.log("redirecting to " + redirectBaseUrl);

app.get('*', function(req, res) {
  return res.redirect(301, redirectBaseUrl + req.originalUrl);
});

var serverPort = process.env.PORT || 5000;
app.listen(serverPort);
console.log("app listening on port " + serverPort);
