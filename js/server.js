'use strict';

const fs = require('fs');
const http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app     = express();

fs.readFile('../db.json', (err, data) => {
    if (err) throw err;
    let acc = JSON.parse(data);
    console.log(acc);
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/myaction', function(req, res) {
	let user = {
		password: req.body.p,
		type: req.body.d
	};
	let data = JSON.stringify(user);
  	fs.writeFile(req.body.e+".json", data, function(err) {
  		if (err) throw err;
  		console.log("new user added");
  	});
});

app.listen(8080, function() {
  console.log('Server running at http://127.0.0.1:8080/');
});