var express = require('express');
var router = express.Router();
var Guest = require('../models/guest');
var mongoose = require('mongoose');
var app = express();


router.get('/', function(req, res, next) {
  res.render('guest', { guest : req.guest });
});


// router.get('/new', function(req, res, next) {
//   res.render('guest', { user: req.user });
// });

router.post('/', function(req, res, next) {
   console.log(req.body)
   console.log('Name: ' + req.body.name);
   var name = req.body.name;
   var email = req.body.email;
   // var review = req.body.review;
   // var rating = req.body.rating;

   var newGuest = Guest({
     name: name,
     email: email
   });

   newGuest.save(function(err) {
     if (err) console.log(err);

     res.render('guest', { user : req.user });
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
        title: "Guest Page",
        guest: guests,
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

