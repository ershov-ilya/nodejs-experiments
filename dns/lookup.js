/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 16:57
 */

var dns = require('dns');
dns.lookup('effetto.pro',function(err,ip) {
    if (err) throw err;
    console.log(ip);
});
