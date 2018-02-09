const webpack = require( 'webpack' );
const path = require( 'path' );



const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const NpmInstallPlugin = require( 'npm-install-webpack-plugin' );



exports.production = function() {
	return {
		plugins: [
	        /*webpack gives your modules and chunks ids to identify them. Webpack can vary the
	        distribution of the ids to get the smallest id length for often used ids with
	        this plugin*/
	        new webpack.optimize.OccurrenceOrderPlugin(),


	        /*extracts the css from the js files and puts them on a separate .css file. this is for
	        performance and is used in prod environments. Styles load faster on their own .css
	        file as they dont have to wait for the JS to load.*/	        
	        new ExtractTextPlugin('[name]-[hash].min.css'),
			

			/*handles uglifying js*/
	        new webpack.optimize.UglifyJsPlugin({
	            compressor: {
	                warnings: false,
	                screw_ie8: true
	            }
	        }),
			

			/*plugin for passing in data to the js, like what NODE_ENV we are in.*/
	        new webpack.DefinePlugin({
	            'process.env.NODE_ENV': JSON.stringify('production')
	        }),
	    ],
	}
}



exports.devServer = ({ host, port } = {}) => ({
	devServer: {
		stats: 'errors-only',
		host,
		port,
		historyApiFallback: true,
		overlay: {
			errors: true,
			warnings: true,
		},
	},
});



exports.indexTemplate = function(options) {
	return {
		plugins: [
			new HtmlWebpackPlugin({
				template: 'app/index.tpl',
				inject: 'body',
				title: options.title,
				appMountId: options.appMountId,
				filename: 'index.html',
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true
				},
			})
		]
	}
};



exports.loadJSX = () => {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            }
          ]
        }
      ]
    }
  };
}



exports.lintJSX = () => {
  // return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            }
          ]
        }
      ]
    }
  // };
}



exports.autoprefix = () => ({
	loader: 'postcss-loader',
	options: {
		plugins: () => [require('autoprefixer')()],
	},
});



exports.extractStyles = ({ include, exclude, use }) => {
	const extractPlugin = new ExtractTextPlugin({
		allChunks: true,
		filename: '[name].css',
	});

	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					include,
					exclude,
					use: extractPlugin.extract({
						use,
						fallback: 'style-loader',
					})
				},
				{
					test: /\.scss/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
		plugins: [extractPlugin],
	};
};



exports.loadStyles = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.css/,
				include,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],	
			},
			{
				test: /\.scss/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
});



exports.loadFonts = ({ include, exclude, options }  = {}) => ({
	module: {
		rules: [
			{
				test: /\.(eot|otf|ttf|woff|woff2)(\?\S*)?$/,
				include,
				exclude,
				use: {
					loader: 'url-loader',
					options,
				},
			},
		],
	},
});


exports.loadJSON = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				test: /\.json$/,
				include,
				exclude,
				use: {
					loader: 'json-loader',
					options,
				},
			},
		],
	},
});


exports.loadImages = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif)$/,
				include,
				exclude,
				use: {
					loader: 'url-loader',
					options,
				},
			},
		],
	},
});



exports.loadSVGs = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				test: /\.svg$/,
				include,
				exclude,
				use: {
					loader: 'file-loader',
					options,
				},
			},
		],
	},
});



exports.load3DOjects = ({ include, exclude, options } = {}) => ({
	module: {
		rules: [
			{
				test: /\.(obj|mtl|json3d)$/,
				include,
				exclude,
				use: {
					loader: 'file-loader',
					options,
				},
			},
		],
	},
});



exports.modernizr = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				loader: 'webpack-modernizr-loader',
				include,
				exclude: /node_modules/,
				test: /\.modernizrrc\.js$/,
			}
		]
	},
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, '../../.modernizrrc.js')
		}
	}
});