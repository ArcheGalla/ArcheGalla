const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
		entry: './src/app/index.js',
		output: {
				path: path.resolve(__dirname, "dist"),
				filename: "bundle.js",
				publicPath: "/",
		},

		module: {
				rules: [{
						test: /\.ico$/,
						use: [
								{
										loader: 'file-loader',
										options: {
												name: '[name].[ext]',
										},
								},
						],
				},]
		},

		resolve: {
				modules: [
						"node_modules",
						path.resolve(__dirname, "app")
				],
				extensions: [".js", ".json", ".css"],
		},

		devtool: "source-map",
		context: __dirname,
		target: "web",
		externals: [],
		stats: "errors-only",
		devServer: {
				port: 9000,
				// proxy: { '/api': 'http://localhost:3000' },
				contentBase: path.join(__dirname, 'dist'),
				compress: true,
				// historyApiFallback: true,
				// hot: true,
				// https: false,
				// noInfo: true,
		},

		plugins: [
				new HtmlWebpackPlugin({
						title: 'Arche Galla',
						filename: 'index.html'
				})
		],
};