var relativeSortArray = function (arr1, arr2) {
	let expected = [];
	let unexpected = {};
	for (let i = 0; i < arr2.length; i++) {
		for (let j = 0; j < arr1.length; j++) {
			const curr = arr1[j];
			if (curr === arr2[i]) {
				expected.push(curr);
				continue;
			}
			if (arr2.indexOf(curr) === -1) unexpected[j] = curr;
		}
	}
	return expected.concat(Object.values(unexpected).sort((a, b) => a - b));
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
	arr2 = [2, 1, 4, 3, 9, 6];

console.log(relativeSortArray(arr1, arr2));
// [2,2,2,1,4,3,3,9,6,7,19]
