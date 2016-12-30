var express = require('express');

var app = express();

app.use('/static_verkrijt', express.static(__dirname + '/public'));

var dirname = __dirname;

app.get('/', function(req, res) {
    res.sendFild(express.static(__dirname + '/public/index.html'));
    //res.sendFile(__dirname + '/public/index.html');
});

//app.listen(8081);

var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
  response.writeHead(200);
  response.write("Hello, this is dog, dirname: " + dirname);
  response.end();
});

server.listen(8081);
