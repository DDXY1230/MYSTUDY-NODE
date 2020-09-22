const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./response')
class KKB {
    constructor() {
        this.middlewares = []
    }
    listen(...args) {
        const server = http.createServer(async (req, res) => {
            // 创建上下文
            const ctx = this.createContext(req, res)
            // this.callback(ctx)
            //中间件合成
            const fn = this.composeFn(this.middlewares)
            await fn(ctx)
            // 响应的过程
            res.end(ctx.body)
        })
        server.listen(...args)
    }
    use(middlewares) {
        // this.callback = callback
        this.middlewares.push(middlewares)
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
    composeFn(middlewares) {
        return function (ctx) {
            return dispatch(0)

            function dispatch(i) {
                let fn = middlewares[i]
                if (!fn) {
                    return Promise.resolve()
                }
                return Promise.resolve(
                    fn(ctx,function next() {
                        return dispatch(i + 1)
                    })
                )
            }
        }
    }
}
module.exports = KKB