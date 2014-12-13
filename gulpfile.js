var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var reporters = require('jasmine-reporters');

gulp.task('test', function() {
  return gulp.src('test/spec/**/*.js')
    .pipe(plugins.jasmine({
      reporter: new reporters.JUnitXmlReporter({
      	savePath: 'test/results/'
      })
    }));
});