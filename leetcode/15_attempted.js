var threeSum = function (nums) {
	nums.sort((a, b) => a - b);

	console.log(nums);

	let cache = {},
		deplicateFirst = {},
		deplicateSecond = {},
		len = nums.length,
		result = [];

	for (let i = 0; i < len - 2; i++) {
		if (deplicateFirst[nums[i]]) continue;

		for (let j = i + 1; j < len - 1; j++) {
			if (nums[j] === nums[j + 1] && j !== len - 2) continue;

			console.log({ i, j });

			let first = nums[i],
				second = nums[j];

			if (first === second) deplicateFirst[first] = true;

			let needed = -first - second;

			if (needed >= second) {
				let curr = {
					secondIndex: j,
					arr: [first, second],
				};

				if (!cache[needed]) cache[needed] = [];

				cache[needed].push(curr);
			}
		}
	}

	console.log(cache);

	for (let i = 2; i < len; i++) {
		if (nums[i] === nums[i - 1]) continue;

		let curr = nums[i];

		if (cache[curr]) {
			cache[curr].forEach(({ secondIndex, arr }) => {
				console.log({ i, secondIndex });

				if (i > secondIndex) {
					result.push([...arr, curr]);
				} else if (
					i < secondIndex &&
					curr === nums[secondIndex] &&
					!deplicateSecond[curr]
				) {
					deplicateSecond[curr] = true;
					result.push([...arr, curr]);
				}
			});
		}
	}

	return result;
};

const source = [-1, 0, 1, 2, -1, -4, 2];
const source1 = [-2, -2, -2, -1, -1, -1, 0, 0, 0, 1, 1, 2, 2, 2];
const source2 = [1, 1, 0, 0, 0, -1, -1];
const source3 = [1, 1, -2];
const source4 = [-2, 0, 1, 1, 2];

console.log(threeSum(source4));
