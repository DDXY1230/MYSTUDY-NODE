function updateTime() {
    setInterval(() => {
        this.time = new Date().toUTCString()
    }, 1000);
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
        //1. 以下是强缓存，10秒之内不会发生变化并且
        //浏览器显示： Status Code: 200 OK (from memory cache)
        //此方法不能保证用户端的时间是完全正确的，于是演变了更加有效的缓存方式，继续往下看
        res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())
        // Cache-control的优先级会比Expires的优先级高，以下是20秒更新一次
        res.setHeader('Cache-control', 'max-age=20')
        res.statusCode = 200
        res.end(content)
    } else if (url === '/favicon.ico') {
        res.end('')
    }
}).listen(3000, () => {
    console.log('http cache test run at ' + 3000)
})