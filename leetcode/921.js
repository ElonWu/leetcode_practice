var minAddToMakeValid = function (S) {
	let result = 0;

	let min = 0;

	for (let s of S) {
		if (s === "(") {
			result++;
		} else if (s === ")") {
			result--;
		}

		if (result < min) min = result;
	}

	console.log({ min, result });

	if (min === 0) return result;

	if (result < min) return -1 * min;

	return -2 * min + result;
};

const source = "(()))))(";

console.log(minAddToMakeValid(source));
