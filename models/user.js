var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	first_name: { type: String, required: true },
	last_name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password_hash: { type: String, required: true },
	address: {
		number: Number,
		street: String,
		city: String,
		state: String,
		zip_code: Number
		},
	phone: Number,
	position: String,
	employer: String,
	rev_count: Number
})

module.exports = mongoose.model('User', userSchema);