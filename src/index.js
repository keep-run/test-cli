
import optimist from 'optimist'  //该插件用于获取脚本的参数
import fs from 'fs-extra'
import path from 'path'
let argv = optimist.argv
let commands = argv._
let command
let clis = fs.readdirSync(path.resolve(__dirname, './cli/')).map(item => item.replace('.js', ''))   //__dirname和—__filename是node环境的全局变量
let cmd = clis.indexOf(commands[0]) !== -1 ? commands[0] : 'help'
command = require('./cli/' + cmd).default

argv.cwd = process.cwd()    //process.cwd():返回当前工作目录

console.log('cwd',process.cwd() )
command(argv)  