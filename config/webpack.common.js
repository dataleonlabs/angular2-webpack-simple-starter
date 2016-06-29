var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

CopyWebpackPlugin
module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts',
        exclude: [/\.(spec|e2e)\.ts$/]
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      // Support for *.json files.
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      {
        test: /\.less$/,
        include: helpers.root('src', 'app'),
        loader: "style!css!less?strictMath&noIeCompat"
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    /*
    * Plugin: HtmlWebpackPlugin
    * Description: Simplifies creation of HTML files to serve your webpack bundles.
    * This is especially useful for webpack bundles that include a hash in the filename
    * which changes every compilation.
    *
    * See: https://github.com/ampedandwired/html-webpack-plugin
    */
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    /*
     * Plugin: CopyWebpackPlugin
     * Description: Copy files and directories in webpack.
     *
     * Copies project static assets.
     *
     * See: https://www.npmjs.com/package/copy-webpack-plugin
     */
    new CopyWebpackPlugin([{
      from: 'src/assets'
    }]),
  ],
};
