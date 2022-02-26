import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css"; // Сжатие CSS
import webpcss from "gulp-webpcss"; // Вывод WEBP картинок
import autoprefixer from "gulp-autoprefixer"; // Кроссбраузерность
import groupCssMediaQueries from "gulp-group-css-media-queries"; // Группировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: ".webp",
            noWebpClass: ".no-webp"
        }))
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
        }))
        // Раскомментировать - если нужен НЕ сжатый файл
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}