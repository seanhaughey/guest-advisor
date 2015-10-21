var mongoose = require('mongoose');
var passport = require('passport');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	password: String,

	rev_count: Number
})

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);