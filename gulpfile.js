// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var babel = require('gulp-babel');
var dest = require('gulp-dest');
var cleanCSS = require('gulp-clean-css');

var src = {
    js: ['app/js/*.js'],
    jsx: ['app/components/**/*.jsx'],
    index: ['app/*.html','app/*.js'],
    sass: ['app/css/*.scss', 'app/components/**/*.scss'],
    models: ['app/models/*.js'],
    img: ['app/img/**/*'],
    assets: ['app/assets/*']
};


var dst = {
    js: 'dist/public/js',
    jsx: 'dist/public/components',
    css: 'dist/public/css',
    fonts: 'dist/public/fonts',
    index: 'dist/',
    models: 'dist/public/models',
    img: 'dist/public/img',
    assets: 'dist/public/assets'
}

var jsLibraries = [
    'node_modules/react/dist/react.js',
    'node_modules/react-dom/dist/react-dom.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/requirejs/require.js',
    'node_modules/backbone/backbone-min.js',
    'node_modules/underscore/underscore-min.js'
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

gulp.task('copyImages', function() {
    return gulp.src(src.img)
        .pipe(gulp.dest(dst.img));
})

gulp.task('lint', function() {
    return gulp.src(src.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(src.sass)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest(dst.css));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(src.js)
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(dst.js));
});

gulp.task('assets', function() {
    return gulp.src(src.assets)
    .pipe(gulp.dest(dst.assets));
});

gulp.task('jsx', function() {
    return gulp.src(src.jsx)
    .pipe(babel({
        plugins: ['transform-react-jsx']
    }))
    .pipe(dest('public/components/:name.js'))
    .pipe(gulp.dest(dst.jsx));
});

gulp.task('models', function() {
    return gulp.src(src.models)
    .pipe(gulp.dest(dst.models));
})

//FINAL TASKS
gulp.task('watch', function() {
    gulp.watch(src.js, ['lint', 'scripts']);
    gulp.watch(src.jsx, ['jsx']);
    gulp.watch(src.sass, ['sass']);
    gulp.watch(src.index, ['copyIndex']);
});

gulp.task('clean', function() {
    return gulp.src('./dist', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('build', ['copyLibraries', 'copyIndex', 'copyImages', 'scripts', 'jsx', 'assets', 'models', 'sass']);
