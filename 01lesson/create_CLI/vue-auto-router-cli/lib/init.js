const {
    promisify
} = require('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.red(content))
module.exports = async name => {
    // 打印一个欢迎页面
    clear()
    const data = await figlet('welcome xtl!!!')
    log(data)
}