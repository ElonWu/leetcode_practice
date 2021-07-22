var smallestSubsequence = function (text) {
	let cache = {},
		result = "";

	for (let i = 0; i < text.length; i++) {
		let s = text[i];
		if (!cache[s]) cache[s] = [];
		cache[s].push(i);
	}

	for (let i = 0; i < text.length; i++) {
		let s = text[i];

		console.log({ result, s });

		if (result.indexOf(s) >= 0) continue;

		let newResult = "";

		for (let c of result) {
			if (c > s && hadReplacement(cache[c], i)) continue;
			newResult += c;
		}

		newResult += s;

		result = newResult;
	}
	return result;
};

function hadReplacement(indexList, target) {
	for (let i = 0; i < indexList.length; i++) {
		if (indexList[i] > target) return true;
	}

	return false;
}

const source = "leetcode";

console.log(smallestSubsequence(source));
