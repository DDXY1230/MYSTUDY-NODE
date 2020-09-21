let fs = require('fs')
fs.open('./test/1.js','r+',function(err,fd){
    /**
     * 进行write操作以上模式必须是可写模式‘w'或者‘r+’
     * fs.write(fd,buffer,offset,
     * len,position,callback)
     * fd: 写入到的文件
     * buffer: 要被写入的数据
     * offset: buffer对象要进行写入的开始位置
     * len: 要写如的数据的长度
     * position: 写入到fd文件的哪个位置
     * callback: 回调函数
     */
    if(err) {
        console.log('打开文件失败')
    }else {
        console.log('打开文件成功，进行写入操作')
        let bf2 = Buffer('1234')
        console.log(bf2)
        // 将bf2往fd中写入
        // fs.write(fd,bf2,1,1,3,function(err,fd){
        //     if(err) {
        //         console.log('写入失败')
        //     }else {
        //         console.log('写入成功',fd)
        //     }
        // })
        // -------
        //也可以直接向文件中写入数据
        fs.write(fd, '889900','2','utf-8',function(err,res) {
            if(err){console.log('写入失败',err)}
            else {
                console.log('写入成功',res)
                fs.close(fd, function(){
                    //关闭当前的文件，
                    //关闭了如果要继续操作需要再次打开
                    // 不然不能继续进行操作了
                })
            }
        })
    }
})