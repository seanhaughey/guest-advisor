var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guestSchema = new Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	reviews: { type: Array, required: true },
	rating: { type: Number, required: true },
	address: {
		number: Number,
		street: String,
		city: String,
		state: String,
		zip_code: Number
		},
	phone: Number,
	rev_count: Number
})

module.exports = mongoose.model('Guest', guestSchema);