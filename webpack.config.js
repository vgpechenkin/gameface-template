// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const { preprocess } = require('./svelte.config');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
	entry: './src/main.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),

		filename: '[name].js',
		chunkFilename: '[name].js',
	},
	devServer: {
		open: true,
		host: 'localhost',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new CopyPlugin({
			patterns: [{ from: 'assets', to: 'assets' }],
		}),
		new CleanTerminalPlugin({
			message: 'Waiting for rebuild',
			skipFirstRun: true,
		}),
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false,
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			ignoreOrder: false,
		}),
	],
	module: {
		rules: [
			{
				test: /\.(jsx|js|ts(x?))$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'esbuild-loader',
						options: {
							loader: 'tsx',
							target: 'es2015',
						},
					},
				],
			},
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						emitCss: true,
						preprocess: preprocess,
					},
				},
			},
			{
				// required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false, // necessary if you use url('/path/to/some/asset.png|jpg|gif')
						},
					},
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png)$/i,
				type: 'asset',
			},
			{
				test: /\.(png|svg|tif|dds)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'assets',
					context: path.resolve(__dirname, 'src/assets/'),
					name: '[path]/[name].[ext]',
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.svelte', '.mjs'],
		mainFields: ['svelte', 'browser', 'module', 'main'],
		alias: {},
	},
};

module.exports = () => {
	if (isProduction) {
		config.mode = 'production';
	} else {
		config.mode = 'development';
	}
	return config;
};
