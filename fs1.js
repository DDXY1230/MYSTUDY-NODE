let fs = require('fs')
// console.log(fs)
// console.log(111)
//有回调函数的是异步处理
fs.open('./test/1.js', 'r', (err, fd) => {
    if (err) {
        console.log('文件打开出错')
    } else {
        console.log(fd)
    }
})
fs.open('./test/1.js', 'r', function (err, fd) {
    console.log(fd) // fd被打开文件的标识
})
// 以下同步处理方式
let fd1 = fs.openSync('./test/1.js', 'r')
console.log(fd1)
//读取文件内容
fs.open('./test/1.js', 'r', function (err, fd) {
    if (err) {
        console.log('文件读取失败')
    } else {
        // 读取文件的方式
        /**
         * fs.read(fd,buffer,offset,
         *         length,position,callback)
         * fd:通过open方式成功打开一个文件所
         * 返回的编号
         * buffer: buffer对象
         * offset: 读取的数据放在buffer哪个位置
         * length: 读取的长度
         * position: 从fd的哪个位置开始读取
         * callback:回调函数
         */
        let bf1 = Buffer.alloc(10)
        console.log('随机产生的bf都是00',bf1)
        // 将fd的数据往bf中读取
        fs.read(fd, bf1, 1, 4, 2, function (err,len,newbf) {
            if (err) {
                console.log('读取出错', err)
            } else {
                console.log('读取成功', bf1)
                console.log(len)// 读取的长度
                console.log(newbf)
                // bf1 和 newbf是同一个东西
            }
        })
    }
})
