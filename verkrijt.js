var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Verkrijt webcomic. Welcome.\n');
}).listen(8081, 'localhost');

console.log('Webcomic running at http://localhost:8081/');
