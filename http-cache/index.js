function updateTime() {
    this.timer = this.timer || setInterval(() => {
        this.time = new Date().toUTCString()
    }, 4000);
    return this.time
}
const http = require('http')
http.createServer((req, res) => {
    const {
        url
    } = req
    if (url === '/') {
        res.end(`
        <html>
        html update time: ${updateTime()}
        <script src="main.js"></script>
        </html>

        `)
    } else if (url === '/main.js') {
        const content = `document.write('<br>jjss update time: ${updateTime()}hhhh')`
        // 强缓存
        //1. 以下是强缓存，10秒之内不会发生变化并且
        //浏览器显示： Status Code: 200 OK (from memory cache)
        //此方法不能保证用户端的时间是完全正确的，于是演变了更加有效的缓存方式，继续往下看
        // res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())
        //2. Cache-control的优先级会比Expires的优先级高，以下是20秒更新一次
        // res.setHeader('Cache-control', 'max-age=20')
        //---------------------------------------
        // 协商缓存 1
        // res.setHeader('Cache-Control', 'no-cache') // 禁止强缓存的操作
        // res.setHeader('last-modified', new Date().toUTCString())
        // if(new Date(req.headers['if-modified-since']).getTime() + 5*1000 > Date.now()) {
        //     //还没有过期
        //     console.log('协商缓存生效中。。。')
        //     res.end()
        //     return
        // }
        //-------------------------------------------
        // 协商缓存 2
        res.setHeader('Cache-Control', 'no-cache') // 禁止强缓存的操作
        const crypto = require('crypto') // 在nodejs中用这个包进行加密
        const hash = crypto.createHash('sha1').update(content).digest('hex') // 二进制表象为16进制
        res.setHeader('Etag', hash)
        if (req.headers['if-none-match'] === hash) {
            // 缓存生效中。。。
            console.log('缓存生效中')
            res.statusCode = 304
            res.end()
            return
        }else {
            console.log('刷新')
        }
        res.statusCode = 200
        res.end(content)
    } else if (url === '/favicon.ico') {
        res.end('')
    }
}).listen(3000, () => {
    console.log('http cache test run at ' + 3000)
})