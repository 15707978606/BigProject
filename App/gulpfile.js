/**
 * Created by Administrator on 2016/10/20.
 */
var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");
var imgmin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var cssmin = require("gulp-minify-css");
gulp.task("copyindex",function(){
    return gulp.src("html/**")
        .pipe(htmlmin({
            minfyCSS:true,
            minfyJS:true,
            removeComments:true,
            collapseWhitespace:true
        }))
        .pipe(gulp.dest("dist/html"));
});
//sass-c
gulp.task("sass-c",function(){
    return gulp.src("css/**.scss")
                .pipe(sass())

                .pipe(gulp.dest("dist/css"));
});
//批量压缩图片
gulp.task("copy-img",function(){
    return gulp.src("images/**")
                .pipe(imgmin())
                .pipe(gulp.dest("dist/images"))
});
gulp.task("js-p",function(){
    return gulp.src("js/lib-flexible/**/*")
                .pipe(gulp.dest("dist/js/lib-flexible"));
});
//css压缩
gulp.task("css-p",function(){
    return gulp.src("dit/css/**.css")
                    .pipe(cssmin())
                    .pipe(gulp.dest("dist/css"));
});
//wathc
gulp.task("watch",function(){
    gulp.watch("index.html",["copyindex"]);
    gulp.watch("images/**",["copy-img"]);
    gulp.watch("css/**.scss",["sass-c"]);
});