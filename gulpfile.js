const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('./less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./css'));
});