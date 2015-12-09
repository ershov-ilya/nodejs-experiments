/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 07.12.2015
 * Time: 17:34
 */

const http = require('http');

const hostname = '127.0.0.1';
const port = 1338;
const DEBUG = false;
var connections = 3000;
var active=0;

http.createServer((req, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    var options = {
        host: 'localhost',
        port: 2001, // from script: http/sequential.js
        path: '/',
        method: 'GET'
    };

    for (var i = 0; i <= connections; i++) {
        active++;
        // совершение запроса с последующим его завершением
        // для закрытия соединения
        http.request(options, (res)=>{
            if(DEBUG) console.log('STATUS: ' + res.statusCode);
            if(DEBUG) console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                if(DEBUG) console.log('BODY: ' + chunk);
                chunk=chunk.replace(/[^0-9]/g,'');
                response.write(chunk+' ');
                active--;
                if(DEBUG) console.log('active: '+active);

                // Проверка на завершение задачи во всех callback'ах
                if(!active) response.end('Task done\n');
            });
        }).end();
    }

    //response.end('Task done\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
