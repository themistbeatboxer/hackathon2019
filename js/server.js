'use strict';

const fs = require('fs');
const http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
<<<<<<< HEAD
var app     = express();
=======
var app = express();
>>>>>>> origin/master

fs.readFile('../db.json', (err, data) => {
    if (err) throw err;
    let acc = JSON.parse(data);
<<<<<<< HEAD
    console.log(acc);
=======
>>>>>>> origin/master
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/myaction', function(req, res) {
<<<<<<< HEAD
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
=======
  res.send('You sent the name "' + req.body.name + '".');
>>>>>>> origin/master
});