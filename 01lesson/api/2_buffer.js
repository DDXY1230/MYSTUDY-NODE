// 缓冲区，就是为了处理二进制
const buf1 = Buffer.alloc(10) // 分配一个有10个字节的缓冲区
console.log(buf1)
//-------------------------------------------
const buf2 = Buffer.from('a')
console.log('buf2', buf2)
console.log('buf2', buf2.toString())
//--------------------------------------------
const buf3 = Buffer.from('你好')
console.log('buf3', buf3) // 一个中文有三个字节，在utf-8中
//--------------------------------------------
const buf4 = Buffer.concat([buf2, buf3]) // 在这里要用数组的形式传参
console.log('buf4', buf4)
//可以用于文件分包上传，到最后都上传完毕就concat打包成一个完成的文件
//----------------------------------------------