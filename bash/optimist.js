#!/usr/local/bin/node
/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 17:47
 */

var argv = require('optimist').argv;

// Params use example ./app.js -o 1 -t 2 --one="My" --two="Name"
if(typeof argv.o != 'undefied') console.log('argv.o '+argv.o);
if(typeof argv.t != 'undefied') console.log('argv.t '+argv.t);
if(typeof argv.one != 'undefied') console.log('argv.one '+argv.one);
if(typeof argv.two != 'undefied') console.log('argv.two '+argv.two);
