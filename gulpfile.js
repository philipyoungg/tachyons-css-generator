var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

// PATH destination

var path = {
  SASS: 'src/*.scss',
  DEST: 'dist'
};

// SASS processing

gulp.task('process', function() {

  return gulp.src(path.SASS)
    .pipe(sass())
    .pipe(autoprefixer('last 20 version'))
    .pipe(uglifycss({
      'maxLineLen': 80,
      'uglyComments': true
    }))
    .pipe(gulp.dest(path.DEST_SRC))
});

//  Gulp Watch


gulp.task('watch',[], function(){
  gulp.watch(path.SASS, ['process']);
})

// Default Gulp Task

gulp.task('default', ['watch']);
