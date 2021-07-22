var luckyNumbers = function (matrix) {
	let protencial = {};

	const rowCount = matrix.length;
	const colCount = matrix[0].length;

	for (let i = 0; i < rowCount; i++) {
		let minIndex = 0;
		let rowMin = matrix[i][0];

		for (let j = 0; j < colCount; j++) {
			let curr = matrix[i][j];

			console.log({ i, j, curr });

			if (curr < rowMin) {
				rowMin = curr;
				minIndex = j;
			}
			if (protencial[j] !== undefined) {
				const lastColMax = matrix[protencial[j]][j];

				if (curr > lastColMax) {
					console.log(`${curr} 干掉 ${lastColMax}`);
					protencial[j] = undefined;
				}
			}
		}

		let isMaxInCol = true;

		for (let k = i - 1; k >= 0; k--) {
			if (matrix[k][minIndex] > rowMin) {
				isMaxInCol = false;
				break;
			}
		}

		if (isMaxInCol) protencial[minIndex] = i;

		console.log({ rowMin, protencial });
	}

	let result = [];
	for (let key in protencial) {
		if (protencial[key] !== undefined) {
			result.push(matrix[protencial[key]][key]);
		}
	}
	console.log({ protencial, result });

	return result;
};

// const source = [
// 	[3, 7, 8],
// 	[9, 11, 13],
// 	[15, 16, 17],
// ];

// const source = [
// 	[1, 10, 4, 2],
// 	[9, 3, 8, 7],
// 	[15, 16, 17, 12],
// ];

const source = [
	[7, 8],
	[1, 2],
];

console.log({ final: luckyNumbers(source) });
