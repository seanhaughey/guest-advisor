var express = require('express');
var router = express.Router();
var Review = require('../models/review');
var Guest = require('../models/guest');



router.get('/', function(req, res, next) {
  res.render('index', {user: req.user});
});

router.get('/new', function(req, res, next) {
  res.render('review', {user: req.user});
});

router.post('/new', function(req, res, next) {
	var name = req.body.name;
	var email = req.body.email;
	var review = req.body.review;
	var rating = req.body.rating;
	var user = {user: req.user}
	var user_id = user.id
	var guest = Guest.findOne({ 'email': req.body.email });

	 
		var newReview = Review({
		  user_id: user_id,
		  guest_id: guest.id,
		  review: review,
		  rating: rating
		});

	   newReview.save(function(err) {
	     if (err) console.log(err);

	     res.redirect('/');
	    });
});


module.exports = router;
