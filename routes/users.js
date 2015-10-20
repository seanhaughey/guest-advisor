var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});

	router.post('/authenticate', function(req, res, next) {
	  console.log(1);
	  passport.authenticate('local', function(err, user, info) {
	  	console.log(2);
	  	console.log(err);
	  	console.log(user);
	    if (err) { return next(err); }
	    console.log('no error')
	    if (!user) { return res.redirect('/login'); }

	    res.redirect('/')
	  })(req, res, next);
	});

	router.post('/new', function(req, res, next) {
		var name = req.body.name;
		var email = req.body.username;
		var password = req.body.password;
		User.findOne({ 'email': req.body.email }, 'name email password', function (err, user) {
		
		if (user) {
			console.log("email already exists");
		}
		// console.log(likes);
		else {

			var newUser = User({
			name: name,
			email: email,
			password: password
			});

			newUser.save(function(err) {
				if (err) {
				console.log(err);
				}
				else {
				res.send('User created!');
				}
			});
		};
	});
});
module.exports = router;