var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('req==')
	
	res.json({code:0,data:{nodes:[1,23,44]},msg:'请求成功'})
	// res.render('index', { title: 'Express' });
});

module.exports = router;
