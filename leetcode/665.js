var checkPossibility = function (nums) {
	const len = nums.length;
	let onlyDeclinePoint = null;

	for (let i = 1; i < len; i++) {
		// 下降段
		if (nums[i] < nums[i - 1]) {
			// 超过一个下降段， 直接不满足条件
			if (onlyDeclinePoint) return false;
			// 记录首个下降段
			onlyDeclinePoint = i;
		}
	}

	// 无下降段
	if (onlyDeclinePoint === null) return true;

	/***
	 *  有且只有唯一下降段
	 * */

	// 当下降起点为第一点 或 下降落点为最后一点时， 满足条件， 返回true
	if (onlyDeclinePoint - 1 === 0 || onlyDeclinePoint === len - 1) return true;

	const beforeStartPoint = nums[onlyDeclinePoint - 2]; // 下降起点前一点； 简称“前置点”
	const startPoint = nums[onlyDeclinePoint - 1]; // 下降起点； 简称“起点”
	const endPoint = nums[onlyDeclinePoint]; // 下降落点； 简称“落点”
	const afterEndPoint = nums[onlyDeclinePoint + 1]; // 下降落点后一点； 简称“后置点”

	// ”前置点“ 等于 ”起点“
	if (beforeStartPoint === startPoint) {
		// ”后置点“ 大于等于 ”前置点“ ， 此时修改 “落点” 即可；
		if (afterEndPoint >= startPoint) return true;
		return false;
	}
	// ”前置点“ 小于 ”起点“；  // 大于的情况在 for 循环已经排除；
	else {
		// ”落点“ 大于等于 ”前置点“ ， 此时修改 “起点” 即可；
		if (endPoint >= beforeStartPoint) return true;
		// “后置点” 大于等于 “起点”， 此时修改落点即可；
		if (afterEndPoint >= startPoint) return true;
		return false;
	}
};

const source = [3, 3, 2, 2];

console.log(checkPossibility(source));
