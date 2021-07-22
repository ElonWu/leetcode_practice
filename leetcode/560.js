var subarraySum = function (nums, k) {
	let cache = [],
		result = 0;

	for (let num of nums) {
		if (num === k) result++;

		for (let i = 0; i < cache.length; i++) {
			let curr = cache[i] + num;

			if (curr === k) result++;

			cache[i] = curr;
		}

		cache.push(num);
	}

	return result;
};

const source = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	k = 0;

console.log(subarraySum(source, k));
