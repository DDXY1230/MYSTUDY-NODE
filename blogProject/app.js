/**
 * 应用程序的启动文件（入口文件）
 */
// 加载express模块
let express = require('express')

// 加载模版，处理模版
let swig = require('swig')
// 加载数据库模块
let mongoose = require('mongoose')
// 创建app应用 这里等同于Nodejs中的Http.createServer()
let app = express()
// 设置静态文件托管,当用户访问的url以/public开始，
// 直接返回对应的__dirname + '/public'目录下的文件
app.use('/public', express.static(__dirname + '/public'))
// 配置应用模版
// 定义当前所用的模版引擎
// 第一个参数： 模版引擎的名称， 同时也是模版文件的后缀名， 
// 第二个参数： 表示用于解析处理模版内容的方法
app.engine('html', swig.renderFile)

// 设置模版文件存放的目录， 
// 第一个参数：必须是views， 
// 第二个参数：是目录
app.set('views', './views')

// 注册所使用的模版引擎， 第一个参数必须是view engine，
// 第二个参数和上面的app.engine这个方法中定义的模版引擎的名字是一致的
app.set('view engine', 'html')
// 在开发过程中，需要取消模版缓存
swig.setDefaults({
    cache: false
})
// 以下划分模块进行开发
app.use('/admin', require('./routers/admin'))
app.use('/api', require('./routers/api'))
app.use('/', require('./routers/main'))

/**
 * 首页
 */
// app.get('/', function (req, res, next) {
//     // res.writeHeader(200, {
//     //     'content-type': 'text/html;charset="utf-8"'
//     // })
//     // res.writeHead(200, {
//     //     'content-type': 'text/html;charset="utf-8"'
//     // })

//     // res.end('<h1>欢迎光临我的博客!!!</h1>')

//     //---注意： 用下面的res.render(),那么上面的res.writeHead()不需要写了


//     // 读取views目录下的指定文件，解析并且返回给客户端 ,
//     // 第一个参数：默认找到views的index.html
//     // 第二个参数：传递给模版所需要使用的数据
//     res.render('index.html') 
// })
// TODO：以下测试未通过，明明body设置成背景色为红色，莫有反应
// app.get('/main.css', function (req, res, next) {
//     res.setHeader('content-type', 'text/css')
//     // res.writeHeader(200, {
//     //     'content-type': 'text/css'
//     // })
//     res.statusCode = 304
//     res.send('body {background:red}')
// })
// 连结数据库
mongoose.connect()
// 监听http请求
app.listen(8081)