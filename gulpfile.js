// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');


var src = {
    js: ['app/js/*.js'],
    jsx: ['app/components/**/*.jsx', 'app/*.jsx'],
    index: ['app/*.html','app/*.js'],
};


var dst = {
    js: 'dist/public/js',
    jsx: 'dist/',
    css: 'dist/public/css',
    fonts: 'dist/public/fonts',
    index: 'dist/'
}

var jsLibraries = [
    'node_modules/react/dist/react.min.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ];
    
var cssLibraries = [
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ];
    
var fontsLibraries = [
    'node_modules/bootstrap/dist/fonts/*'
    ];
    
    
//COPY LIBRARIES
gulp.task('copyJavascriptLibs', function() {
    return gulp.src(jsLibraries)
    .pipe(gulp.dest(dst.js));
});

gulp.task('copyCssLibs', function() {
    return gulp.src(cssLibraries)
    .pipe(gulp.dest(dst.css));
});

gulp.task('copyFontsLibs', function() {
    return gulp.src(fontsLibraries)
    .pipe(gulp.dest(dst.fonts));
});

gulp.task('copyLibraries', ['copyJavascriptLibs', 'copyCssLibs', 'copyFontsLibs']);

//TASKS
gulp.task('copyIndex', function() {
    return gulp.src(src.index)
        .pipe(gulp.dest(dst.index));
});

gulp.task('lint', function() {
    return gulp.src(src.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(src.js)
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dst.js));
});

gulp.task('babel', function() {
    return gulp.src(src.jsx)
    .pipe(sourcemaps.init())
    .pipe(babel({
        plugins: ['transform-react-jsx']
    }))
    // .pipe(sourcemaps.write('./'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dst.jsx));
})

//FINAL TASKS
gulp.task('watch', function() {
    gulp.watch(['app/js/*.js', 'app/*.jsx'], ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('clean', function() {
    return gulp.src('./dist', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('build', ['copyLibraries', 'copyIndex', 'scripts']);
