var findPairs = function (nums, k) {
	let result = {};
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (Math.abs(nums[i] - nums[j]) === k) {
				const key = [nums[i], nums[j]].sort().toString();
				result[key] = true;
			}
		}
	}
	console.log(result);

	return Object.keys(result).length;
};

const source = [1, 3, 4, 1, 5],
	k = 2;

console.log(findPairs(source, k));
