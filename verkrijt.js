var express = require('express');

var app = express();

app.use('/static_verkrijt', express.static(__dirname + '/public'));

app.get('/verkrijt', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8081);
