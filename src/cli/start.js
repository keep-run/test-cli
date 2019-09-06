import Webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from '../webpack/config.dev'
import utils from '../utils/index'

export const helper = 'iron start'

export default (args) => {

    const { port = 8080 } = utils.getPackage(args.cwd).testCli || {}
    const host = '0.0.0.0'
    const devServer = {
        contentBase: args.cwd,
        port,
        host,
        stats: {
            assets: false,
            builtAt: false,
            modules: false,
            source: false,
            version: false
        },
        open: true

    }
    const compiler = Webpack(webpackConfig(args))

    const server = new WebpackDevServer(compiler, devServer)

    server.listen(port, host, () => {
        console.log(`Starting server on http://localhost:${port}`)
    })
}