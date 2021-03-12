
const {query} = require('../mysql/index.js');



const selectUser = (sql)=>{
	return new Promise((resolve,reject)=>{
		query(sql, '').then((res)=>{
			console.log('查询的结果==',res)
			resolve(res)
		}).catch((err)=>{
			reject(err)
		})
	})
	
} 

module.exports = {
	selectUser : selectUser
}
