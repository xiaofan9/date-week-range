const { src, dest, series } = require('gulp');
const jsonEditor = require("gulp-json-editor");
const { Reflect } = require('core-js');
const merge = require('merge');
const sass = require('gulp-sass')(require('sass'));
const sassGlob = require('gulp-sass-glob');
const cssnano = require('gulp-cssnano');

const packageFoldPath = './';
const cssFoldPath = './dist';

function package() {
  return src("package.json")
    .pipe(jsonEditor(function(json) {
      const existJson = {
        scripts: {
          test: 'echo "Error: no test specified" && exit 1'
        }
      };
      const tmpJson = merge(json, existJson);

      Reflect.deleteProperty(tmpJson, 'devDependencies');

      return tmpJson;
    })).pipe(dest(packageFoldPath));
}

function css() {
  return src("./src/style/index.scss").pipe(sassGlob())
  .pipe(sass()).pipe(cssnano()).pipe(dest(cssFoldPath));
}

exports.default = series(css, package)