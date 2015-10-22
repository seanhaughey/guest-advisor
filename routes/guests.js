var express = require('express');
var router = express.Router();
var Guest = require('../models/guest');
var Review = require('../models/review');
var mongoose = require('mongoose');
var app = express();


router.get('/:id', function(req, res, next) {
  Guest.findOne({ _id:req.params.id }, " ", function(err, guests) {
    if (err) console.log(err);
    res.render('guest', {
      title: "Guest Page",
      guest: guests,
      user: req.user,
      // guest: guest.id
      });
    });
});


// router.get('/new', function(req, res, next) {
//   res.render('guest', { user: req.user });
// });

router.post('/', function(req, res, next) {
   var review = req.body.review;
   var rating = req.body.rating;
   var guest_id = req.body.guest_id;
   var user = req.user;

   console.log('Review: ' + req.body.review);
   console.log('Rating: ' + req.body.rating);
   console.log(guest_id);
   var newReview = Review({
     comment: review,
     ind_rating: rating,
     // user_ID: user.id,
     guest_id: guest_id
   });

   newReview.save(function(err) {
     if (err) console.log(err);

     res.redirect('/users'),{ user : req.user };
    });


});




app.get('/api/guests', function(req, res) {
   var last_name=  last_name;
   var first_name= first_name;
   var full_name = first_name + last_name;
   var regex = new RegExp(req.query["term"], 'i');
   var query = Guest.find({email: regex}, { 'email': 1 }).sort({"updated_at":-1}).sort({"created_at":-1}).limit(01);
        
      // Execute query in a callback and return users list
  query.exec(function(err, guests) {
      if (!err) {
         // Method to construct the json result set
         var result = buildResultSet(guests); 
         res.send(result, {
            'Content-Type': 'application/json'
         }, 200);
      } else {
         res.send(JSON.stringify(err), {
            'Content-Type': 'application/json'
         }, 404);
      }
   });
});

app.use('/', router);
// module.exports = app;
module.exports = router;

