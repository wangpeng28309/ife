var gulp = require("gulp"),
    sass = require("gulp-ruby-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    cleancss = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename"),
    htmlmin = require("gulp-htmlmin"),
    imagemin = require("gulp-imagemin"),
    cache = require("gulp-cache"),
    livereload = require("gulp-livereload");
    pngquant = require("gulp-pngquant");

gulp.task("html", function() {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"))
        .pipe(livereload());
});

gulp.task("css", function() {
    return sass("src/css/*.scss", {style: "compressed"})
        .pipe(autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"))
        .pipe(cleancss())
        .pipe(concat("main.css"))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("dist/css"))
        .pipe(livereload());
});

gulp.task("img", function() {
    return gulp.src("src/img/*.{png,jpg,gif,ico}")
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }, { cleanupIDs: false }],
            use: [pngquant()]
        })))
        .pipe(gulp.dest("dist/img"))
        .pipe(livereload());
});

gulp.task("clean", function() {
    return gulp.src(["dist/", "dist/css", "dist/img"], { read: false })
        .pipe(clean());
});

gulp.task("default", ["clean"], function() {
    gulp.start("html", "css", "img");
});

gulp.task("watch", function() {
    livereload.listen();
    gulp.watch("src/*.html", ["html"]);
    gulp.watch("src/css/*.scss", ["css"]);
    gulp.watch("src/img/*.{png,jpg,gif,ico}", ["img"]);
});