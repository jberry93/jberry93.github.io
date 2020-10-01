'use strict';

const { series, parallel, src, dest, watch } = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');

function compileSass() {
  return src('./app/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./'));
}

function minifyHTML() {
  return src('./app/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./'));
}

function minifyCSS() {
  return src('./style.css')
    .pipe(cssmin())
    .pipe(dest('./'));
}

function watchHTML() {
  return watch('./app/index.html', minifyHTML);
}

function watchCSS() {
  return watch('./style.css', minifyCSS);
}

function watchSASS() {
  return watch('./app/style.scss', compileSass);
}

exports.compileSass = compileSass;
exports.minifyCSS = minifyCSS;
exports.minifyHTML = minifyHTML;
exports.default = series(watchHTML, parallel(watchCSS, watchSASS));
