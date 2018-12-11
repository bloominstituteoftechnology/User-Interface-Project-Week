const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from:'img',to:'img'} 
        ]), 
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template:__dirname + '/index.html',
            filename: 'index.html',
            inject: "body"
        }),
        new HtmlWebpackPlugin({
            template:__dirname + '/services.html',
            filename: 'services.html',
            inject: "body"
        }),
        new HtmlWebpackPlugin({
            template:__dirname + '/contact.html',
            filename: 'contact.html',
            inject: "body"
        })
    ]
}