const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css() {
  return src('src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/css'));
}

function watcher() {
  watch('src/scss/**/*.scss', css);
}

exports.default = series(css, watcher);
exports.build = css;
