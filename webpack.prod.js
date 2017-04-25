
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.config.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

var path = require('path');
var webpack = require('webpack');



module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  plugins: [
     new webpack.NoEmitOnErrorsPlugin(),
     new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
     new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
     new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});



