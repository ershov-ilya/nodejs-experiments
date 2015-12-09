/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 17:04
 */

var util = require('util');

// util.isArray
// util.isRegExp
// util.format

//util.pump(process.stdin, process.stdout); // stdin >> stdout
var jsdom = require('jsdom');
console.log(util.inspect(jsdom, true, null, true));
