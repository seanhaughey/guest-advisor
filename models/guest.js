var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guestSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	rev_count: Number
})

module.exports = mongoose.model('Guest', guestSchema);