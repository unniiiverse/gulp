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
import { copy } from "./gulp/tasks/copy.js";
import { cleaner } from "./gulp/tasks/cleaner.js";
import { html } from "./gulp/tasks/html.js";

// Наблюдатель за изменениями
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}

const mainTasks = gulp.parallel(copy, html)

// Постоение сценаривев
const dev = gulp.series(cleaner, mainTasks, watcher);

// Выполенение сценария по умолчнаию 
gulp.task('default', dev);