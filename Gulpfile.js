
    // -[] Sass compiler -
    // [] AutoPrefix the CSS -
    // [] Find a watch and reload


    const gulp = require("gulp");
    const sass = require("gulp-sass");
    sass.compiler = require('sass');
    const autoprefixer = require("gulp-autoprefixer");
    const rename = require('gulp-rename')
    const cleanCSS = require('gulp-clean-css')


   
    // *****THIS ONE IS UNDER CONSTRUCTION*****
    function postCSSCompile(){

        const postcss = require("gulp-postcss");
        const tailwindcss = require('tailwindcss');
        
        return gulp.src('./src/scss/main.scss')
        .pipe(postcss([tailwindcss]))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename("styles.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./src/scss'))
    }
    

    function scssStyles(){

        return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename("styles.css"))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./src/'))
    }

    
    // function scssCompile() {
    //     return gulp.src('./src/scss/compiled-styles.scss', {allowempty : true})
    //     .pipe(sass().on('error', sass.logError))
    //     .pipe(gulp.dest('./src/scss'))
    // };

    // function autoprefix() {
    //     return gulp.src('./src/scss/compiled-styles.css')
    //     .pipe(autoprefixer())
    //     .pipe(rename("final-styles.css"))
    //     .pipe(cleanCSS({compatibility: 'ie8'}))
    //     .pipe(gulp.dest('./src'))
    // }





    


    function watchFiles() {
        console.log("\r\n Watching Scss files \r\n");
        
        gulp.watch('./src/scss/**/*.scss', gulp.series(scssStyles));
    }

    

exports.styles = scssStyles;
exports.watch = watchFiles;
exports.compile = postCSSCompile


// Testing Commands
// exports.postCSSCompile = gulp.series(postCSSCompile);
// exports.scssCompile = scssCompile;
// exports.autoprefix = autoprefix;
