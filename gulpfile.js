// Packages need to be required here
let bourbon 		= require('bourbon'),
		browserSync = require('browser-sync'),
		cleanCSS 		= require('gulp-clean-css'),
		concat 			= require('gulp-concat'),
		gulp        = require('gulp'),
		gutil 			= require('gulp-util'),
		imagemin 		= require('gulp-imagemin'),
		jshint 			= require('gulp-jshint'),
    merge       = require('merge-stream');
    less        = require('gulp-less'),
		notify 			= require('gulp-notify');
		plumber 		= require('gulp-plumber'),
		prettify 		= require('gulp-jsbeautifier'),
		reload      = browserSync.reload,
		rename 			= require('gulp-rename'),
		sass        = require('gulp-sass'),
		sourcemaps 	= require('gulp-sourcemaps'),
		streamqueue = require('streamqueue'),
		uglify 			= require('gulp-uglify');

let plumberErrorHandler = { errorHandler: notify.onError({
    
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
  })
};

gulp.task('browser-sync', function() {
    //watch files
	let files = [
	'./css/style.css',
	'./js/*.js',
	'./**/*.html',
	'./**/*.twig'
	];

	//initialize browsersync
  browserSync.init(files, {
 		//browsersync with a php server
 		// You need to change the proxy to whatever your URL for your local install is.
    //proxy: "http://localhost/",
   	server: true,
    notify: false
  });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers

// gulp.task('badass', function() {

//     var scssStream = gulp.src('./_src/scss/*.scss')
//       .pipe(plumber(plumberErrorHandler))
//       .pipe(sourcemaps.init())
//       .pipe(sass({
//         includePaths: ['node_modules/bootstrap/scss','node_modules/font-awesome/scss','node_modules/slick-carousel/slick/'].concat(bourbon.includePaths),
//       }))
//       .pipe(concat('scss-files.scss'))
//     ;

//      var lessStream = gulp.src('./_src/less/style-l.less')
//         .pipe(plumber(plumberErrorHandler))
//         .pipe(sourcemaps.init())
//         .pipe(less())
//         .pipe(concat('less-files.less'))
//     ;    

//     var mergedStream = merge(scssStream,lessStream)
//         .pipe(concat('styles.css'))
//         .pipe(sourcemaps.write('maps'))
//         .pipe(gulp.dest('./css'))
//         .pipe(reload({stream:true}));

//     return mergedStream;
// });


gulp.task('build:css', function () {
	return gulp.src('./_src/scss/*.scss')
	.pipe(plumber(plumberErrorHandler))
  .pipe(sourcemaps.init())
  .pipe(sass({
    includePaths: ['node_modules/bootstrap/scss','node_modules/font-awesome/scss','node_modules/slick-carousel/slick/'].concat(bourbon.includePaths),
  }))
 //  .pipe(cleanCSS({
 //  	level: 2
	// }))
  .pipe(sourcemaps.write('maps'))
  .pipe(gulp.dest('./css'))
  .pipe(reload({stream:true}));
});

gulp.task('build:less', function () {
  return gulp.src('./_src/less/style-l.less')
  .pipe(plumber(plumberErrorHandler))
  .pipe(sourcemaps.init())
  .pipe(less())
  .pipe(sourcemaps.write('maps-less'))
  .pipe(gulp.dest('./css'))
  .pipe(reload({stream:true}));
});


// create task
gulp.task('build:final-css', function(){
  gulp.src(['./css/style.css','./css/style-l.css' ])
  .pipe(cleanCSS({
    level: 2
   }))
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('./css'))
});


gulp.task('copy:assets', function() {
  //Copy Fonts
	gulp.src(['node_modules/font-awesome/fonts/**/*.{ttf,woff,woff2,eof,svg}',
    'node_modules/slick-carousel/slick/fonts/**/*.{ttf,woff,woff2,eof,svg}'])
  .pipe(gulp.dest('./fonts'));

	//Copy Javascript
	gulp.src(['node_modules/bootstrap/dist/js/bootstrap.js',
		'node_modules/jquery/dist/jquery.js',
    'node_modules/slick-carousel/slick/slick.js'])
    .pipe(gulp.dest('./_src/js/vendor'));
});

// Image Optimization
gulp.task('build:images', function() {
 
  gulp.src('./_src/images/*.{png,jpg,gif}')
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
    }))
    .pipe(gulp.dest('./images'))
});

// Build Scripts
gulp.task('build:scripts', function() {
  let jsfiles = [
  	'./_src/js/vendor/jquery.js',
    './_src/js/vendor/slick.js',
  	'./_src/js/vendor/bootstrap.js',
  	'./_src/js/**/*.js',
  	'./_src/js/*.js'
  ];

  return streamqueue({ objectMode: true }, gulp.src(jsfiles))
    .pipe(concat('theme.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
    .on('error', gutil.log);
});

let servedep = [
	'browser-sync',
  'build:scripts',
  'build:css',
  'build:images',
];
gulp.task('serve', servedep, function() {
  // Watch app .scss files. 
  gulp.watch('./_src/scss/**/*.scss', ['build:css']);
  // Watch app .less files. 
  gulp.watch('./_src/less/**/*.less', ['build:less']);
  // Watch app .js files
  gulp.watch('./_src/js/**/*.js', ['build:scripts']);

});


// Default - Initial Build

let defaultTasks = [
	'build:css',
  'build:less',
	'build:images',
	'build:scripts',
	'copy:assets'
]

gulp.task('default', defaultTasks);