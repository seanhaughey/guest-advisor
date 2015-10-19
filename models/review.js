var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	user_ID: { type: String, required: true },
	guest_ID: { type: String, required: true },
	ind_rating: { type: String, required: true },
	comment: {type: String, required: true }
})

module.exports = mongoose.model('Review', reviewSchema);