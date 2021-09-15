'use strict';


var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('less', function () {
    return gulp.src('./src/styles/*.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});


gulp.watch("./src/styles/*.less", gulp.series('less'));