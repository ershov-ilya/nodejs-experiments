/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 11.12.2015
 * Time: 17:04
 */

var inputChecker = require('inputcheck').inputChecker;
// тестирование нового объекта и обработка события
var ic = new inputChecker('Shelley','output');
ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8');
});
ic.addListener('echo', function( data) {
    console.log(this.name + ' wrote ' + data);
});
ic.on('end', function() {
    process.exit();
});
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    ic.check(input);
});
