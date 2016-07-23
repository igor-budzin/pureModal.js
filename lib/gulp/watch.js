"use strict";

var gulp 			= require('gulp'),
	browserSync 	= require('browser-sync').create();

gulp.task('watch', ['build'], function() {

	browserSync.init({
	    server: "./",
	    port: 8080
	});

	gulp.watch('./js/**/*.js', ['js']).on('change', browserSync.reload);
	gulp.watch('./css/**/*.scss', ['css']).on('change', browserSync.reload);
	gulp.watch('./img/**/*', ['images']).on('change', browserSync.reload);
	gulp.watch('./*.html').on('change', browserSync.reload);

});

gulp.task('build', ['css', 'html', 'images', 'js']);
