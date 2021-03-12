

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'user'
});

function  query(sql, values) {
    console.log("db pool");
	return new Promise((resolve,reject)=>{
		pool.getConnection(function (err, connection) {
		    if(err)   throw reject(err);
		    console.log("get connection ");
		    //Use the connection
		    connection.query(sql, values,function (err, results, fields) {
		        console.log(JSON.stringify(results));
				resolve(results)
		        //每次查询都会 回调
		        // callback(err, results);
		        //只是释放链接，在缓冲池了，没有被销毁
		        // connection.release();
		        if(err) reject(error);
		    });
		
		});
	})
}

exports.query = query;