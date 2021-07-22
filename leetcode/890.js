var findAndReplacePattern = function (words, pattern) {
	const flatP = flatPattern(pattern);

	return words.filter((word) => flatPattern(word) === flatP);
};

function flatPattern(str) {
	let cache = {},
		num = 1,
		result = [];

	for (let s of str) {
		if (!cache[s]) cache[s] = num++;

		result.push(cache[s]);
	}

	return result.join(",");
}

const source = ["abc", "deq", "mee", "aqq", "dkd", "ccc"],
	patter = "abb";
console.log(findAndReplacePattern(source, patter));
