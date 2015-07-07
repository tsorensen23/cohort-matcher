var UserProfile = require('./userModel.js');
var UserProfileAfter = require('./userModelAfter.js');

module.exports = {
	//use getData function for admin to initiate matching, and to check if profile already exists, and for match
	getData: function(req,res) {
		UserProfile.find({}, function(err, data) {
			if(err) {
				return res.send(err);
			}
			res.send(data);
		});
	},

	getDataAfter: function(req,res) {
		UserProfileAfter.find({}, function(err, data) {
			if(err) {
				return res.send(err);
			}
			res.send(data);
		});
	},
	adminUpdateData: function(req, res) {
		UserProfile.update({_id:req.params.id}, {$set:{matchAvailable: "no"}});

	},
	postUserProfile: function(req, res) {
		UserProfile.create(req.body, function(err, newProfile) {
			if(err) {
				return res.send(err);
			}
			res.send(newProfile);
		});
	},
	postUserProfileAfter: function(req, res) {
		UserProfileAfter.create(req.body, function(err, newProfile) {
			if(err) {
				return res.send(err);
			}
			res.send(newProfile);
		});
	}
};