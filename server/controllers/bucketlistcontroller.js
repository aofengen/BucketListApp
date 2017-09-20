const BucketList = require('../models/bucketlist.js');

exports.addBucketList = function(req, res, next){
	//for Postman user
	// let title = req.body.title;
	// let topic = req.body.topic;
	// let url = req.body.url;
	// let content = req.body.content;
	// let specificUser = req.user_id;

	let title = req.body.props.title;
	let topic = req.body.props.topic;
	let url = req.body.props.url;
	let content = req.body.props.content;
	let specificUser = req.user._id;

	let bucketList = new BucketList({
		title: title,
		topic: topic,
		url: url,
		content: content,
		specificUser: specificUser
	});

	bucketList.save(function(err){
		if (err) {return next(err);}
		res.json(bucketList);
	});
}