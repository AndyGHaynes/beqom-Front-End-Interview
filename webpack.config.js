var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          'react',
          'es2015',
          'stage-0'
        ]
      }
    }, {
      test: /\.css/,
      loader: 'style-loader'
    }, {
      test: /\.css/,
      loader: 'css-loader',
      query: {
        modules: true,
        localIdentName: '[name]__[local]__[hash:base64:5]'
      }
    }]
  }
};
