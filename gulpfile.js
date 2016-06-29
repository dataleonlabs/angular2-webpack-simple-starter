const gulp = require('gulp');
const del = require('del');
const path = require('path');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

exports.styles = ['src/**/*.less'];
exports.scripts = ['src/**/*.ts'];
exports.components = [
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.js',
  'node_modules/reflect-metadata/Reflect.js',
  'node_modules/systemjs/dist/system.src.js',
];
exports.partials = ['index.html']

// TypeScript compile
gulp.task('scripts', function () {
  return gulp
    .src(exports.scripts)
    .pipe(sourcemaps.init())
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

// copy dependencies
gulp.task('components', function() {
  return gulp.src(exports.components)
    .pipe(concat('components.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify({'mangle': false, 'compress': false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
  gulp.src(exports.styles)
    .pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ]}))
    .pipe(autoprefixer())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('partials', function() {
  return gulp.src(exports.partials)
    .pipe(gulp.dest('dist'))
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  //Front-end
  gulp.watch(exports.scripts, ['scripts']);
  gulp.watch(exports.partials, ['partials']);
  gulp.watch(exports.styles, ['styles']);
  gulp.watch(exports.scripts, ['scripts']);
});

gulp.task('default', [
  'partials',
  'styles',
  'components',
  'scripts'
]);
