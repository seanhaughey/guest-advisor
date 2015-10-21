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

// GET existin user login form
router.get('/login', function(req, res, next) {
 	res.render('login', {user : req.user });
});

// GET new user form
router.get('/new_user', function(req, res, next) {
 	res.render('new_user', {user : req.user });
});

// POST a new user to the db
router.post('/new', function(req, res) {
    User.register(new User({ name: req.body.name, username : req.body.username }), req.body.password, function(err, user) {
        if (err) {
        	console.log(err.errors);
        	throw err;
            // return res.render('register', { user : user });
        }

        // Authenticate the new user and redirect to index
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

// Authenticate the existing user and redirect to index
router.post('/authenticate', passport.authenticate('local'), function(req, res) {
    var user = req.user;
    res.redirect('/users/?=' + user.id);
});

// Log out the current user and redirect to index
router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/new_user');
});

 module.exports = router;