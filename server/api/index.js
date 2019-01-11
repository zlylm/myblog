const query = require('../db/index');//引入连接数据库文件

module.exports = {
    //查询所有分类
    getAllCategory:function(){
        return query(`select * from m_category`);
    }
}