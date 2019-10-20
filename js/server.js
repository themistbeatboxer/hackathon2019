'use strict';

const fs = require('fs');
const http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

fs.readFile('../db.json', (err, data) => {
    if (err) throw err;
    let acc = JSON.parse(data);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/myaction', function(req, res) {
  res.send('You sent the name "' + req.body.name + '".');
});