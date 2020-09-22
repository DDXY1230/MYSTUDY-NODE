const Koa = require('koa')
const app = new Koa()
app.use((ctx, next) => {
    console.log('ctx', ctx)
    ctx.body = {
        name: '小田田在3000端口启动了一个服务'
    }
})
app.listen(3000, () => {
    console.log('server start at 3000')
})