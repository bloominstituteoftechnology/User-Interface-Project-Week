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

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: '.'
        },
    })
})

gulp.task('jsPlaceModules', function () {
    gulp.src(['node_modules/jquery/dist/jquery.min.js', 
                'node_modules/popper.js/dist/popper.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js'])
                    .pipe(gulp.dest('./js'));
});

gulp.task('cssPlaceModules', function() {
    gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest('./css'));
})

gulp.task('watch', ['browserSync', 'less'], function () {
    gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('default', ['watch', 'jsPlaceModules', 'cssPlaceModules'], function () {
    console.log('Good to Go!');
});