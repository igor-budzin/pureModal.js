"use strict";

var gulp = require('gulp');

gulp.task('images', function() {
	gulp.src('./img/**')
		.pipe(gulp.dest('./img'));
});
