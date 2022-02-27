// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// Делегирование значений в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js"; // Сборка всех файлов из src/ в dist/ 
import { cleaner } from "./gulp/tasks/cleaner.js"; // Очистка папки перед следующим запуском сборщика
import { html } from "./gulp/tasks/html.js"; // Обработка HTML файлов
import { server } from "./gulp/tasks/server.js"; // Локальный сервер
import { scss } from "./gulp/tasks/scss.js"; // Обработка SASS(SCSS) файлов
import { js } from "./gulp/tasks/js.js"; // Обработка Java Script файлов

// Наблюдатель за изменениями
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.parallel(copy, html, scss, js);

// Постоение сценаривев
const dev = gulp.series(cleaner, mainTasks, gulp.parallel(watcher, server));

// Выполенение сценария по умолчнаию 
gulp.task('default', dev);