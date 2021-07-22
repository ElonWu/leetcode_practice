var addStrings = function (num1, num2) {
	const len1 = num1.length;
	const len2 = num2.length;

	if (len1 >= len2) {
		return calc(num1, num2, len1 - len2);
	} else {
		return calc(num2, num1, len2 - len1);
	}
};

function calc(num1, num2, diff) {
	let arr = [];
	for (let i = 0; i < num1.length; i++) {
		arr.push(i < diff ? num1[i] : +num1[i] + +num2[i - diff]);
	}
	let left = 0,
		result = "";
	for (let j = arr.length - 1; j >= 0; j--) {
		let curr = (+arr[j] + left).toString();
		if (curr.length === 2) {
			left = +curr[0];
			result = curr[1] + result;
		} else {
			left = 0;
			result = curr + result;
		}
	}

	if (left) result = left + result;

	return result;
}

const num1 = "408",
	num2 = "5";

console.log(addStrings(num1, num2));
