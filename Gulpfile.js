"use strict";

const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const browserSync = require("browser-sync").create();
const gulp = require("gulp");
const gutil = require("gulp-util");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const reload = browserSync.reload;
const replace = require("gulp-replace");
const rimraf = require("rimraf");
const runSequence = require("run-sequence");

gulp.task("css:optimized", function () {
    return gulp
        .src("assets/css/*.css")
        .pipe(plumber())
        .pipe(autoprefixer())
        .pipe(cssnano({discardComments: {removeAll: true}}))
        .pipe(gulp.dest("dist/css/"));
});

gulp.task("images", function () {
    return gulp
        .src("assets/img/**/*")
        .pipe(plumber())
        .pipe(
            imagemin({
                progressive: true
            })
        )
        .pipe(gulp.dest("dist/img"));
});


gulp.task("fonts", function () {
    return gulp.src("assets/fonts/*").pipe(plumber()).pipe(gulp.dest("dist/fonts"));
});

gulp.task("clean", function (cb) {
    return rimraf("dist/", cb);
});

gulp.task("watch", function () {
    gulp.watch("assets/img/**/*", ["images"], reload);
    gulp.watch(['js/app/*.js', 'templates/**/*', 'index.html', 'Gulpfile.js'], reload);
});



gulp.task("build", function (cb) {
    return runSequence("clean", ["images", "fonts", "css:optimized"], cb);
});

gulp.task("serve", ["build"], function () {
    browserSync.init(["index.html"], {
        server: {
            port:3000,
            base: "/",
        }
    });

    gulp.start(["watch"]);
});
