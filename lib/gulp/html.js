"use strict";

var gulp = require('gulp');

gulp.task('html', function() {
	gulp.src('./*.html')
		.pipe(gulp.dest('./'));
});

