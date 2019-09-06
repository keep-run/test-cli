import MiniCssExtractPlugin from "mini-css-extract-plugin";
import getCSSLoaders from '../babel/getCSSLoaders'
import getJSLoaders from '../babel/getJSLoaders'
import utils from '../utils/index'

export default (args) => {
    const { entry = './src/index.jsx' } = utils.getPackage(args.cwd).iron || {}


    return {
        context: args.cwd,
        entry,
        mode: args.mode || 'development',
        output: {
            filename: "bundle.js"
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [...getJSLoaders(), ...getCSSLoaders(args)]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: `bundle.css`
            }),
        ]
    }
}