const webpack = require("webpack");

module.exports = {
	// Turn to production mode, when app will be done
	// In production mode code will be more optimizated
	// Turn devtool field to source-map for prod mode
	mode: "development",

	// webpack entry point. Module to start building dependency graph
	entry:  __dirname + "/src/index.tsx",

	output: {
		// Folder to store generated bundle
		path: __dirname + "/dist",
		// Name of generated bundle after build
		filename: "bundle.js",
		// Public URL of the output directory when referenced in a browser
		publicPath: "/"
	},

	resolve: {
		// Add '.ts', '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js"]
	},

	module: {
		rules: [
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.ts(x)?$/,
				exclude: /node_modules/,
				loader: "ts-loader"
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