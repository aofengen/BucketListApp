const Auth = require('./controllers/auth.js');
const BucketList = require('./controllers/bucketlistcontroller');
const passportService = require('./services/passport.js');
const passport = require('passport');

let requireAuth = passport.authenticate('jwt', {session: false});
let requireSignin = passport.authenticate('local', {session: false});

module.exports = function(app) {
	//test stuff
	app.get('/', requireAuth, function(req, res){
		res.send({message:'hey'});
	});

	app.post('/signup', Auth.signup);
	app.post('/signin', requireSignin, Auth.signin);
	app.post('/newitem', requireAuth, BucketList.addBucketList);
}