var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guestSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	// reviews: { type: Array, required: true },
	// rating: { type: Number, required: true },
	// rev_count: Number
})

module.exports = mongoose.model('Guest', guestSchema);