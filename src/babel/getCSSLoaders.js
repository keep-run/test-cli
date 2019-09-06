//暂时写死，未来可支持一些配置
import path from 'path'
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default (args) => {
    return [{
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, require.resolve("css-loader")]
    }, {
        test: /\.less$/,
        // exclude: /node_modules/,
        include: [path.join(args.cwd, '/node_modules/antd'),path.join(args.cwd, '/src')],
        use: [MiniCssExtractPlugin.loader, require.resolve("css-loader"), {
            loader: require.resolve("less-loader"),
            options: {
                javascriptEnabled: true
            }
        }]
    }, {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, require.resolve("css-loader"), require.resolve("stylus-loader")]
    }]
}