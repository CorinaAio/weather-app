const webpack = require('webpack');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

require('dotenv').config();

module.exports = {
	entry: SRC_DIR + "/app/index.js", // webpack entry point. Module to start building dependency graph
	output: {
		path: DIST_DIR + '/app', // Folder to store generated bundle
		filename: 'bundle.js',  // Name of generated bundle after build
		publicPath: '/app' // public URL of the output directory when referenced in a browser
	},
	module: {  // where we defined file patterns and their loaders
		rules: [
			{
				test: /\.js$/,
				include: SRC_DIR,
				exclude: [
					/node_modules/
				],
				use: [{
					loader: 'babel-loader',
					query: {
						presets: ['es2015', 'react', 'stage-2']
					}
				}],
			}, {
				test: /\.(sass|scss)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			}, {
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
				    'file-loader',
				    {
					    loader: 'image-webpack-loader',
					    options: {
					        bypassOnDebug: true,
					    },
				    },
				],
			}
		]
	},
	plugins: [  // Array of plugins to apply to build chunk
		new webpack.DefinePlugin({  // plugin to define global constants
	        API_KEY: JSON.stringify(process.env.API_KEY)
      })
	],
	devtool: 'cheap-module-eval-source-map',
	node: {
	    console: true,
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty',
	    dns: 'mock',
  }
};