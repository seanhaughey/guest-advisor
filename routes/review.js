var express = require('express');
var router = express.Router();
var Review = require('../models/review');

router.get('/new', function(req, res, next) {
  res.render('review', { title: 'GuestAdvisor' });
});

module.exports = router;
