var gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    imageMin = require("gulp-imagemin"),
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
  ]).pipe(concat("all.min.css")).pipe(minCSS()).pipe(gulp.dest("./"));
});

gulp.task("uglify", function() {
  return gulp.src("client/js/*.js")
    .pipe(concat("my.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./"));
});

gulp.task("smashVendorJS", function() {
  return gulp.src([
    "bower_components/jquery/dist/jquery.min.js",
    "bower_components/typed.js/dist/typed.min.js",
    "bower_components/bootstrap/dist/js/bootstrap.min.js"
  ]).pipe(concat("vendor.min.js")).pipe(uglify()).pipe(gulp.dest("./"));
});

gulp.task("compressImg", function() {
  return gulp.src("images/*").pipe(imageMin()).pipe(gulp.dest("minImage"));
});
