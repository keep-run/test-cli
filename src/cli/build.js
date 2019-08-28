import Webpack from 'webpack'
import path from 'path'
export default(args)=>{
    console.log('build')
    console.log('path',path.join(args.cwd,'dist'))
    const exitWitherror = (err) => {
        console.log('build with error ,process will exit')
        console.error(err)
        process.exit(1)
      }
    const webpackConfig = {
        context: args.cwd,
        entry: './src/index.jsx',
        mode:'production',
        output:{
            filename:"bundle.js",
            path:path.join(args.cwd,'dist')
        },
        resolve:{
            extensions:['.js','.jsx']
        },
        module: {
            rules: [
              {
                test: /\.jsx/,
                exclude: /(node_modules)/,  //对这个不做处理
                use: {
                  loader: require.resolve('babel-loader'),
                  options: {
                    presets: [require.resolve('@babel/preset-env'),require.resolve('@babel/preset-react')]    //在react环境下,也可以进行打包
                  }
                }
              }
            ]
          }
    }
  const compiler= Webpack(webpackConfig)

  compiler.run((err,status)=>{
    if (err) {
        exitWitherror(err)
        return
      }
  })
  
}