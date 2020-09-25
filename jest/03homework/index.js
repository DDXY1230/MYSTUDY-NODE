const fs = require('fs')
// 暗号，二分查找
function parser(path) {
    let bf = Buffer.alloc(100)
    // TODO: 错误的做法
    fs.open(path, 'r', function (err, fd) {
        fs.read(fd, bf, 0, 5, null, function (err) {
            if (err) {
                console.log('读取失败')
            } else {
                console.log(bf)
                return JSON.parse(bf.toString())
            }
        })
    })
}
module.exports = {
    parser
}