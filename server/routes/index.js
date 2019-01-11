const Router = require('koa-router');
const router = new Router();

const category = require('./category.js');//分类部分

module.exports = (app) =>{
    router.use('/api/category',category.routes(),category.allowedMethods());

    //总路由表
    app.use(router.routes()).use(router.allowedMethods());

    
}