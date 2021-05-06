let gulp = require('gulp'),
  watch = require('gulp-watch'),
  sass = require('gulp-sass'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify');

gulp.task('sass', () => {
  console.log('running sass and autoprefixer');
  return gulp.src('./dev/sass/style.sass')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/css/'));
})

gulp.task('htmlmin', () => {
  console.log('running htmlmin');
  return gulp.src('./dev/index.php')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./public/'))
})

gulp.task('corecopy', () => {
  console.log('running corecopy');
  return gulp.src('./dev/core.php')
    .pipe(gulp.dest('./public/'))
})

gulp.task('includescopy', () => {
  console.log('running includescopy');
  return gulp.src('./dev/views/includes/**')
    .pipe(gulp.dest('./public/views/includes'))
})

gulp.task('viewscopy', () => {
  console.log('running viewscopy');
  return gulp.src('./dev/views/**')
    .pipe(gulp.dest('./public/views'))
})

gulp.task('imagemin', () => {
  console.log('running imagemin');
  return gulp.src('./dev/img/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./public/img/'))
})

gulp.task('copyfonts', () => {
  return gulp.src('./dev/fonts/**')
    .pipe(gulp.dest('./public/fonts/'))
});

gulp.task('uglify', () => {
  return gulp.src('./dev/js/**')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/'))
});

gulp.task('w', () => {
  return watch('./dev/**',
    gulp.series('htmlmin', 'viewscopy', 'corecopy', 'sass', 'uglify', 'imagemin', 'copyfonts', 'includescopy'))
})