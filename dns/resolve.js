/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 16:59
 */

var dns = require('dns');
dns.resolve('effetto.pro', 'NS', function(err,domains) {
    domains.forEach(function(domain) {
        console.log(domain);
    });
});
