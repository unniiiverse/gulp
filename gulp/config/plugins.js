import replace from "gulp-replace"; // Поиск и замена
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления

export const plugins = {
    replace: replace,
    browsersync: browsersync,
    newer: newer,
}