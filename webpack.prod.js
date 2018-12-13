const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const prefixer = require('autoprefixer');

module.exports = merge.smart(common, {
    mode: "production",
	devtool: 'source-map',
	plugins: [
            new MiniCssExtractPlugin({
                                filename: '[name].css',
                                chunkFilename: "[id].css"
            })
			],
	module: {
		rules: [
				{
					test:/\.css$/,
                    exclude: /node_modules/,
					use: [
                        {loader: MiniCssExtractPlugin.loader},
                        {loader: 'css-loader'},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: () => [
												prefixer({
														browsers: [
																	"> 1%",
																	"last 2 versions"
																]
													})
											]
									}
						}
						]
				}
				]
			}
});