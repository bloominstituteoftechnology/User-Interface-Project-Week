const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, { 
    mode: "development",
	devtool: 'cheap-module-eval-source-map',
	devServer: {
				contentBase: './build'
            },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                        {loader: 'style-loader'},
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },
                    ]
            }
        ]
    }
});