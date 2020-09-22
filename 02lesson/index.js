const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    console.log('下一个执行完了')
    const end = Date.now()
    // console.log('start', start)
    console.log('请求耗时：', end - start)
})


app.use((ctx, next) => {
    console.log('ctx===》', ctx)
    console.log('开始执行了啊')
    const expire = Date.now() + 100
    while (Date.now() < expire) {}//这里时同步，需要执行完了才会进行下去
    ctx.body = {
        name: '小田田在3000端口启动了一个服务'
    }
    console.log('ctx==>2', ctx)
})
app.listen(3000, () => {
    console.log('server start at 3000')
})