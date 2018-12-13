var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
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
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.join(__dirname, "./dist"),
        port: 9000,
        compress: true,
        hot: true
    }
}
