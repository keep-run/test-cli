import chalk from 'chalk'
import Webpack from 'webpack'
import path from 'path'
import WebpackDevServer from 'webpack-dev-server'
import WebPackDevConfig from '../config/webpack.config.dev'
import Config from '../config'


export default (args) => {
  const pkgConfig = Config.getPackage(args.cwd)
  const port = pkgConfig.testCli.port || 8080
  // const port = 8080
  const webpackConfig = {
    context: args.cwd,
    entry: './src/index.jsx',
    mode: 'development',
    output: {
      filename: "bundle.js"
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
  
    module: {
      rules: [
        {
          test: /\.jsx/,
          exclude: /(node_modules)/,  //对这个不做处理
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('@babel/preset-env'),
              require.resolve('@babel/preset-react'),
              ],   //在react环境下,也可以进行打包
              plugins: [[
                require.resolve("@babel/plugin-proposal-decorators"),
                {
                  "legacy": true
                }
              ],
              [require.resolve("@babel/plugin-proposal-class-properties")]
              ]
            }
          }
        }
      ]
    },


  }

  const devServer = {
    contentBase: args.cwd,
    port,
    host: '0.0.0.0',
    stats: {
      assets: false,
      builtAt: false,
      modules: false,
      source:false,
      version:false
  }
  }

  const compiler = Webpack(webpackConfig)


  const server = new WebpackDevServer(compiler, Object.assign(devServer, { open: true, }))

  // console.log('server.app:', server.app)
  server.listen(port, '127.0.0.1', () => {
    console.log(`Starting server on http://localhost:${port}`)
  })
}