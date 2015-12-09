/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 09.12.2015
 * Time: 16:58
 */

var dns = require('dns');

dns.reverse('192.162.240.71', function(err,domains) {
    domains.forEach(function(domain) {
        console.log(domain);
    });
});
