var topKFrequent = function (nums, k) {
	let cache = {},
		result = [];

	for (let i = 0; i < nums.length; i++) {
		cache[nums[i]] = (cache[nums[i]] || 0) + 1;
	}
	for (let key in cache) {
		result = insert(result, key, cache);
	}

	return result.slice(0, k);
};

function insert(list, key, obj) {
	for (let i = 0; i < list.length; i++) {
		if (obj[key] >= obj[list[i]]) {
			return [...list.slice(0, i), parseInt(key), ...list.slice(i)];
		}
	}

	return [...list, parseInt(key)];
}

const source = (nums = [1, 1, 1, 2, 2, 3]),
	k = 2;

console.log(topKFrequent(source, k));
