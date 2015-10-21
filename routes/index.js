var express = require('express');
var router = express.Router();
var User = require('../models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {user : req.user });
});

 router.get('/login', function(req, res, next) {
 	res.render('login', {user : req.user });
 });

router.get('/new_user', function(req, res, next) {
 	res.render('new_user', {user : req.user });
 });

router.post('/new', function(req, res) {
	    User.register(new User({ name: req.body.name, username : req.body.username }), req.body.password, function(err, user) {
	        if (err) {
	        	console.log(err.errors);
	        	throw err;
	            // return res.render('register', { user : user });
	        }

	        passport.authenticate('local')(req, res, function () {
	            res.redirect('/');
	        });
	    });
	});

	router.post('/authenticate', passport.authenticate('local'), function(req, res) {
	    res.redirect('/');
	});

	router.get('/logout', function(req, res) {
	    req.logout();
	    res.redirect('/new_user');
	});
 module.exports = router;