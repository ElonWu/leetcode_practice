var findNumbers = function (nums) {
	let result = 0;
	for (let key of nums) {
		result += 1 - (key.toString().length % 2);
	}
	return result;
};

console.log(findNumbers([555, 901, 482, 1771]));
