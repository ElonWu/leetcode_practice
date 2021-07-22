var findLucky = function (arr) {
	let obj = {};

	for (let i = 0; i < arr.length; i++) {
		const curr = arr[i];

		obj[curr] = (obj[curr] || 0) + 1;
	}

	for (let key in obj) {
		if (key == obj[key]) return obj[key];
	}

	return -1;
};

const source = [2, 2, 3, 4];
console.log(findLucky(source));
