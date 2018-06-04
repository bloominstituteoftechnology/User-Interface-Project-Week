'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

// Static Server + watching scss/html files
gulp.task('serve', ['less'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('less', function() {
    return gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);