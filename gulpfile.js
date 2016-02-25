// gulpfile.js

var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', function () {
  gulp.watch('./**/*.jsx', ['lint']);
});

gulp.task('lint', function () {
  gulp.src('*.jsx')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
