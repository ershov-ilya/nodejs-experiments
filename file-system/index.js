/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 15:27
 */

// загрузка модуля http
var http = require('http');
var fs = require('fs');

// создание http-сервера
http.createServer((req, res) => {
// открытие helloworld.js и чтение контента
    fs.readFile('test.txt', 'utf8', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        if (err)
            res.write('Could not find or open file for reading\n');
        else
// при отсутствии ошибки вывод файла на экран клиента
            res.write(data);
        res.end();
    });
}).listen(8124, () => {
    console.log('bound to port 8124');
});
console.log('Server running on 8124/');
