/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 16:46
 */

var spawn = require('child_process').spawn,
    pwd = spawn('ls', ['../../../']); // Bash command: ls ../../../

pwd.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});
pwd.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});
pwd.on('exit', function (code) {
    console.log('child process exited with code ' + code);
});
