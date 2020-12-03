module.exports = {
    entry: './pages/index.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				use: 'file-loader',
				query: {
					name: '[name].[ext]',
				},
				include: path.resolve(__dirname, '../'),
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				include: path.resolve(__dirname, '../'),
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	cache: false,
  }