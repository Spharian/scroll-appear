var gulp = require("gulp");
var rename = require("gulp-rename");
var coffee = require("gulp-coffee");
var uglify = require("gulp-uglify");
var livereload = require("gulp-livereload");

var libPath = "./lib/";
var demoPath = "./demo/";
var srcPath = "./src/";
var filename = "scroll-appear";

gulp.task("default", function() {
  gulp.src(srcPath + "*.coffee")
    .pipe(coffee())
    .pipe(rename(filename + ".min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(demoPath))
    .pipe(gulp.dest(libPath))
    .pipe(livereload());
});

gulp.task("watch", function() {
  livereload.listen();
  gulp.watch(srcPath + "*.coffee", ["default"]);
});
