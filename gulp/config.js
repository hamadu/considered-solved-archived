var path = require('path');

var dest = './build';
var src = './src';
var relativeSrcPath = path.relative('.', src);

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: true
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
    }
  },

  copy: {
    src: [
      src + '/www/index.html'
    ],
    dest: dest
  },

  watch: {
    js: relativeSrcPath + '/js/**',
    css: relativeSrcPath + '/css/**',
    www: relativeSrcPath + '/www/index.html'
  }
}
