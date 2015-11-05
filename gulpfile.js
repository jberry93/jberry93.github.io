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
      baseDir: "./client/views"
    }
  });
  gulp.watch("client/views/*", browserSync.reload);
  gulp.watch("js/*.js", browserSync.reload);
});

gulp.task("minHTML", function() {
  return gulp.src("client/views/index.html")
    .pipe(minHTML())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("server/public"));
});

gulp.task("smashCSS", function() {
  return gulp.src([
    "client/bower_components/animate.css/animate.min.css",
    "client/bower_components/bootstrap/dist/css/bootstrap.min.css"
  ]).pipe(concat("all.min.css")).pipe(minCSS()).pipe(gulp.dest("client/views"));
});

gulp.task("uglify", function() {
  return gulp.src("client/js/*.js")
    .pipe(concat("my.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("client/views"));
});

gulp.task("smashVendorJS", function() {
  return gulp.src([
    "client/bower_components/jquery/dist/jquery.min.js",
    "client/bower_components/typed.js/dist/typed.min.js",
    "client/bower_components/bootstrap/dist/js/bootstrap.min.js"
  ]).pipe(concat("vendor.min.js")).pipe(uglify()).pipe(gulp.dest("client/views"));
});

gulp.task("compressImg", function() {
  return gulp.src("client/images/*").pipe(imageMin()).pipe(gulp.dest("client/views/minImage"));
});
