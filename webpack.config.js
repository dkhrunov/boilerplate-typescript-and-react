const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// Turn to production mode, when app will be done
	// In production mode code will be more optimizated
	// Turn devtool field to source-map for prod mode
	mode: "development",

	// webpack entry point. Module to start building dependency graph
	entry:  __dirname + "/src/index.tsx",

	output: {
		// Folder to store generated bundle
		path: path.join(__dirname, "/dist"),
		// Name of generated bundle after build
		filename: "bundle.js"
	},

	resolve: {
		// adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
		extensions: [".ts", ".tsx", ".js"]
	},

	module: {
		rules: [
			{
				// Include ts, tsx, js and jsx files.
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			},
			// Allow imports css file inside javascript files
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
		  template: './index.html'
		})
	],

	devServer: {
		// Display only errors to reduce the amount of output.
		stats: "errors-only",
		// Open the page in browser
		open: true
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		"react": "React",
		"react-dom": "ReactDOM"
	},

	// Enable sourcemaps for debugging webpack's output.
	// Turn to source-map for prod mode
	devtool: "inline-source-map"
};