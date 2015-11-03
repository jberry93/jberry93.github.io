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

gulp.task("smashCSS", function() {
  return gulp.src([
    "bower_components/animate.css/animate.min.css",
    "bower_components/bootstrap/dist/css/bootstrap.min.css"
  ]).pipe(concat("all.css")).pipe(gulp.dest("server/public"));
});
