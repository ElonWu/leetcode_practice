// var twoSum = function (nums, target) {
// 	let cache = {};

// 	for (let i = 0; i < nums.length; i++) {
// 		const curr = nums[i],
// 			key = target - curr;

// 		if (cache[curr] !== undefined) return [cache[curr], i];

// 		cache[key] = i;
// 	}
// };


var twoSum = function(nums, target) {
    for(let i=0; i < nums.length-1; i++) {
		for(let j=i+1; j < nums.length; j++) {
			const sum = nums[i] + nums[j];

			if(sum === target) {
				return [i, j]
			}
		}
	}
	return [];
};

console.log(twoSum([2,7,11,15], 9));
