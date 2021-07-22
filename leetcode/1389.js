var createTargetArray = function (nums, index) {
	let target = [];
	for (let key in index) {
		target.splice(index[key], 0, nums[key]);
	}
	return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4], [0, 1, 2, 2, 1]));
