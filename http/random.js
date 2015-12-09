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
const port = 1333;

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(randomInt(0,999999)+'\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
