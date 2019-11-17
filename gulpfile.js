var gulp = require('gulp'),
    uglify       = require('gulp-uglify'), 
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename');

gulp.task('nanofy', function() {
    
    return gulp.src('src/css/*')  
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'));

});
    
gulp.task('uglify', function() {

    return gulp.src('src/js/*') 
    .pipe(uglify()) 
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/js')); 

});



    

