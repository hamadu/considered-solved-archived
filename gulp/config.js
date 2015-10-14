var webpack = require('webpack');
var path = require('path');

var dest = './build';
var src = './src';

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js'
  },

  css: {
    src: src + '/css/**',
    dest: dest + '/css'
  },

  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  },

  copy: {
    src: [
      src + '/www/index.html'
    ],
    dest: dest
  },

  watch: {
    js:  'src/js/**',
    css: 'src/css/**',
    www: 'src/www/index.html'
  }
}
