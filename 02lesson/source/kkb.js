const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')
class KKB {
    listen(...args) {
        const server = http.createServer((req, res) => {
            // 创建上下文
            const ctx = this.createContext(req,res)
            this.callback(ctx)
            // 响应的过程
            res.end(ctx.body)
        })
        server.listen(...args)
    }
    use(callback) {
        this.callback = callback
    }
    // 构建上下文
    createContext(req, res) {
        const ctx = Object.create(context)
        ctx.request = Object.create(request)
        ctx.response = Object.create(response)

        ctx.req = ctx.request.req = req
        ctx.res = ctx.response.res = res
        
        console.log('挂载参数后的ctx', ctx)
        return ctx
    }

}
module.exports = KKB