var kWeakestRows = function (mat, k) {
	let hash = {},
		result = [],
		row = mat.length,
		col = mat[0].length;

	for (let i = 0; i < row; i++) {
		let res = 0;
		for (let j = 0; j < col; j++) {
			res += mat[i][j];
		}

		hash[res] ? hash[res].push(i) : (hash[res] = [i]);
	}

	for (let key in hash) {
		for (let i of hash[key]) {
			result.push(i);
			if (--k === 0) return result;
		}
	}
};

const source = [
	[1, 1, 0, 0, 0],
	[1, 1, 1, 1, 0],
	[1, 0, 0, 0, 0],
	[1, 1, 0, 0, 0],
	[1, 1, 1, 1, 1],
];

console.log(kWeakestRows(source, 3));
