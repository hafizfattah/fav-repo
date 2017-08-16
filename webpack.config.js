var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var isProd = process.env.NODE_ENV === 'production';
var cssDev = ['style-loader', 'css-loader?sourceMap!', 'sass-loader?sourceMap=true'];

var cssProd = ExtractTextPlugin.extract({
	fallback: 'style-loader',
	use: ['css-loader','sass-loader'],
    publicPath: './'
})

var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
	entry: {
		// vendor: ['jquery'],
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
						minimize: false
					}	
				}]
			},
            {
                test: /\.scss$/, 
                use: cssConfig
            },
            {
            	test: /\.js$/,
            	exclude:  /(node_modules|bower_components)/,
            	use: {
					loader: 'babel-loader',
					options: {
						presets:['react', 'es2015', 'stage-0'],
						plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
					}
				}

            },
            { 
				test: /\.(eot|ttf|woff|woff2)$/,
		        use: "url-loader?limit=100000!./[name].[ext]"
			}, 
			{	
				test: /\.(woff2?|svg)$/, 
				use: 'url-loader?limit=10000&name=fonts/[name].[ext]' 
			},
            {
            	test: /\.(eot|ttf|woff|woff2)$/, 
            	use: 'file-loader?name=fonts/[name].[ext]&outputPath=fonts/' 
            },
			{
				test: /\.(jpe?g|png|gif|svg)$/i, 
				use: [
					
				    {
						loader: 'file-loader?name=[name].[ext]&outputPath=img/'
				    },
				    {
						loader: 'image-webpack-loader',
						options: {
							query: {
								mozjpeg: {
									progressive: true,
								},
								gifsicle: {
									interlaced: true,
								},
								optipng: {
									optimizationLevel: 7,
								}
							}
						}
				    }
			    ]
			}
        ]
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/index.html'
		}),
		new ExtractTextPlugin({
            filename: 'app.css',
            disable: !isProd,
            allChunks: true
        }),
     //    new webpack.ProvidePlugin({
		   //  $: "jquery",
		   //  jQuery: "jquery",
		   //  "window.jQuery": "jquery"
	    // }),
        new webpack.HotModuleReplacementPlugin(),
	    new webpack.NamedModulesPlugin()
	],
	devServer: {
	    contentBase: path.resolve(__dirname, './src/'), 
		compress: true,
		hot: true,
		inline: true,
		open: true,
		historyApiFallback: true
  	}
};
