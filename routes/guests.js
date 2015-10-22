var express = require('express');
var router = express.Router();
var Guest = require('../models/guest');
var Review = require('../models/review');
var mongoose = require('mongoose');
var app = express();


router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var guestName = req.params.name;
  Guest.findOne({ _id:req.params.id }, " ", function(err, guests) {
    if (err) console.log(err);
    res.render('guest', {
      title: "Guest Page",
      guest: guests,
      user: req.user,
      guestID : id, 
      guestName: guests.name });
    });
});

router.post('/:id', function(req, res, next) {

  console.log('Review: ' + req.body.review);
  console.log('Rating: ' + req.body.rating);
  var review = req.body.review;
  var rating = req.body.rating;
  var guestName = req.body.guest_name;
  var user = req.user;
  console.log('ID: ' + req.params.id);

   var newReview = Review({
     comment: review,
     ind_rating: rating,
     user_ID: user.id,
     userName: user.name,
     guestName: guestName,
     guest_ID: req.params.id
   });

   newReview.save(function(err) {
     if (err) console.log(err);

     res.redirect('/users');
    });


});





app.use('/', router);
// module.exports = app;
module.exports = router;

