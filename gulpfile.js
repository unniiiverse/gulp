// Основной модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js"

// Делегирование значений в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";

// Наблюдатель за изменениями
function watcher() {
    gulp.watch(path.watch.files, copy)
}

// Постоение сценаривев
const dev = gulp.series(copy, watcher);

// Выполенение сценария по умолчнаию 
gulp.task('default', dev);