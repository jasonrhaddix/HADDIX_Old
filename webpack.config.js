const path = require('path');
const webpack_merge = require('webpack-merge');



const PATHS = {
	app: path.join(__dirname, "app"),
	build: path.join(__dirname, "build"),
	// bootstrap: path.join(__dirname, "node_modules/bootstrap")
};


const config_exports = require("./config/webpack/config_exports");



const config_Common = webpack_merge(
	{
		entry: {
			app: ['babel-polyfill', PATHS.app],
		},
		output: {
			path: PATHS.build,
			filename: "[name].js",
		},
	},
	config_exports.indexTemplate({
	    title: 'HADDIX',
	    appMountId: 'app'
  	}),
  	config_exports.assetPreload(PATHS.app, process.argv[(process.argv.indexOf("--env.target")+1)]),
	config_exports.loadJSX(PATHS.app),
	config_exports.lintJSX(PATHS.app),
	config_exports.modernizr()
);



const config_Production = webpack_merge([
	config_exports.production(),
	config_exports.extractStyles({
		use: ["css-loader", config_exports.autoprefix()],
	}),
	config_exports.loadFonts({
		options: {
			limit: 15000,
			name: "./fonts/[name].[ext]",
		},
	}),
	config_exports.loadImages({
		options: {
			limit: 15000,
			name: "./images/[name].[ext]",
		},
	}),
	config_exports.loadVideo({
		options: {
			name: "./videos/[name].[ext]",
		},
	}),
	config_exports.loadSVGs({
		options: {
			limit: 15000,
			name: "./svgs/[name].[ext]",
		},
	}),
	config_exports.loadJSON({
		options: {
			limit: 15000,
			name: "./sctips/[name].[ext]",
		},
	}),
	config_exports.load3DOjects({
		options: {
			limit: 15000,
			name: "./sctips/[name].[ext]",
		},
	}),
	config_exports.loadPHP({
		options: {
			limit: 15000,
			name: "./sctips/[name].[ext]",
		},
	})
]);



const config_development = webpack_merge([
	config_exports.devServer({
		host: process.env.HOST,
		post: process.env.PORT,
	}),
	config_exports.loadStyles(),
	config_exports.loadFonts(),
	config_exports.loadImages(),
	config_exports.loadVideo(),
	config_exports.load3DOjects(),
	config_exports.loadSVGs(),
	config_exports.loadJSON(),
	config_exports.loadPHP(),
]);



module.exports = env => {
	if(env.target === "production") {
		return webpack_merge(config_Common, config_Production);
	}

	return webpack_merge(config_Common, config_development);
};