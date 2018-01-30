var gulp         = require('gulp');
	sass 		 = require('gulp-sass'),
	browserSync  = require('browser-sync').create(),
	inlcludefile = require('gulp-file-include'),
	jsImport 	 = require('gulp-js-import'),
	del 		 = require('del'),
	sftp 		 = require ('gulp-sftp'), //Загрузка на сервер
	GulpSSH      = require('gulp-ssh'),       //Загрузка на сервер
	runSequence  = require('run-sequence'); //Выполнение тасков последовательно



//SASS
gulp.task('sass', function () {
	return gulp.src(['app/scss/**/*.scss', '!app/scss/custom/**/*.scss'])
			.pipe(sass())
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.stream());	
});

//JS IMPORT
gulp.task('js-import', function () {
  return gulp.src('app/js_app/**/**')
        .pipe(jsImport({hideConsole: true}))
        .pipe(gulp.dest('app/js'));
});

//CLEAN DIST
gulp.task('del', function () {
 del(['dist']);
});


gulp.task('file-include', function() {
//include INDEX.HTML
  gulp.src(['app/templates/index.html'])
    .pipe(inlcludefile({
      prefix: '@@',
      basepath: '@file'
    })) 
    .pipe(gulp.dest('app/'));

//INCLUDE PAGES HTML
  gulp.src(
  	[
  		'app/templates/site/**/*.html', 
  		'!app/templates/site/modules/**/*.html',
  		'!app/templates/site/widgets/**/*.html',
  	])
    .pipe(inlcludefile({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('app/views/site'));    
});

//BROWSER SYNC
gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
});

//SAVE FILE IN DIST
gulp.task('dist', function () {
  gulp.src('app/cms/**/*').pipe(gulp.dest('dist/cms'));
  gulp.src('app/css/**/*').pipe(gulp.dest('dist/css'));
  gulp.src(['app/fonts/**/*', '!app/fonts/fonts.scss']).pipe(gulp.dest('dist/fonts'));
  gulp.src('app/images/**/*').pipe(gulp.dest('dist/images'));
  gulp.src('app/js/**/*').pipe(gulp.dest('dist/js'));
  gulp.src('app/seo/**/*').pipe(gulp.dest('dist/seo'));
  gulp.src('app/views/**/*').pipe(gulp.dest('dist/views'));
  gulp.src('app/index.html').pipe(gulp.dest('dist'));
  gulp.src('app/mail.php').pipe(gulp.dest('dist'));
  gulp.src('app/php/**/*').pipe(gulp.dest('dist/php'));
  gulp.src('app/*.pdf').pipe(gulp.dest('dist/'));
});

//WATCH
gulp.task('default', ['browser-sync', 'sass', 'file-include', 'js-import'], function () {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js_app/**/*.js', ['js-import']);
	gulp.watch('app/js_app/**/*.js', browserSync.reload);
	gulp.watch('app/templates/**/*.html', ['file-include']);
	gulp.watch('app/templates/**/*.js', browserSync.reload);
	gulp.watch('app/templates/**/*.js', ['js-import']);
	gulp.watch('app/templates/**/*.scss', ['sass']);
	gulp.watch('app/views/**/*.html', browserSync.reload);
	gulp.watch('app/views/index.html', browserSync.reload);
	gulp.watch('app/images/**/*', browserSync.reload);
	gulp.watch('app/fonts/**/*', browserSync.reload);

});

gulp.task('load', function () {
    return gulp.src('dist/**/*')
        .pipe(sftp({
            host: '92.53.96.179',
            user: 'cy20731',
            pass: '199417788f99F',
            remotePath: 'portfolio/public_html'
        }));
});

//> SSH
var config = {
  host: '92.53.96.165',
  port: 22,
  username: 'cb58494_load',
  password: 'loadfilesloadfiles',
};

var gulpSSH = new GulpSSH({
  ignoreErrors: false,
  sshConfig: config
});

gulp.task('dest', function () {
  return gulp.src('dist/**/*')
    .pipe(gulpSSH.dest('pirmetov/public_html'));
});
//< SSH