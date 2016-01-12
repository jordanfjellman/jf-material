var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var cssnext = require('postcss-cssnext');

gulp.task('styles', function() {
	var processors = [
		autoprefixer({browsers: ['last 2 versions']}),
		cssnext({})
	];

	return gulp
		.src('./src/styles/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./build'));
});

gulp.task('watch:styles', function() {
	return gulp
		.watch('**/*.css', ['styles']);
});
