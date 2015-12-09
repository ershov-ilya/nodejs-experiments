/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 17:01
 */

var url = require('url');

var obj = url.parse('http://examples.burningbird.net:8124/?file=main#somehash');
console.log(obj);
