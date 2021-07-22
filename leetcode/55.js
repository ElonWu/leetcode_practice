var canJump = function (nums) {
	if (nums.length === 1) return true;

	let start = 1,
		end = nums[0],
		max = 0;

	while (true) {
		// 当前可触发的最远区间
		for (let i = start; i <= end; i++) {
			let currMax = i + nums[i];
			if (currMax > max) {
				if (currMax >= nums.length - 1) return true;
				max = currMax;
			}
		}
		// 最远点等于上一次的最远点
		if (max === end) return false;

		// 更新区间
		start = end + 1;
		end = max;
	}
};

const source = [8, 9, 10, 1, 4, 2, 3, 1, 1, 4, 2, 3, 1, 1, 4, 2, 3, 1, 1, 4];

console.log(canJump(source));
