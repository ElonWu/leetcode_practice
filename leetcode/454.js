var fourSumCount = function (A, B, C, D) {
	let ab = {},
		count = 0;

	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			let needed = A[i] + B[j];

			ab[needed] = (ab[needed] || 0) + 1;
		}
	}

	for (let i = 0; i < C.length; i++) {
		for (let j = 0; j < D.length; j++) {
			let add = ab[-C[i] - D[j]];
			if (add) count += add;
		}
	}
	return count;
};

const source = [
	[-1, 1, 1, 1, -1],
	[0, -1, -1, 0, 1],
	[-1, -1, 1, -1, -1],
	[0, 1, 0, -1, -1],
];

console.log(fourSumCount(...source));
