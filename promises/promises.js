var colors = require('colors');

console.log('start');

process.state={value: 0};
// Создаётся объект promise
let promise = new Promise((resolve, reject) => {
	
	setTimeout(() => {
		// переведёт промис в состояние fulfilled с результатом "result"
		// reject(new Error("время вышло!"));
		resolve("result");
	}, 1000);
	
});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
	.then(
		result => {
			// первая функция-обработчик - запустится при вызове resolve
			console.log("Fulfilled: ".green, result); // result - аргумент resolve
		},
		error => {
			// вторая функция - запустится при вызове reject
			console.log("Rejected: ".red, error); // error - аргумент reject
		}
	);
console.log('end');
