const http = require('http')

console.log('服务开启了')
const session = {}
http.createServer((req, res) => {
    const sessionKey = 'sid'
    if (req.url === 'favicon.ico') {
        return
    } else {
        const cookie = req.headers.cookie
        if (cookie && cookie.indexOf(sessionKey) > -1) {
            // 存在
            // console.log('Come Back')
            res.end('Come Back111')
            // sid = 123321;bdad = dadf123
            const pattern = new RegExp(`${sessionKey}=([^;]+);?\s*`)
            const sid = pattern.exec(cookie)[1]
            console.log('sid', sid, session[sid])
        } else {
            // 首次登陆  uuid 最好
            const sid = (Math.random() * 9000).toFixed(2)
            res.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
            session[sid] = {
                name: 'laowang'
            }
            res.end('hello cookie')
        }
    }
}).listen(8880)