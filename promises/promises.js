console.log('start');

process.state={value: 0};
// Создаётся объект promise
let promise = new Promise((resolve, reject) => {
	
	setTimeout(() => {
		// переведёт промис в состояние fulfilled с результатом "result"
		reject("Текст Error");
		resolve("значение результата");
		reject(new Error("Объект Error"));
	}, 1000);
	
});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
	.then(
		result => {
			// первая функция-обработчик - запустится при вызове resolve
			console.log('\x1b[33m%s\x1b[0m',"Fulfilled: ", result); // result - аргумент resolve
		},
		error => {
			// вторая функция - запустится при вызове reject
			console.log('\x1b[31m%s\x1b[0m',"Rejected: ", error); // error - аргумент reject
		}
	);
console.log('end');
