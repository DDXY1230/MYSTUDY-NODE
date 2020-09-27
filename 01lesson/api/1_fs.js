// const fs = require('fs')
// const {
//     promisify
// } = require('util')
// // 同步读取
// const data = fs.readFileSync('./1.js')
// console.log('同步读取data=>', data.toString())
// // 异步读取
// fs.readFile('./1.js', (err, data) => {
//     if (err) {
//         console.log('读取出错')
//         throw err
//     }
//     console.log('异步读取data=>', data.toString())
// })

//---------------------------------------------------
//执行以下匿名函数，上面的代码要注释，否则报错
(async () => {
    const fs = require('fs')
    const {
        promisify
    } = require('util')
    const readFile = promisify(fs.readFile)
    const data = await readFile('./1.js')
    console.log('promisify data=> ', data.toString())
})()