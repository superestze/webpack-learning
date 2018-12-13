path = require('path');
HtmlWebpackPlugin = require('html-webpack-plugin')

module.export = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$ /,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ],
    dev_server:{
        contentBase:path.join(__dirname, './dist'),
        open: true,
        port:9000
    }
}
