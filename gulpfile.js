import gulp from 'gulp';
import browserSync from 'browser-sync';
import * as sassPkg from 'sass';
import gulpSass from 'gulp-sass';
import gulpCssimport from 'gulp-cssimport';
import { deleteAsync } from 'del';

const prepros = true;

const sass = gulpSass(sassPkg);

// Задачи

export const html = () =>
    gulp
        .src('src/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());

export const style = () => {
    if (prepros) {
        return gulp
            .src('src/scss/**/*.scss') // Следим за SCSS файлами
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.stream());
    }
    return gulp
        .src('src/css/index.css')
        .pipe(gulpCssimport({
            extensions: ['css'],
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

export const js = () =>
    gulp
        .src('src/js/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());

export const copy = () =>
    gulp
        .src([
            'src/font/**/*',
            'src/img/**/*'
        ], {
            base: 'src',
            encoding: false,
        })
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream({
            once: true
        }));

export const server = () => {
    browserSync.init({
        ui: false,
        notify: false,
        server: {
            baseDir: 'dist'
        }
    })

    gulp.watch('./src/**/*.html', html);
    gulp.watch(prepros ? './src/scss/**/*.scss' : './src/css/**/*.css', style); // Следим за SCSS или CSS файлами
    gulp.watch('./src/js/**/*.js', js);
    gulp.watch([
        './src/font/**/*',
        './src/img/**/*',
    ], copy);
};

export const clear = (done) => {
    deleteAsync(['dist/**/*'], { force: true }).then(() => done());
};

// Запуск

export const base = gulp.parallel(html, style, js, copy);

export const build = gulp.series(clear, base);

export default gulp.series(base, server);
