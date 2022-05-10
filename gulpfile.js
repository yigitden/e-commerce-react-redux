const {src,dest,watch,series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
 
function buildStyles() {
    return src('src/sass/*.scss')
    .pipe(sass())
     .pipe(dest('public/css'))
}


function watchTask() {
    watch(['src/sass/*.scss'],buildStyles)
}

exports.default = series(buildStyles, watchTask)