const originRequest = require('request')
const iconv = require('iconv-lite')
const cheerio = require('cheerio') // 后端的jquery

function request(url, callback) {
    const option = {
        encoding: null
    }
    originRequest(url, option, callback)
}

for (let i = 10553; i < 100564; i++) {
    const url = `https://www.dy2018.com/i/${i}.html`
    request(url, function (err, res, body) {
        console.log('body:' + body)
        const html = iconv.decode(body, 'gb2312')
        console.log('转码后的数据', html)
        const $ = cheerio.load(html)
        console.log('$$==>',$('.title_all h1').text())
    })
}