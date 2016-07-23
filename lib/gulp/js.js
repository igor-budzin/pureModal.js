"use strict";

var gulp = require('gulp');

gulp.task('js', function() {
	gulp.src('./js/**')
		.pipe(gulp.dest('./js'));
});

