var express = require('express');
var app = express();
var path = require('path');
var db = require('./db.js');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/html/index.html'));
});

app.listen(8080);