var express = require('express');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8081);
// var http = require('http');
//
// var server = http.createServer();
//
// server.on('request', function(request, response){
//   response.writeHead(200);
//   response.write("Hello, this is dog.");
//   response.end();
// });
//
// server.listen(8081);
