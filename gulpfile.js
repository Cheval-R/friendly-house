import gulp, { src } from 'gulp';
import browserSync from 'browser-sync';
import * as sassPkg from 'sass';
import gulpSass from 'gulp-sass';
import gulpCssimport from 'gulp-cssimport';
import { deleteAsync } from 'del';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import sourceMaps from 'gulp-sourcemaps';
import gulpIMG from 'gulp-image';
import gulpWebp from 'gulp-webp';
// import gulpAvif from 'gulp-avi;f'
import { stream as critical } from 'critical';
import gulpif from 'gulp-if';
import autoprefixer from 'gulp-autoprefixer';
import babel from 'gulp-babel';

const prepros = true;

let dev = false;

const sass = gulpSass(sassPkg);

const allJS = [
	"src/libs/jquery-3.7.1.min.js",
	"src/libs/inputmask.js",
	"src/libs/jquery-ui.min.js",
	"src/libs/just-validate.production.min.js",
	"src/libs/just-validate-plugin-date.production.min.js",
	"src/libs/slick.min.js",
]

// Задачи

export const html = () =>
	gulp
		.src('src/*.html')
		.pipe(htmlmin({
			removeComments: true,
			collapseWhitespace: true,
		}))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());

export const style = () => {
	if (prepros) {
		return gulp
			.src('src/scss/**/*.scss') // Следим за SCSS файлами
			.pipe(gulpif(dev, sourceMaps.init()))
			.pipe(sass().on('error', sass.logError))
			.pipe(autoprefixer())
			.pipe(cleanCSS({
				2: {
					specialComments: 0
				}

			}))
			.pipe(gulpif(dev, sourceMaps.write('./../maps')))
			.pipe(gulp.dest('dist/css'))
			.pipe(browserSync.stream());
	}
	return gulp
		.src('src/css/index.css')
		.pipe(gulpif(dev, sourceMaps.init()))
		.pipe(gulpCssimport({
			extensions: ['css'],
		}))
		.pipe(autoprefixer())
		.pipe(cleanCSS({
			2: {
				specialComments: 0
			}
		}))
		.pipe(gulpif(dev, sourceMaps.write('./../maps')))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
}

export const js = () =>
	gulp
		.src([...allJS, 'src/js/**/*.js'])
		.pipe(gulpif(dev, sourceMaps.init()))
		.pipe(babel({
			presets: ['@babel/preset-env'],
			ignore: [...allJS, 'src/js/**/*.min.js']
		}))
		.pipe(terser())
		.pipe(concat('index.min.js'))
		.pipe(gulpif(dev, sourceMaps.write('./../maps')))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.stream());

export const img = () =>
	gulp
		.src('src/img/**/*.{jpg,jpeg,png,svg}',
			{
				encoding: false,
			})
		.pipe(gulpif(!dev, gulpIMG(
			{
				optipng: ['-i 1', '-strip all', '-fix', '-o7', '-force'],
				pngquant: ['--speed=1', '--force', 256],
				zopflipng: ['-y', '--lossy_8bit', '--lossy_transparent'],
				jpegRecompress: ['--strip', '--quality', 'medium', '--min', 40, '--max', 80],
				mozjpeg: ['-optimize', '-progressive'],
				gifsicle: ['--optimize'],
				svgo: true,
			}
		)))
		.pipe(gulp.dest('dist/img'))
		.pipe(browserSync.stream());

export const webp = () =>
	gulp
		.src('src/img/**/*.{jpg,jpeg,png}', {
			encoding: false,
		})
		.pipe(gulpWebp({
			quality: 80
		}))
		.pipe(gulp.dest('dist/img'))
		.pipe(browserSync.stream());

// export const avif = () =>
// 	gulp
// 		.src('src/img/**/*.{png,jpg,svg}',			{
// 	encoding: false,
// })
// 		.pipe(gulpAvif())
// 		.pipe(gulp.dest('dist/img'))
// 		.pipe(browserSync.stream());

export const critCSS = () =>
	gulp
		.src('dist/*.html')
		.pipe(critical({
			base: 'dist/',
			inline: true,
			css: ['dist/css/index.css']
		}))
		.on('error', err => {
			console.error(err.message);
		})
		.pipe(gulp.dest('dist'));

export const copy = () =>
	gulp
		.src([
			'src/font/**/*',
			// 'src/img/**/*',
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
		},
		tunnel: true,
	})

	gulp.watch('./src/**/*.html', html);
	gulp.watch(prepros ? './src/scss/**/*.scss' : './src/css/**/*.css', style); // Следим за SCSS или CSS файлами
	gulp.watch('src/img/**/*.{jpg,jpeg,png,svg}', img)
	gulp.watch('./src/js/**/*.js', js);
	gulp.watch('./src/font/**/*', copy);
	gulp.watch('src/img/**/*.{jpg,jpeg,png}', webp);
	// gulp.watch('src/img/**/*.{jpg,jpeg,png}', avif);
};

export const clear = (done) => {
	deleteAsync(['dist/**/*'], { force: true }).then(() => done());
};

// Запуск
export const develop = async () => {
	dev = true;
}

export const base = gulp.parallel(html, style, js, img, webp, copy);

export const build = gulp.series(clear, base, critCSS, server);

export default gulp.series(develop, base, server);
