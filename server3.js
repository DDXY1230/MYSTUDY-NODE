let http = require('http')
let fs = require('fs')
let io = require('socket.io')

let documentRoot = '/Users/mac/Desktop/node学习笔记/test/example2.html' // 这里是先设置跟路径
console.log('服务开启了')

let httpServer = http.createServer(function (req, res) {
    // console.log(req)
    let url = req.url
    // let file = documentRoot + url // 绝对路径的地址，然后再找到文件
    let file = documentRoot // 绝对路径的地址，然后再找到文件
    fs.readFile(file, function (err, data) {
        if (err) {
            console.log('读取文件出错了')
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            })
            res.write('<h1>你要找的页面被牛吃了</h1>')
            res.end()
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset="utf-8"'
            })
            res.write(data)
            res.end()
        }

    })
}).listen(8880)

let socket = io.listen(httpServer)
socket.sockets.on('connection', function (socket) {
    console.log('有人通过socket进来了')
    socket.emit('hello', '欢迎')
    socket.on('hellotoo', function(data) {
        console.log(data)
    })
    socket.broadcast.emit('a') //广播
})