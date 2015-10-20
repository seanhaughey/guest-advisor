var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GuestAdvisor' });
});

 router.get('/login', function(req, res, next) {
 	res.render('login', {title: 'GuestAdvisor' });
 });

router.get('/new_user', function(req, res, next) {
 	res.render('new_user', {title: 'GuestAdvisor' });
 });
 module.exports = router;