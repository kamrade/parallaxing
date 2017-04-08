'use strict';

//var livereload   = require('gulp-livereload');
var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var vinylSource = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
var uncss = require('gulp-uncss');
var minifyCSS = require('gulp-minify-css');
var buffer = require('vinyl-buffer');

// html - copy index.html to dev and to dist
gulp.task('html', function(){
  return gulp.src('./src/index.html')
            .pipe(gulp.dest('./dev/'))
            .pipe(gulp.dest('./dist/'))
            .pipe(connect.reload());
});

// concat js to one file and put it to dev
gulp.task('js', function(){
  return browserify('./src/js/main.js')
    .bundle()
    .pipe(vinylSource('bundle.js'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./dev/js'))
    .pipe(connect.reload());
});

// minify concated js files and put it to dist
gulp.task('compressjs', function() {
  return browserify('./src/js/main.js')
    .bundle()
    .pipe(vinylSource('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    // .pipe(rename('bundle.min.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass', function(){
  return gulp.src('./src/sass/main.sass')
    .pipe(sass())
    .pipe(autoPrefixer({
			browsers: ['last 2 versions', '> 1%', 'IE 8'],
			cascade: false
		}))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./dev/css'))
    .pipe(connect.reload());
});

gulp.task('css', function(){
  return gulp.src('./src/sass/main.sass')
    .pipe(sass())
    .pipe(autoPrefixer({
			browsers: ['last 2 versions', '> 1%', 'IE 8'],
			cascade: false
		}))
    .pipe(rename('style.css'))
    // .pipe(uncss({html:['./dist/index.html']}))
    .pipe(minifyCSS(''))
    .pipe(gulp.dest('./dist/css'));
});

// server for dev
gulp.task('connect-dev', function() {
  connect.server({
    root: './dev',
    port: 8088,
    livereload: true
  });
});

gulp.task('watch', function(){
  gulp.watch('./src/**/*.html', ['html']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./src/sass/**/*.sass', ['sass']);
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['connect-dev', 'html', 'sass', 'js', 'watch']);
gulp.task('dev', ['connect-dev', 'html', 'sass', 'js', 'watch']);
gulp.task('build', ['html', 'css', 'compressjs']);
