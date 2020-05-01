const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

const getAlias = (tsconfigPath = './tsconfig.json') => {
	const tsconfig = require(tsconfigPath);
	const { paths, baseUrl } = tsconfig.compilerOptions;

	return Object.fromEntries(
		Object.entries(paths)
			.filter(([, pathValues]) => pathValues.length > 0)
			.map(([pathKey, pathValues]) => {
				const key = pathKey.replace('/*', '');
				const value = path.resolve(path.dirname(tsconfigPath), baseUrl, pathValues[0].replace('/*', ''));
				return [key, value];
			})
	);
};

module.exports = {
	entry: ['webpack/hot/poll?100', './src/main.ts'],
	watch: true,
	target: 'node',
	devtool: 'source-map',
	externals: [
		nodeExternals({
			whitelist: ['webpack/hot/poll?100']
		})
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				enforce: 'pre',
				use: [
					{
						options: {
							eslintPath: require.resolve('eslint')
						},
						loader: require.resolve('eslint-loader')
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(ts|tsx)$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	mode: 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: getAlias(path.resolve(__dirname, 'tsconfig.json'))
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new StartServerPlugin({ name: 'server.js' })],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'server.js'
	}
};
