const gulp = require('gulp');
const less = require('gulp-less');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            // Customizing error title
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
        })
    });
}

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: '.'
        },
    })
})

function errorHandler(err) {
    console.log(err.toString());

    this.emit('end');
}
gulp.task('less', function () {
    return gulp.src('./less/*.less')
        .pipe(customPlumber('Error Running Less'))
        .pipe(less())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true,
        }))
});



gulp.task('watch', ['browserSync', 'less'], function () {
    gulp.watch('./less/**/*.less', ['less']);
});