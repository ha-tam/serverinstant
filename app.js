#!/usr/bin/env node
var express 	= require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');

var config = require('./config');
var port = config.ServerPort || 3003;

// var mongoose    = require('mongoose');
// mongoose.connect(config.database);

app.set('superSecret', config.secret);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.post('/test', function(req, res) {
	console.log("testTest");
	res.json({
		type: false,
		data: "COUCOU!"
	});
});

process.on('uncaughtException', function(err) {
	console.log(err);
});

app.listen(port);
console.log('Server Listen at diclah.com:' + port);