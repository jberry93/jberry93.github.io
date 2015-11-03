var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    nodemon = require("gulp-nodemon"),
    mocha = require("gulp-mocha"),
    concat = require("gulp-concat"),
    minHTML = require("gulp-minify-html"),
    minCSS = require("gulp-minify-css"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename");

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("index.html", browserSync.reload);
  gulp.watch("default.css", browserSync.reload);
  gulp.watch("js/*.js", browserSync.reload);
});
