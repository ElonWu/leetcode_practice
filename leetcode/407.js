var trap = function (height) {
	let cache = [];

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

	let result = [];

	for (let i = 1; i < cache.length; i++) {
		let curr = cache[i];
		if (!curr) {
			result.push(0);
		} else {
			const { leftMax, rightMax, val } = curr;
			result.push(Math.min(leftMax, rightMax) - val);
		}
	}
	return result;
};

var trapRainWater = function (heightMap) {
	let row = heightMap.length;
	let col = heightMap[0].length;

	let cache = [];

	for (let i = 1; i < row - 1; i++) {
		const rowCache = trap(heightMap[i]);
		console.log({ i, rowCache });
		cache[i] = rowCache;

		// for (let j = 1; j < col - 1; j++) {}
	}

	// console.log(cache);
};

let source = [
	[1, 4, 3, 1, 3, 2],
	[3, 2, 1, 3, 2, 4],
	[2, 3, 3, 2, 3, 1],
];

trapRainWater(source);
