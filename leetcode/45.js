var jump = function (nums) {
	if (nums.length <= 1) return 0;
	if (nums[0] >= nums.length - 1) return 1;

	let start = 1,
		end = nums[0],
		max = 0,
		step = 1;

	while (true) {
		for (let i = start; i <= end; i++) {
			let currMax = i + nums[i];
			if (currMax > max) {
				if (currMax >= nums.length - 1) return step + 1;
				max = currMax;
			}
		}

		if (max === end) return -1;

		step += 1;
		start = end + 1;
		end = max;
	}
};

console.log(jump([2, 3, 1, 1, 4]));
