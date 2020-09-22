// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.writeHead(200)
//     res.end('hi alice')
// })
// server.listen(3500, () => {
//     console.log('当前监听的端口时3500')
// })

// 自己封装
const KKB = require('./kkb')
const app = new KKB()

// app.use((req,res) => {
//     res.writeHead(200)
//     res.end('hi xyz')
// })
app.use(async (ctx, next) => {
    await next()
    ctx.body += 'ddd'
})
app.use(async (ctx, next) => {
    await next()
    ctx.body += 'aaa'
})
app.use(async (ctx, next) => {
    await next()
    ctx.body += 'bbb'
})
app.use(async (ctx) => {
    // await next()
    ctx.body = 'ccc'
})
app.listen(3000, () => {
    console.log('执行了自己封装的服务')
})