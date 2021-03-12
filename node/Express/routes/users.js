var express = require('express');
var router = express.Router();

const {query} = require('../common/user.js');
const {selectUser} = require('../serve/userServe.js');



/* GET users listing. */
// 获取用户信息
router.get('/getUserInfo', async function(req, res, next) {
	
	// res.status(200).send({ error: "boo:(" });
	let sqldata = {
		username:"王五",
		password:'122344'
	}
	
	let sql = `SELECT * FROM user`;
	let userList = await selectUser(sql)
	
	res.status(200).json({code:0,data:userList,massage:'OK'})
  // res.send('获取用户信息');
});

// 创建
router.post('/createUser', function(req, res, next) {
  res.send('创建一个用户');
});

// 修改用户信息
router.post('/editUser', function(req, res, next) {
  res.send('修改用户信息');
});


module.exports = router;
