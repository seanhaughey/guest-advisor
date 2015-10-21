var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;
	
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});

	// Existing User Authentication
	// router.post('/authenticate', function(req, res, next) {
	//   passport.authenticate('local', function(err, user, info) {
	//     if (err) { return next(err); }
	 
	//     if (!user) { return res.redirect('/login'); }
	//     res.redirect('/');
	//   })(req, res, next);
	// });

	// New User  Creation
	// router.post('/new', function(req, res) {
	//     User.register(new User({ name: req.body.name, username : req.body.username }), req.body.password, function(err, user) {
	//         if (err) {
	//         	console.log(err.errors);
	//         	throw err;
	//             // return res.render('register', { user : user });
	//         }

	//         passport.authenticate('local')(req, res, function () {
	//             res.redirect('/');
	//         });
	//     });
	// });

	router.post('/authenticate', passport.authenticate('local'), function(req, res) {
	    res.redirect('/');
	});

	router.get('/logout', function(req, res) {
	    req.logout();
	    res.redirect('/');
	});

	// router.post('/new', function(req, res, next) {
	// 	var name = req.body.name;
	// 	var email = req.body.username;
	// 	var password = req.body.password;

	// 	User.findOne({ 'email': req.body.email }, 'name email password', function (err, user) {
		
	// 	if (user) {
	// 		res.send("email already exists");
	// 		redirect('/')
	// 	}
	// 	// console.log(likes);
	// 	else {
	// 		var newUser = User({
	// 		name: name,
	// 		email: email,
	// 		password: bcrypt.hashSync(password, 8)
	// 		});

	// 		newUser.save(function(err) {
	// 			if (err) {
	// 			res.redirect('/')
	// 			}
	// 			else {
	// 			res.redirect('/');
	// 			}
	// 		});
	// 	};
	// });

module.exports = router;