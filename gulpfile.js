var gulp = require('gulp');
var csso = require('gulp-csso');
var react = require('gulp-react');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var changed = require('gulp-changed');

var paths = {
    scripts: ['src/jsx/*.js', 'src/js/*.js'],
    css: ['src/scss/*.scss', 'src/css/*.css']
};

gulp.task('sass', function () {
    //编译并压缩src/scss目录下的文件,输出到build/css
    gulp.src('src/scss/*.scss')
        .pipe(changed('./build/css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(gulp.dest('./build/css'));

    //压缩src/css目录下的文件,输出到build/css
    gulp.src('src/css/*.css')
        .pipe(changed('./build/css'))
        .pipe(csso())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('scripts', function () {
    //编译并压缩src/jsx目录下的文件,输出到build/js
    gulp.src('src/jsx/*.js')
        .pipe(changed('./build/js'))
        .pipe(react())
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));

    //压缩src/js目录下的文件,输出到build/js
    gulp.src('src/js/*.js')
        .pipe(changed('./build/js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.css, ['sass']);
});

gulp.task('default', ['watch', 'scripts', 'sass']);