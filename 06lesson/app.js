const koa = require('koa')
const app = new koa()

//中间件
const session = require('koa-session')
const redisStore = require('koa-redis')
const redis = require('redis')
const redisClient = redis.createClient(6379,'localhost')
const wrapper = require('co-redis')
const client = wrapper(redisClient)
app.keys = ['some secret']

const SESS_CONFIG = {
    key: 'kkb:sess',
    maxAge: 8640000,
    httpOnly: true,
    signed: false,
    store: redisStore({client})
}

app.use(session(SESS_CONFIG, app))
app.use(async (ctx,next) => {
    const keys = await client.keys('*')
})
app.use(ctx => {
    if (ctx.path === '/favicon.ico') return
    // 获取
    let n = ctx.session.count || 0
    // 设置
    ctx.session.count = ++n
    ctx.body = '第' + n + '次访问'
})

app.listen(4000)