var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-js-minify');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('css', function() {
  return gulp.src('./css/*.css')
    .pipe(concat('all.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function() {
  return gulp.src(['./js/jquery.min.js' 
                  ,'./js/bootstrap.min.js'
                  ,'./js/noframework.waypoints.min.js'
                  ,'./js/particles.js'
                  ,'./js/progressbar.min.js'
                  ,'./js/main.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});