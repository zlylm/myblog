const Router = require('koa-router');
const router = new Router();
const api = require('../api/index');//引入api



router.get('/getCategory',async(ctx)=>{//查询分类
    await api.getAllCategory().then((res)=>{
        console.log(res);
        ctx.body = {
            code: 200,
            data: res
        }
    }).catch(err=>{
        ctx.body = {
            code: 201,
            data: err.toString()
        }
    })

    
})

module.exports= router;