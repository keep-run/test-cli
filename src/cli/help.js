import  chalk from 'chalk'
import pkg from '../../package.json'
import {helper as initHelp} from './init'
export default()=>{
    console.log(chalk.green(`test-cli current version ${pkg.version}`))
    const help=[initHelp]
    console.log(chalk.green(help.join('\n')))
}