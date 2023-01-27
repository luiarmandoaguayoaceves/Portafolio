const {src, dest, watch, parallel} = require ('gulp');

//CSS
const sass = require ('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require ('gulp-postcss');
const sourcemaps = ('gulp-sourcemaps');

//IMAGENES
const cache = require ('gulp-cache');
const imagemin = require ('gulp-imagemin');
const webp = require ('gulp-webp');
const avif = require('gulp-avif');

//JAVASCRIPT
const terser = require ('gulp-terser-js');

function css (done){
    src()
    done();
}