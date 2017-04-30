import express from 'express';
import path from 'path';

import db from './db';

var app = express();

app.get('/', function(req, res) {
    res.sendFile('./html/index.html');
});

app.listen(8080);