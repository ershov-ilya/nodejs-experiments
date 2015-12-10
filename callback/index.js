/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 10.12.2015
 * Time: 13:04
 */

var obj =function() { };
obj.prototype.doSomething = function(arg1, arg2_) {
    var arg2 = typeof(arg2_) === 'string' ? arg2_ : null;
    var callback_ = arguments[arguments.length - 1];
    callback = (typeof(callback_) == 'function' ? callback_ : null);
    if (!arg2)
        return callback(new Error('second argument missing or not a string'));
    callback(arg1);
};

var test = new obj();
try {
    test.doSomething('test', 3.55, function(err,value) {
        if (err) throw err;
        console.log(value);
    });
} catch(err) {
    console.error(err);
    console.error(typeof err);
    console.error(err instanceof Error);
}
console.error('Finished');
