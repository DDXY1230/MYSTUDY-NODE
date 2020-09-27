const fs = require('fs')
const http = require('http')
const server = http.createServer((request, response) => {
    // console.log('this is a req', getPrototypeChain(request))
    // console.log('this is a res', getPrototypeChain(response))
    // response.end('success!')
    const {url, method} = request
    if(url === '/' && method === 'GET') {
        fs.readFile('./1.js', (err, data) => {
            if(err) {
                console.log('读取文件失败')
                response.writeHead(500, {'Content-Type': 'text/plain;charset=utf-8'})
                response.end('500 服务器错误 哈哈')
            }else {
                response.statusCode = 200
                response.setHeader('Content-Type','text/html')
                response.end(data)
            }
        })
    }
    else if(url === '/users' && method === 'GET'){
        response.writeHead(200, {'Content-Type': 'application/json'})
        // response.end返回的必须是一个字符串，所以在这里要用JSON.stringify()
        response.end(JSON.stringify({name: 'tom',age: 18}))
    }    
    else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html')
        response.end('404 nopage')
    }
})
server.listen(3000)
// 打印原型链
function getPrototypeChain(obj) {
    const protoChain = []
    while (obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}