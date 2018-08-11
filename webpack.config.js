const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html'
})

module.exports = {
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: [
								'./node_modules',
								'./node_modules/grommet/node_modules'
							]
						}
					}
				]
			}
		]
	},
	plugins: [htmlPlugin]
}
