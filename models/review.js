var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
	user_ID: { type: String, required: true },
	userName: {type: String },
	guestName: {type: String },
	guest_ID: { type: String, required: true },
	ind_rating: { type: String, required: true },
	comment: {type: String, required: true },
	created_at: { type: Date },
	updated_at: { type: Date }, 
	reviewed_at: { type: Date }
})

reviewSchema.pre('save', function (next){

	var now = new Date();
	this.updated_at = now;
	if ( !this.created_at ) {
		this.created_at = now;
	}
	next();
});

reviewSchema.pre('save', function (next){

	var now = new Date();

	if ( this.isModified('reviews')) {
		this.reviewed_at = now;
	}
	next();
});
var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;

