var numTeams = function (nums) {
	const len = nums.length;
	let result = 0;
	for (let i = 1; i < len - 1; i++) {
		let beforeAndGreater = 0;
		let afterAndLess = 0;

		let beforeAndLess = 0;
		let afterAndGreater = 0;
		const current = nums[i];

		for (let j = 0; j < len; j++) {
			if (j < i) {
				if (nums[j] < current) {
					// 招募前方小弟
					beforeAndLess += 1;
				} else {
					// 招募前方大佬
					beforeAndGreater += 1;
				}
			} else if (j > i) {
				if (nums[j] > current) {
					// 招募后方大佬
					afterAndGreater += 1;
				} else {
					// 招募后方小弟
					afterAndLess += 1;
				}
			}
		}
		result +=
			beforeAndGreater * afterAndLess + beforeAndLess * afterAndGreater;
	}

	return result;
};

// console.log(
//     current,
//     beforeAndGreater,
//     afterAndLess,
//     beforeAndLess,
//     afterAndGreater
// );
console.log(numTeams([2, 5, 3, 4, 1]));
console.log(numTeams([1, 2, 3, 4]));
