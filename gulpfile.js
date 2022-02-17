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

// Выполенение сценария по умолчнаию 
gulp.task('default', copy);