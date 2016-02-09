var gulp = require('gulp'),
    minifyHTML = require('gulp-htmlmin'),
    minifyCSS = require('gulp-cssnano');

gulp.task('minifyHTML', function() {
  return gulp.src('dev/*.html')
    .pipe(minifyHTML({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('minifyCSS', function() {
  return gulp.src('dev/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./style'))
});

gulp.task('default', ['minifyHTML', 'minifyCSS']);
