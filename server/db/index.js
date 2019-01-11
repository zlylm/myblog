const mysql = require('mysql');

const POOL = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ty123456',
    database: 'myblog'
})

module.exports = (sql,values)=>{
    return new Promise((resolve,reject)=>{
        //建立连接池
        POOL.getConnection((err,connection)=>{
            if (err) {
                resolve(err);
            }else{
                //执行数据库操作 增删改查等
                connection.query(sql,values,(err,data)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(data);
                    }
                    connection.release();//释放
                })
            }
        })
    })
}