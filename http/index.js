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
const port = 1337;

http.createServer((req, res) => {
    if(req.url=='/favicon.ico') return false;
    console.log('Connection '+req.url);

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    if(req.url=='/stop') {
        res.end('Stop command\n');
        process.exit(0);
    }
    res.end('Hello World\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('SIGTERM', function () {
    console.log("Closing");
    http.close();
});
