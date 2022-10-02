const {src,dest,parallel} = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const minify = require("gulp-minify-css");

function js(){
    return src([
        "js/jquery-3.6.0.min.js",
        "js/bootstrap.bundle.min.js",
        "js/main.js"
    ]).pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("js/"));
}

function css(){
    return src([
        "css/bootstrap.min.css",
        "css/styles.css"
    ]).pipe(concat("styles.min.css"))
    .pipe(minify())
    .pipe(dest("css/"));
}

exports.js = js;
exports.css = css;
exports.default = parallel([js,css]);       