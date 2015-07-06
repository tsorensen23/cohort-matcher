var UserProfile = require('./userModel.js');

module.exports = {
	//use getData function for admin to initiate matching, and to check if profile already exists, and for match
	getData: function(req,res) {
		UserProfile.find({}, function(err, data) {
			if(err) {
				return res.send(err);
			}
			res.send(data);
			console.log(data, "from user controller");
		});
	},
	adminUpdateData: function(req, res) {
		userprofile.find({req.params.id}, function(err, data) {
			if(err) {
				return res.send(err);
			}

		}).update({req.body});
	},
	postUserProfile: function(req, res) {
		console.log("userprofile post");
		UserProfile.create(req.body, function(err, newProfile) {
			if(err) {
				console.log(err, "string");
				return res.send(err);
			}
			res.send(newProfile);
		});
	}
};