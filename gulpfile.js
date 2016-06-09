// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');


var src = {
    js: ['app/js/*.js'],
    html: ['app/index.html'],
    jsx: ['app/*.jsx']
};

var dst = {
    js: 'dist/public/js',
    css: 'dist/public/css',
    fonts: 'dist/public/fonts',
    html: 'dist/',
    jsx: 'dist/'
}
 
 
// FUNCTIONS
var copyReact = function() {
    gulp.src('./node_modules/react/dist/react.min.js')
    .pipe(gulp.dest(dst.js));
};

var copyBootstrap = function() {
    var bootstrapSrc = './node_modules/bootstrap/dist/';
    
    gulp.src(bootstrapSrc + 'js/bootstrap.min.js')
    .pipe(gulp.dest(dst.js));
    
    gulp.src(bootstrapSrc + 'css/bootstrap.min.css')
    .pipe(gulp.dest(dst.css));
    
    gulp.src(bootstrapSrc + 'fonts/*')
    .pipe(gulp.dest(dst.fonts));
}


var copyLibraries = function() {
    copyReact();
    copyBootstrap();
};

var copyHtml = function() {
    gulp.src(src.html)
    .pipe(gulp.dest(dst.html));
    

};


//TASKS
gulp.task('copyFiles', function() {
    copyLibraries();
    copyHtml();
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


//FINAL TASKS
gulp.task('watch', function() {
    gulp.watch(['app/js/*.js', 'app/*.jsx'], ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('clean', function() {
    	return gulp.src('./dist/**', {read: false})
		.pipe(clean({force: true}));
});

gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
gulp.task('build', ['clean', 'copyFiles', 'scripts']);
