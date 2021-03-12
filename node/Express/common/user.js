
// var UserSql = {
//     insert : 'INSERT INTO user(id, username, password) VALUES(?,?,?) ',
//     query : 'SELECT * FROM user ',
//     getUserById: 'SELECT * FROM user WHERE uid = ? '
// };

const UserSql = (sqldata)=>{
	return {
		insert:`INSERT INTO user(id, username, password) VALUES(?,${sqldata.username},${sqldata.password})`,
		query:`SELECT * FROM user`,
		getUserById:`SELECT * FROM user WHERE id = ${sqldata.id}`,
		getUserByUserName:`SELECT * FROM user WHERE username = ${sqldata.username}`
	}
}

module.exports = UserSql;