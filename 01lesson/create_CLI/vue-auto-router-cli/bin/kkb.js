#!/usr/bin/env node

console.log('上面这行注释很重要，不是一般的注释，指定环境是node')

const program = require('commander')
program.version(require('../package.json').version)
//kkb init abc
program.command('init <name>')
.description('init project')
// .action(name => {
//     // 定制逻辑写这里面
//     console.log('init ' + name)
// })
.action(require('../lib/init'))

program.command('refresh')
.description('refresh routers...')
.action(require('../lib/refresh'))
// process 描述执行中的主要进程，argv 执行中的所有参数
program.parse(process.argv)