const promise = new Promise(function (resolve, reject) {
	setTimeout(function () {
		reject("Something bad happened");
    }, 3 * 1000);
});

promise.then(function (result) {
	return result + 2;
}).then(function (result) {
    console.log(result);
}).catch(function (error) {
	console.error(error);
});
