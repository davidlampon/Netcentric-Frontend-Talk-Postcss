// NPM GENERAL PACKAGES
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify-css');
var postcss = require('gulp-postcss');

// 1. NPM AUTOPREFIXER
// option 1: gulp plugin
// var autoprefixer = require('gulp-autoprefixer');
// option 2: postcss processor
var autoprefixer = require('autoprefixer');

// 2. NPM LOST GRID SYSTEM
var lost = require('lost');

// 3. NPM CSSNEXT
var cssnext = require('cssnext');

// GULP TASKS

// 1. SASS WITH AUTOPREFIXER
gulp.task('autoprefixer', function () {

  // option 2: postcss processor
  var processors = [
    autoprefixer({browsers: ['last 2 versions']})
  ];

  return gulp
    .src('css/autoprefixer/src/*.scss')
    .pipe(sass())
    .pipe(concat('main.css'))

    // option 1: gulp plugin
    // .pipe(autoprefixer())

    // option 2: postcss processor
    .pipe(postcss(processors))

    // .pipe(minify())
    .pipe(gulp.dest('css/autoprefixer/target'));
});

// 2. LOST GRID SYSTEM
gulp.task('lost', function () {
  var processors = [
    lost(),
    autoprefixer({browsers: ['last 2 versions']})
  ];

  return gulp
    .src('css/lost/src/*.*')
    .pipe(concat('main.css'))
    .pipe(postcss(processors))
    .pipe(gulp.dest('css/lost/target'));
});

// 3. CSS NEXT
gulp.task('cssnext', function () {

  var processors = [
    cssnext(),
    autoprefixer({browsers: ['last 2 versions']})
  ];

  return gulp
    .src('css/cssnext/src/*.*')
    .pipe(concat('main.css'))
    .pipe(postcss(processors))
    .pipe(gulp.dest('css/cssnext/target'));
});

// 4. ALL TOGETHER
gulp.task('all', function () {

  var processors = [
    cssnext(),
    lost(),
    autoprefixer({browsers: ['last 2 versions']})
  ];

  return gulp
    .src('css/all/src/*.scss')
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(postcss(processors))
    // .pipe(minify())
    .pipe(gulp.dest('css/all/target'));
});
