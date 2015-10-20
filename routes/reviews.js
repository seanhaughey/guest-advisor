var express = require('express');
var router = express.Router();
var Review = require('../models/review');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'GuestAdvisor' });
});

// router.get('/new', function(req, res, next) {
//   res.render('review', { title: 'GuestAdvisor' });
// });

// router.post('/new', function(req, res, next) {
// 	console.log(req.body)
// 	console.log('Name: ' + req.body.name);
// 	console.log('Rating: ' + req.body.rating);
// 	var name = req.body.name;
// 	var email = req.body.email;
// 	var review = req.body.review;
// 	var rating = req.body.rating;
// 	var newGuest = Guest({
// 	  name: name,
// 	  email: email,
// 	  review: review,
// 	  rating: rating
// 	});

//    newGuest.save(function(err) {
//      if (err) console.log(err);

//      res.send('New guest created!');
//     });


//     // res.end();
// });


module.exports = router;
