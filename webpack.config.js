/* eslint-env node */

var path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }]
  },
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  target: 'web',
  resolve: {
    modules: [ 'node_modules' ],
    extensions: [ 'js' ]
  },

  devServer: {
    https: false,
    port: 9000,
    host: '0.0.0.0'
  }
};
