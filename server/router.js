const Auth = require('./controllers/auth.js');
const passportService = require('./services/passport.js');
const passport = require('passport');

let requireAuth = passport.authenticate('jwt', {session: false});

module.exports = function(app) {
	//test stuff
	app.get('/', requireAuth, function(req, res){
		res.send("HELLO HOMEPAGE");
		//res.send({hi:'there'});
	});

	app.post('/signup', Auth.signup);
	

	// app.get('/signup', function(req,res, next){
	// 	res.send('Hey folks, Thanks for signing up!');
	// });
}