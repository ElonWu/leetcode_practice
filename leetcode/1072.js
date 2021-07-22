var maxEqualRowsAfterFlips = function (matrix) {
	let cache = {},
		row = matrix.length,
		col = matrix[0].length;

	for (let i = 0; i < row; i++) {
		let rowCache_0 = [],
			rowCache_1 = [];

		for (let j = 0; j < col; j++) {
			matrix[i][j] ? rowCache_1.push(j) : rowCache_0.push(j);
		}

		let len_0 = rowCache_0.length,
			len_1 = rowCache_1.length,
			key =
				len_0 < len_1 || (len_0 === len_1 && rowCache_0[0] === 0)
					? rowCache_0.join(",")
					: rowCache_1.join(",");

		cache[key] = (cache[key] || 0) + 1;
	}

	return Math.max(...Object.values(cache));
};

const source = [
	[1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
	[1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
	[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
	[1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
];

console.log(maxEqualRowsAfterFlips(source));
