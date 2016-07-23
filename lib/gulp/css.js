"use strict";

var gulp 			= require('gulp'),
	autoprefixer 	= require('gulp-autoprefixer'),
	sass 			= require('gulp-sass');

gulp.task('css', function() {
	gulp.src('./css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({browsers: ['last 2 versions']}))
		.pipe(gulp.dest('./css/'));
});

