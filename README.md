# test-cli
动手写自己的第一个脚手架

# 各插件的作用
- `babel-register`:这个插件会改写`require`指令，引入之后，再使用require(filePath)时，会对引入的文件先转码，而不用手动转码了。
- `optimist`: 处理node指令中携带的参数。会已对象的形式获取。
- `fetch`:node 环境不能使用浏览器环境中的fetch。需要使用`node-fetch`
- `@babel/preset-env`:将ES6代码转化成ES5;
- `@babel/preset-react`:将jsx文件编译成js(浏览器并不能识别jsx文件)
- `babel-loader`:webpack加载器，接受es代码，配合`@babel/preset-env`、`@babel/preset-react`把代码转换成浏览器可以理解的语言。[参考资料](https://www.html.cn/archives/9427)

# 遇到的若干问题

- babel7废弃了年份preset. 比如 `preset-es2017, babel-preset-latest,babel-preset-stage-0`等不能使用。那么怎么解决具体的preset问题以及相关优化？ [请参考](https://blog.hhking.cn/2019/04/02/babel-v7-update/)

- 配置`preset-env`时，如果在.babelrc中配置，在当前目录下执行相关指令没问题，但是切换在其他文件夹(假设名称为A)就找不到相关模块，会在A文件下找`preset-env`。这个不合理，但不知道怎么配置。 解决办法在`@babel/register`处引入该插件，并用`require.resolve()`来实现。该语句会得到一个绝对路径。

- `webpack-dev-server`:是一个微型服务器，会将entry中的入口文件打包放在output指定的地方，output的文件地址相对于配置中的contentBase.但是这个包并没有放在真实目录下，而是放在内存中。所以在当前目录下起了服务，默认会有一个index.html(也可能是ejs)的模板.在模板中需要正确引入相关资源；

# package.json解读
- bin: 可以是一个map结构，也可以是一个字符串。全局安装时，会为bin中的路径创建一个软链接。局部安装时，会在项目内./node_modules/.bin/目录下创建软连接。