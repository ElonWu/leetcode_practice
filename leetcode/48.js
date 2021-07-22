var rotate = function (matrix) {
	let n = matrix.length,
		cache = {};

	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			let curr = matrix[r][c];
			if (!cache[curr]) cache[curr] = [];
			cache[curr].push([c, n - 1 - r]);
		}
	}

	console.log({ cache });

	for (let key in cache) {
		cache[key].forEach(([r, c]) => {
			matrix[r][c] = parseInt(key);
		});
	}

	return matrix;
};

const source = [
	[2, 29, 20, 26, 16, 28],
	[12, 27, 9, 25, 13, 21],
	[32, 33, 32, 2, 28, 14],
	[13, 14, 32, 27, 22, 26],
	[33, 1, 20, 7, 21, 7],
	[4, 24, 1, 6, 32, 34],
];

console.log(source);
console.log("------------------------");
console.log(rotate(source));
