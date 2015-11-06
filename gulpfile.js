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
    "bower_components/semantic/dist/semantic.min.css",
    "bower_components/semantic/dist/components/reset.min.css",
    "bower_components/semantic/dist/components/site.min.css",
    "bower_components/semantic/dist/components/container.min.css",
    "bower_components/semantic/dist/components/grid.min.css",
    "bower_components/semantic/dist/components/header.min.css",
    "bower_components/semantic/dist/components/image.min.css",
    "bower_components/semantic/dist/components/menu.min.css",
    "bower_components/semantic/dist/components/divider.min.css",
    "bower_components/semantic/dist/components/dropdown.min.css",
    "bower_components/semantic/dist/components/segment.min.css",
    "bower_components/semantic/dist/components/button.min.css",
    "bower_components/semantic/dist/components/list.min.css",
    "bower_components/semantic/dist/components/icon.min.css",
    "bower_components/semantic/dist/components/sidebar.min.css",
    "bower_components/semantic/dist/components/transition.min.css"
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
    "bower_components/semantic/dist/semantic.min.js",
    "bower_components/semantic/dist/components/visibility.min.js",
    "bower_components/semantic/dist/components/sidebar.min.js",
    "bower_components/semantic/dist/components/transition.min.js",
    "bower_components/typed.js/dist/typed.min.js"
  ]).pipe(concat("vendor.min.js")).pipe(uglify()).pipe(gulp.dest("./"));
});

gulp.task("compressImg", function() {
  return gulp.src("images/*").pipe(imageMin()).pipe(gulp.dest("minImage"));
});
