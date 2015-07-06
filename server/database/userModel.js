var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {type: String},
	cohort: {type: String},
	SQ1: {type: String},
	SQ2: {type: String},
	SQ3: {type: String},
	matchAvailable: {type: String, default: null}
});

module.exports = mongoose.model('UserProfile', userSchema);