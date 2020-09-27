const {
    response
} = require("express");

const fs = require('fs')
const rs = fs.createReadStream('../../imgs/1.jpg') // 读取这个图片的流
const ws = fs.createWriteStream('../../imgs/1_1.jpg') // 把流写入到哪里
rs.pipe(ws) //读取写入对接起来，达到复制的目的，
//流的操作不占用系统内存，大量提高系统性能