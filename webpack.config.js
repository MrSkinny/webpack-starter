'use strict';

const path = require('path');
const webpack = require('webpack');
const packageData = require('./package.json');
const minify = process.argv.indexOf('--minify') != -1;
const filename = [packageData.name, packageData.version, 'js'];

let plugins = [];

if (minify) {
  filename.splice(filename.length - 1, 0, 'min');
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: path.resolve(__dirname, packageData.main),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: filename.join('.')
  },
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map',
  plugins: plugins
};

