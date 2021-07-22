var twoSum = function (numbers, target) {
	const len = numbers.length;
	for (let i = 0; i < len - 1; i++) {
		if (numbers[i] > target) return [];
		for (let j = i + 1; j < len; j++) {
			let sum = numbers[i] + numbers[j];
			if (sum === target) return [i + 1, j + 1];
			if (sum > target) break;
		}
	}
	return [];
};
const source = [3, 24, 50, 79, 88, 150, 345];
console.log(twoSum(source, 200));
