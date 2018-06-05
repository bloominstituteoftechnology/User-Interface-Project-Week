'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync').create();
let less = require('gulp-less');
let plumber = require('gulp-plumber');

gulp.task('less', function() {
  return gulp.src('less/*.less')
    .pipe(plumber(function (error) {
      console.log(error);
      this.emit('end');
      this.destroy();
    }))
    .pipe(less())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['less'], function() {

  browserSync.init({
      server: './'
  });

  gulp.watch('less/**/*.less', ['less']);
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);