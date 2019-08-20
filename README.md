# test-cli
动手写自己的第一个脚手架

# 各插件的作用
- `babel-register`:这个插件会改写`require`指令，引入之后，再使用require(filePath)时，会对引入的文件先转码，而不用手动转码了。
- `optimist`: 处理node指令中携带的参数。会已对象的形式获取。
- `fetch`:node 环境不能使用浏览器环境中的fetch。需要使用`node-fetch`

# 遇到的若干问题

- babel7废弃了年份preset. 比如 `preset-es2017, babel-preset-latest,babel-preset-stage-0`等不能使用。那么怎么解决具体的preset问题以及相关优化？ [请参考](https://blog.hhking.cn/2019/04/02/babel-v7-update/)