const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            // Customizing error title
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
        })
    });
}

function errorHandler(err) {
            console.log(err.toString());

            this.emit('end');
        }
gulp.task('less', function () {
            return gulp.src('./less/*.less')
                .pipe(customPlumber('Error Running Less'))
                .pipe(less())
                .pipe(gulp.dest('./css'));
        });

    gulp.task('watch', function () {
        gulp.watch('./less/**/*.less', ['less']);
    })