const {
    promisify
} = require('util')
const figlet = promisify(require('figlet'))
const open = require('open')
const {
    clone
} = require('./download')
const spawn = async(...args) => {
    // log流对接 子进程对接主进程
    // 封装成promise风格的
    const { spawn } = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('close', () =>{
            resolve()
        })
    })
}
const clear = require('clear')
const chalk = require('chalk')
const { resolve } = require('path')
const log = content => console.log(chalk.red(content))
module.exports = async name => {
    // 打印一个欢迎页面
    clear()
    const data = await figlet('welcome xtl!!!')
    log(data)
    log('🚀🚀创建项目：' + name)
    // 下面是从githup上面拷贝下来的项目放在name文件夹下面
    await clone('github:su37josephxia/vue-template', name)
    //npm install
    log('安装依赖')
    // 自动安装依赖
    await spawn('npm', ['install'], {cwd: `./${name}`})
    log(
        chalk.green(
            `
            安装完成：
            to get start:
            ==============
            cd ${name}
            npm run server
            ==============
            `
        )
    )
    open('http://localhost: 8090')
    await spawn('npm', ['run','serve'], {cwd: `./${name}`})
}