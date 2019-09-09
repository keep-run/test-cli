import Webpack from 'webpack'
import webpackConfig from '../webpack/config.prod'
export const helper = 'test-cli build'
export default (args) => {
    const compiler = Webpack(webpackConfig(args))
    compiler.run((err)=>{
        if(err){
            console.log('build err',err)
            process.exit(1)
        }
    })
}