# Gulp Assembler

Для работы в VS code необходимо установить расширение __Path Autocomplete__, так же добавить следующие настройки в __settings.json__ (F1 - settings.json) <br>
[Pastebin](https://pastebin.com/6jhCiEvj)

# Работа со сборщиком

+ Путь к картинкам в HTML файлах необходимо указывать через __@img/__
+ Для создания SVG-спрайтов из SVG картинок, в консоль необходимо написать команду - 
``` npm run svgSprive ```
+ Режим работы __dev__ и __build__ описан в патче __9__ в __Логе изменений__

<details>
  <summary>Лог изменений</summary>
  (название коммитов может отличаться от их оригинального названия в истории) <br>
  
__15/02/22 # Patch 1__
> Initial commit <br>
> add: file architecture

__17/02/22 # Patch 2__
> add: watcher function
>> watcher наблюдает за изменением файлов.

> add: file cleaner function
>> cleaner выполняет чистку всех файлов в папке dist, и после повторноговключения сборщика, собирает все файлы обратно.

> add: html file assembly function
>> html assembler выполняет функцию сборки файлов из папки html по путиsrc/html в папку dist/ .

__19/02/22 # Patch 3__
> add: correct img paths function
>> функция установки правильных путей файлов из папок в src/ в папкуdist/ .

__25/02/22 # Patch 4__
> add: image to webp format
>> функция преобразует файлы изображений (.jpg, .png) > .webp формат,для ускорения загрузки и уменьшения объёма файла.

> add: visual file version
>> данная функция, предотвращает кеширования файлов браузером, путёмдобавления даты последнего запуска сборщика. Так же добавлен раздел "лог изменений" в README.md файл, для объяснения всех функций коммитов.

__26/02/22 # Patch 5__
> add: live server
>> Авто-обновление страницы локального сервера при сохранении кода.

> add: scss processing
>> Сборка Scss файла в css файл.
>>> + Авто-префиксы для кроссбраузерности.
>>> + Оптимизация @media запросов, путём сборки одинаковых разширений в 1 запрос.
>>> + Вывод webp картинок для не поддерживаемых браузеров, так и для поддерживающих. 
>>> + Сжатие css файла, создание не сжатой копии для удобного чтения.

__27/02/22 # Patch 6__

> add: webpack, support ES6 modules
>> Добавлена поддержка ES6, а так же самописных модулей. Подключение сторонних модулей, выполняеться командой описанной в док-ции модуля. Для самописных - <br> ```import * as {MODULE-NAME}.js from "{./modules/{MODULE-NAME}.js}"``` <br> # {MODULE-NAME} - имя модуля, фигурные скобки не нужны.

__28/02/22 # Patch 7__

> add: image optimization
>> Оптимизация картинок, создания webp.

__2/03/22 # Patch 8__
> add: fonts assembler function
>> Функция обработки файлов шрифтов # .otf > .ttf > .woff & .woff2, авто-добавление всех шрифтов с их кеглем в __scss/fonts.scss__

> add: svg sprites assembler function
>> Функция создания svg-спрайтов из нескольких svg файлов. Для выполнения этой функции, в терминал нужно написать данную команду: 
``` npm run svgSprive ```

__3/03/22 # Patch 9__
> add: dev / build mode
>> Добавлено 2 режима работы сборщика. <br>
>> __dev__
>>> Dev - облегчённый режим сборщика, оптимизация JS-скриптов и картинок отсутствует, из-за чего сборщик загружается быстрее. <br> <br>

>> __build__
>>> Build - режим работы сборщика, работают все таски, создание zip-архива с результатом _{in dev}_. 
</details>