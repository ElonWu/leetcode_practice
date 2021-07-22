var uniqueOccurrences = function (arr) {
	let before = {};
	let after = {};

	for (let i = 0, len = arr.length; i < len; i++) {
		before[arr[i]] = (before[arr[i]] || 0) + 1;
	}

	for (let key in before) {
		after[before[key]] = key;
	}

	return Object.keys(before).length === Object.keys(after).length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
