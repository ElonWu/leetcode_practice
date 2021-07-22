var combine = function (n, k) {
	let result = [];

	if (k === 1) {
		for (let i = 1; i <= n; i++) {
			result.push([i]);
		}
	} else {
		for (let i = n; i >= 1; i--) {
			result = result.concat(
				combine(i - 1, k - 1).map((el) => [i, ...el])
			);
		}
	}

	return result;
};

let n = 4,
	k = 2;
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

console.log(combine(n, k));
