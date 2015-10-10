var gulp = require('gulp');
var config = require('../config').css;
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var plumber = require('gulp-plumber');

gulp.task('css', function () {
  gulp.src(config.src)
    .pipe(plumber())
    .pipe(concat('style.min.css'))
    .pipe(minify())
    .pipe(gulp.dest(config.dest));
});
