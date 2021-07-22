var permute = function (nums) {
	let len = nums.length,
		result = [];

	if (len <= 1) return [nums]; // 低于1个元素，返回当前

	for (let i = 0; i < len; i++) {
		// 依次以 i 位置元素为首位，加上剩余的元素的所有组合
		let curr = nums.slice(),
			first = curr.splice(i, 1)[0];
		result = result.concat(permute(curr).map((el) => [first, ...el]));
	}

	return result;
};

const source = [5, 4, 2, 6];

console.log(permute(source));
