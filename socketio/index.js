let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})
io.on('connection', function (socket) {
    console.log('a user connected')
    socket.on('chat message', function (msg) {
        console.log('chat message1', msg)
        io.emit('chat message', msg)
    })
    socket.on('disconnect', function () {
        console.log('连结中断')
    })
})
http.listen(3000, () => {
    console.log('listen on 3000')
})