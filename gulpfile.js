/*Lo basico de gulp: 
-Son funciones de JavaScript
-Para mandar a llamar todas las funciones debes poner exports.default = series(hola, etc, etc2);
 */

const {series, src, dest, watch,parallel } = require('gulp'); //Sirve para importar 
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

const paths ={
    imagenes: 'src/img/**/*',
    scss:'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

// Funcion que compila SASS 
function css(){
    return src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe( dest('./build/css') );
}
//Sirve par minificar en css y sea menos pesado
function minificarCss(){
    return src(paths.scss)
        .pipe(sass(({
            outputStyle:'compressed'
        })).on('error', sass.logError))
        .pipe( dest('./build/css') );
}

function JavaScript(){
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('build/js'));
}

function imagenes() {
    return src(paths.imagenes)
        .pipe( imagemin() )
        .pipe( dest('./build/img') )
        .pipe( notify({message: 'Imagenes Minificadas'}) );
}


function watchArchivos(){
    watch(paths.scss, css ); // * = La carpeta actual, ** = todos lo archivos con esa extensión.
    watch(paths.js, JavaScript) ;
}

function versionWebp(){
   return src(paths.imagenes)
        .pipe( webp() )
        .pipe( dest('./build/img') )
        .pipe( notify({message: 'Version webp'}) );
}

exports.css = css;
exports.imagenes = imagenes;
exports.minificarCss = minificarCss;
exports.watch = watchArchivos;
exports.default = series(css, imagenes, JavaScript, versionWebp, watchArchivos);