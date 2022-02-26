# Gulp Assembler

Для работы в VS code необходимо установить расширение __Path Autocomplete__
Путь к картинкам в HTML файлах необходимо указывать через __@img/__ (в папке dist, всё будет в читаемых для браузера путях)

<details>
  <summary>Лог изменений</summary>
  (название коммитов может отличаться от их оригинального названия в истории) <br>
  
__15/02/22__
> Initial commit <br>
> add: file architecture

__17/02/22__
> add: watcher function
>> watcher наблюдает за изменением файлов.

> add: file cleaner function
>> cleaner выполняет чистку всех файлов в папке dist, и после повторноговключения сборщика, собирает все файлы обратно.

> add: html file assembly function
>> html assembler выполняет функцию сборки файлов из папки html по путиsrc/html в папку dist/ .

__19/02/22__
> add: correct img paths function
>> функция установки правильных путей файлов из папок в src/ в папкуdist/ .

__25/02/22__
> add: image to webp format
>> функция преобразует файлы изображений (.jpg, .png) > .webp формат,для ускорения загрузки и уменьшения объёма файла.

> add: visual file version
>> данная функция, предотвращает кеширования файлов браузером, путёмдобавления даты последнего запуска сборщика. Так же добавлен раздел "лог изменений" в README.md файл, для объяснения всех функций коммитов.

__26/02/22__
> add: live server
>> Авто-обновление страницы локального сервера при сохранении кода.

> add: scss processing
>> Сборка Scss файла в css файл.
>>> + Авто-префиксы для кроссбраузерности.
>>> + Оптимизация @media запросов, путём сборки одинаковых разширений в 1 запрос.
>>> + Вывод webp картинок для не поддерживаемых браузеров, так и для поддерживающих. 
>>> + Сжатие css файла, создание не сжатой копии для удобного чтения.

</details>