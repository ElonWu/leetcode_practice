var subtractProductAndSum = function (n) {
	let sum = 0;
	let product = 1;
	for (let num of n
		.toString()
		.split("")
		.map((el) => parseInt(el))) {
		sum += num;
		product *= num;
	}
	return product - sum;
};

console.log(subtractProductAndSum(234));
