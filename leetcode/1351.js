var countNegatives = function (grid) {
	const rows = grid.length; // 行数

	let result = 0,
		start = grid[0].length - 1; // 每行查找的起始位置

	for (let i = 0; i < rows; i++) {
		// 每行从起始位置往前查
		for (let j = start; j >= 0; j--) {
			// 查到正数就换行
			if (grid[i][j] >= 0) {
				start = j; // 并以当前换行列为起始位置
				break;
			}
			// 查到负数，说明此列以下均为负数；
			result += rows - i;

			// 第一列为负数，则完成全部查询
			if (j === 0) return result;
		}
	}

	return result;
};

// const grid = [
// 	[3, 2],
// 	[-3, -3],
// 	[-3, -3],
// 	[-3, -3],
// ];

const grid = [
	[3, 2],
	[1, 1],
	[1, 1],
	[1, 1],
];

console.log(countNegatives(grid));
