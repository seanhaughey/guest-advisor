var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guestSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	rev_count: Number

})

guestSchema.pre('save', function (next){

	var now = new Date();
	this.updated_at = now;
	if ( !this.created_at ) {
		this.created_at = now;
	}
	next();
});

guestSchema.pre('save', function (next){

	var now = new Date();

	if ( this.isModified('reviews')) {
		this.reviewed_at = now;
	}
	next();
});

module.exports = mongoose.model('Guest', guestSchema);