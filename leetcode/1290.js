var getDecimalValue = function (head) {
	var result = 0,
		len = head.length;

	for (let i = 0; i < len; i++) {
		if (head[i]) result += Math.pow(2, len - i - 1);
	}

	return result;
};
console.log(getDecimalValue([1, 0, 1]));
