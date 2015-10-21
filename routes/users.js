var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;
	
	router.get('/', function(req, res, next) {
		var user = req.user;
		if (!user) {
			res.redirect('/login');
		}
		else {
			res.redirect('/', {user: req.user});
		}
	});

	router.get('/logout', function(req, res) {
	    req.logout();
	    res.redirect('/');
	});


module.exports = router;