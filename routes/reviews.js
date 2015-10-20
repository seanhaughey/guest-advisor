var express = require('express');
var router = express.Router();
var Review = require('../models/review');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'GuestAdvisor' });
});

router.get('/new', function(req, res, next) {
  res.render('review', { title: 'GuestAdvisor' });
});

router.post('/new', function(req, res, next) {
	console.log(req.body)
    console.log('Name: ' + req.body.name);
    console.log('Rating: ' + req.body.rating);

    res.send('Review created');
});

module.exports = router;
