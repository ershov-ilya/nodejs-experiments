/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 17:13
 */

var events = require('events');

var em = new events.EventEmitter();

var counter = 0;
setInterval(function() { em.emit('timed', counter++); }, 3000); // Событие каждые 3 секунды

em.on('timed', function(data) {
    console.log('timed ' + data);
});
