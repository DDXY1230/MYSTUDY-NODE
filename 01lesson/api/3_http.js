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
            }else {
                response.end(data)
            }
        })
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