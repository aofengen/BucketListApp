const User = require('../models/user.js');

exports.signup = function(req, res, next){
	let email = req.body.email.toLowerCase();
	let password = req.body.password;

	User.findOne({ email: email}, function(err, existingUser){
		if (err) {
			return next(err);
		}//handles search error

		if (existingUser) {
			return res.status(418).send("Email is in use");
		}//handles existing users

		let user = new User({
			email: email,
			password: password
		});
		user.save(function(err){
			if(err) {return next(err); }
			//Respond to request indicating the user was created
			res.json({success:true});
		});
	});
}