var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// retrieve text from file
var contentBuffer = fs.readFileSync('index.html');
var content = contentBuffer.toString();

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
