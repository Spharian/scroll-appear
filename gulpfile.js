var gulp = require("gulp");
var rename = require("gulp-rename");
var coffee = require("gulp-coffee");
var uglify = require("gulp-uglify");
var livereload = require("gulp-livereload");

var distPath = "./dist/";
var demoPath = "./demo/";
var libPath = "./src/";
var filename = "scroll-appear";

gulp.task("default", function() {
  gulp.src(libPath + "*.coffee")
    .pipe(coffee())
    .pipe(rename(filename + ".js"))
    .pipe(gulp.dest(distPath))
    .pipe(rename(filename + ".min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(demoPath))
    .pipe(gulp.dest(distPath))
    .pipe(livereload());
});

gulp.task("watch", function() {
  livereload.listen();
  gulp.watch(libPath + "*.coffee", ["default"]);
});
