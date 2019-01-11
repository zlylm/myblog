const Koa = require('koa');
const app = new Koa();
const routes = require('./routes/index');//引入路由表
const bodyParser = require('koa-bodyparser');//用来解析前端发送过来的参数
const cors = require('koa2-cors');//解决跨域

app.use(cors());
app.use(bodyParser());

routes(app);

app.listen(3000,()=>{
    console.log("服务器开启成功");
})