# test-cli
动手写自己的第一个脚手架

# 各插件的作用
- `babel-register`:这个插件会改写`require`指令，引入之后，再使用require(filePath)时，会对引入的文件先转码，而不用手动转码了。
- `optimist`: 处理node指令中携带的参数。会已对象的形式获取。
- `fetch`:node 环境不能使用浏览器环境中的fetch。需要使用`node-fetch`

# 遇到的若干问题

- babel7废弃了年份preset. 比如 `preset-es2017, babel-preset-latest,babel-preset-stage-0`等不能使用。那么怎么解决具体的preset问题以及相关优化？ [请参考](https://blog.hhking.cn/2019/04/02/babel-v7-update/)

- 配置`preset-env`时，如果在.babelrc中配置，在当前目录下执行相关指令没问题，但是切换在其他文件夹(假设名称为A)就找不到相关模块，会在A文件下找`preset-env`。这个不合理，但不知道怎么配置。 解决办法在`@babel/register`处引入该插件，并用`require.resolve()`来实现。该语句会得到一个绝对路径。