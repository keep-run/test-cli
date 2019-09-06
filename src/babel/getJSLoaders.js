
export default () => {
    return [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,  //对这个不做处理
        use: {
            loader: require.resolve('babel-loader'),
            options: {
                presets: [require.resolve('@babel/preset-env'),
                require.resolve('@babel/preset-react'),
                ],
                plugins: [
                    [require.resolve("@babel/plugin-proposal-decorators"), { "legacy": true }],
                    [require.resolve("@babel/plugin-proposal-class-properties")],
                    [require.resolve('babel-plugin-import'), {
                        'libraryName': 'antd',
                        'style': true
                    }]
                ]
            }
        }
    }
    ]
}