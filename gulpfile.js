'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['taskScss', 'watch'], function() {
  browserSync.init({
    server: './'
  })
});

gulp.task('taskScss', function() {
  return gulp.src('src/scss/**/*.scss')
  .pipe(sass({
    includePaths: require('node-normalize-scss').includePaths
  }).on('error', notify.onError()))
  .pipe(rename('style.css'))
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', ['taskScss']);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
