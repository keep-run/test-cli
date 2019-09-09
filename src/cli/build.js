import Webpack from 'webpack'
import path from 'path'
import utils from '../utils/index'

/*clean-webpack-plugin源码写的是 export { CleanWebpackPlugin } ,所以可以这两种方式引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
*/
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

/** html-webpack-plugin 源码中写的是  module.exports = HtmlWebpackPlugin; 直接输出一个函数，而不是一个对象,引入方式
 * import HtmlWebpackPlugin from 'html-webpack-plugin'
 * const HtmlWebpackPlugin = require('html-webpack-plugin');
*/
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default (args) => {
  const exitWitherror = (err) => {
    console.log('build with error ,process will exit')
    console.error(err)
    process.exit(1)
  }

  const { entry = './src/index.jsx' } = utils.getPackage(args.cwd).iron || {}
  const webpackConfig = {
    context: args.cwd,
    entry: entry,
    mode: 'production',
    output: {
      filename: "bundle.js",
      path: path.join(args.cwd, 'dist')
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title:'test-cli prod'
      })
    ],
    module: {
      rules: [
        {
          test: /\.jsx/,
          exclude: /(node_modules)/,  //对这个不做处理
          use: {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('@babel/preset-env'), require.resolve('@babel/preset-react')]    //在react环境下,也可以进行打包
            }
          }
        }
      ]
    }
  }
  const compiler = Webpack(webpackConfig)

  compiler.run((err, status) => {
    if (err) {
      exitWitherror(err)
      return
    }
  })

}