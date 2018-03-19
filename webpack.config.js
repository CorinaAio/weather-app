const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
	entry: __dirname + "/src/index.js", // webpack entry point. Module to start building dependency graph
	output: {
		path: __dirname + '/dist', // Folder to store generated bundle
		filename: 'bundle.js',  // Name of generated bundle after build
		publicPath: '/' // public URL of the output directory when referenced in a browser
	},
	module: {  // where we defined file patterns and their loaders
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: [
					/node_modules/
				]
			}, {
				test: /\.(sass|scss)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			}
		]
	},
	plugins: [  // Array of plugins to apply to build chunk
		new HtmlWebpackPlugin({
		    template: __dirname + "/src/index.html",
		    inject: 'body'
		}),
		new webpack.DefinePlugin({  // plugin to define global constants
	        API_KEY: JSON.stringify(process.env.API_KEY)
      })
	],
	devServer: {  // configuration for webpack-dev-server
	 // contentBase: './src/public',  //source of static assets
		port: 7777, // port to run dev-server
	},
	node: {
	    console: true,
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty',
	    dns: 'mock',
  }
};