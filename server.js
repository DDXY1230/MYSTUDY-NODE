let http = require('http')
let serv = http.createServer(function(req, res) {
    console.log('有人进来了')
    res.writeHeader(200, {
        'content-type': 'text/html;charset="utf-8"'
    })
    res.write('这是正文')
    res.end()
}).listen(8888) // 监听8888端口
console.log('服务器开启成功')