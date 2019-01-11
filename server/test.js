const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = {
        name:'兔子先生'
    }
})
app.listen(3000);