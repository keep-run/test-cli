import  chalk from 'chalk'
import pkg from '../../package.json'
export default()=>{
    console.log(chalk.green(`test-cli current version ${pkg.version}`))
}