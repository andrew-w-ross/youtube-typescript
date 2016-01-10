var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
	entry: [
		'./src/index'
	],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test:/\.jsx?$/, exclude: /node_modules/,loader: 'babel'},
			{test:/\.tsx?$/, exclude: /node_modules/,loader: 'awesome-typescript'}
		]
	},
	plugins: [
		new ForkCheckerPlugin(),
	],
	resolve: {
		extensions: ['', '.tsx', '.ts', '.jsx', '.js']
	},
	devServer: {
		contentBase: './'
	}
};
