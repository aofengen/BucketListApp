const Auth = require('./controllers/auth.js');
const User = require('./models/user.js');

module.exports = function(app) {
	app.post('/signup', Auth.signup);
	//test stuff
	// app.get('/', function(req,res, next){
	// 	res.send("HELLO HOMEPAGE");
	// });

	// app.get('/signup', function(req,res, next){
	// 	res.send('Hey folks, Thanks for signing up!');
	// });
}