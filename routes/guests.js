var express = require('express');
var router = express.Router();
var Guest = require('../models/guest');
var Review = require('../models/review');
var mongoose = require('mongoose');
var app = express();


router.get('/:id', function(req, res, next) {
  res.render('guest', { user : req.user });
});


// router.get('/new', function(req, res, next) {
//   res.render('guest', { user: req.user });
// });

router.post('/', function(req, res, next) {
   console.log('Review: ' + req.body.review);
   console.log('Rating: ' + req.body.rating);
   // var name = req.body.name;
   // var email = req.body.email;
   var review = req.body.review;
   var rating = req.body.rating;
   var user = req.user;
   var newReview = Review({
     comment: review,
     ind_rating: rating,
     user_ID: user.id,
   });

   newReview.save(function(err) {
     if (err) console.log(err);

     res.render('guest', { user : req.user });
    });


});






router.get('/', function(req, res, next) {
  res.send('hey look guest page');
});

router.get('/:id', function(req, res, next) {
   Guest.findOne({ _id:req.params.id }, " ", function(err, guests) {
  if (err) console.log(err);

  // user.name
  // user.email
  // user.favorite 
res.render('guest', {
        title: "Guest Page"
    });
console.log(guests);
});
  
});

router.param('id', function (req, res, next, id) {
  console.log('CALLED ONLY ONCE');
  next();
})



app.use('/', router);
// module.exports = app;
module.exports = router;

