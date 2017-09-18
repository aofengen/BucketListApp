const passport = require('passport');
const User = require('../models/user.js');
const config = require('../config.js');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

let jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
};

//create jwt strategy
let jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
	//On payload we have sub property. Use the uer model, look through all the users and find user with the id
	User.findById(payload.sub, function(err, user){
		//In the fundById callback, we will get two arguments err and user. Err is going to be populated only if
		//search fails.
		if (err) {return done(err, false);}	
		//If we can find the user, pass it to done callback. They are authenticated.
		if (user) {
			done(null, user);
		} else {
			//if we cannot find the user with id, we are going to call done function without the user object.
			done(null, false);
		}
	});
});

passport.use(jwtLogin);