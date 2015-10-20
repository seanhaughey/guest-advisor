var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/authenticate', function(req, res, next) {
//     var email = User.email;
//     var password = User.password;

// 	passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login' });
// 	res.send(email)
// 	});

router.post('/authenticate', function(req, res, next) {
  console.log(1);
  passport.authenticate('local', function(err, user, info) {
  	console.log(2);
  	console.log(err);
  	console.log(user);
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }

    res.redirect('/')
  })(req, res, next);
});

module.exports = router;
