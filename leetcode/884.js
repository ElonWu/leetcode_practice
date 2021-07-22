var uncommonFromSentences = function (A, B) {
	let words = `${A} ${B}`.split(" "),
		cache = {},
		result = [];

	for (let i = 0; i < words.length; i++) {
		if (cache[words[i]]) {
			cache[words[i]] = 2;
		} else {
			cache[words[i]] = 1;
		}
	}

	for (let key in cache) {
		if (cache[key] === 1) result.push(key);
	}

	return result;
};

const A = "this apple is sweet",
	B = "this apple is sour";

console.log(uncommonFromSentences(A, B));
