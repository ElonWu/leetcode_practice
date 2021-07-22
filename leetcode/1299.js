var replaceElements = function (arr) {
	let result = [-1];

	for (let i = arr.length - 2; i >= 0; i--) {
		result.unshift(Math.max(arr[i + 1], result[0]));
	}

	return result;
};

const arr = [17, 18, 5, 4, 6, 1];

console.log(arr, replaceElements(arr));
