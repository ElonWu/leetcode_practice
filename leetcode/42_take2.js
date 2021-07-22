var trap = function (height) {
	let cache = [],
		result = 0;

	// 记录每个左侧高位的点，及其左侧高位值
	let leftMax = height[0];
	for (let i = 1; i < height.length - 1; i++) {
		let curr = height[i];

		if (curr >= leftMax) {
			leftMax = curr;
		} else {
			cache[i] = { val: curr, leftMax };
		}
	}

	// 记录有左侧高位的点，更新其右侧高位值
	let rightMax = height[height.length - 1];
	for (let i = height.length - 2; i >= 1; i--) {
		let curr = height[i];

		if (curr >= rightMax) {
			rightMax = curr;
			cache[i] = null;
		} else if (cache[i]) {
			cache[i].rightMax = rightMax;
		}
	}

	// console.log(cache);
	// 有且仅当两侧有高位点， 才能积水
	for (let { val, leftMax, rightMax } of cache.filter((el) => el)) {
		result += Math.min(leftMax, rightMax) - val;
	}

	return result;
};

const source = "3,9,8,1,1,4,1,5,1,4,1,1,2".split(",").map((el) => parseInt(el));

let result = trap(source);

console.log({ result });
