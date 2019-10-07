var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require("browser-sync").create();

function compile (){

    return (
        gulp.src("sass/**/*.scss")
        .pipe(sass()).on("error", sass.logError)
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream())
    );
};

function reload(done) {
    browserSync.reload();
    done();
 };


function watch(){
    browserSync.init({
      server: {
        baseDir: "./"}
});


gulp.watch("sass/**/*.scss", compile);
gulp.watch("index.html", reload)};



exports.watch = watch;