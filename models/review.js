var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	user_ID: String,
	guest_ID: String,
	ind_rating: String,
	comment: String
})


var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

