var gulp = require('gulp');
var webpack = require('webpack-stream');
var config = require('../config');

gulp.task('webpack', function () {
  gulp.src(config.webpack.entry)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.js.dest));
});
