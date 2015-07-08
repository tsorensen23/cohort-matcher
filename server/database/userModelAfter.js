var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchemaAfter = new Schema({
	name: {type: String},
	cohort: {type: String},
	SQ1: {type: String},
	SQ2: {type: String},
	SQ3: {type: String},
	SQ4: {type: String},
	SQ5: {type: String},
	SQ6: {type: String},
	SQ7: {type: String},
	matchAvailable: {type: String, default: null}
});

module.exports = mongoose.model('UserProfileAfter', userSchemaAfter);