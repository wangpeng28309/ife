var gulp = require("gulp"),
    htmlmin = require("gulp-htmlmin");

gulp.task("html",function(){
    return gulp.src("src/*.html")
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest("dist/"))
    });
