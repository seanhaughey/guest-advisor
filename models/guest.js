var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guestSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	reviews: { type: Array, required: true },
	rating: { type: Number, required: true },
	created_at: { type: Date },
	updated_at: { type: Date }, 
	rev_count: Number
})

guestSchema.pre('save', function (next){

	now = new Date();
	this.updated_at = now;
	if ( !this.created_at ) {
		this.created_at = now;
	}
	next();
})

module.exports = mongoose.model('Guest', guestSchema);