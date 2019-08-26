import chalk from 'chalk'
import Webpack from 'webpack'
import path from 'path'
import WebpackDevServer from 'webpack-dev-server'
import WebPackDevConfig from '../config/webpack.config.dev'
import Config from '../config'


export default (args) => {
    const pkgConfig = Config.getPackage(args.cwd)
    // const webpackConfig = Object.assign({}, pkgConfig['test-cli'], {
    //     context: path.join(args.cwd, 'src')
    // })
    // const port = pkgConfig['test-cli'].port||'8080'

    const webpackConfig = {
        context: args.cwd,
        entry: './src/index.js',
        mode:'development',
        output:{
            filename:"bundle.js"
        }
    }

    const devServer={
        contentBase:args.cwd,
        port:8080,
        host:'0.0.0.0',  
    }

    console.log('path', path.join(args.cwd,'src'))


    const compiler = Webpack(webpackConfig)


    const server = new WebpackDevServer(compiler, Object.assign(devServer,{ open: true, }))


    server.listen(8080, '127.0.0.1', () => {
        console.log(`console.log('Starting server on http://localhost:${8080}')`)
    })


    console.log('pkgConfig', webpackConfig)
}