var gulp = require('gulp');
var changed = require('gulp-changed');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

var paths = {
    scripts: 'src/*.js',
    css: 'src/*.scss',
    output: 'dist'
};

gulp.task('jsx', function(){
    return gulp.src(paths.scripts)
        .pipe(changed(paths.output))
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(gulp.dest(paths.output))
        .pipe(uglify())
        .pipe(rename("all.min.js"))
        .pipe(gulp.dest(paths.output));
});

gulp.task('sass', function(){
    return gulp.src(paths.css)
        .pipe(changed(paths.output))
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('all.css'))
        .pipe(gulp.dest(paths.output))
        .pipe(minifyCss())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest(paths.output));
});

gulp.task('watch', function(){
    gulp.watch(paths.scripts, ['jsx']);
    gulp.watch(paths.css, ['sass']);
});

gulp.task('default', ['watch', 'jsx', 'sass']);