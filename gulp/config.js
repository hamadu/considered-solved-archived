var path = require('path');

var dest = './build';
var src = './src';
var relativeSrcPath = path.relative('.', src);

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
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
        // { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        // { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        //
        // { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
        // { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
        // { test: /\.eot$/, loader: 'url-loader?mimetype=application/font-woff' },
        // { test: /\.ttf$/, loader: 'url-loader?mimetype=application/font-woff' }
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
