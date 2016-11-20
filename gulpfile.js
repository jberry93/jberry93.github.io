'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');

gulp.task('compileSass', function() {
  gulp.src('./app/style.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./'));
});

gulp.task('minifyHTML', function() {
  gulp.src('./app/index.html').pipe(htmlmin({collapseWhitespace: true})).pipe(gulp.dest('./'));
});

gulp.task('minifyCSS', function() {
  gulp.src('./style.css').pipe(cssmin()).pipe(gulp.dest('./'));
});

gulp.task('watchHTML', function() {
  gulp.watch('./app/index.html', ['minifyHTML']);
});

gulp.task('watchCSS', function() {
  gulp.watch('./style.css', ['minifyCSS']);
});

gulp.task('watchSASS', function() {
  gulp.watch('./app/style.scss', ['compileSass']);
});

gulp.task('default', ['watchHTML', 'watchCSS', 'watchSASS']);
