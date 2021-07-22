var customSortString = function (S, T) {
	let sortCache = {},
		cache = [];
	index = 1;

	for (let i = 0; i < S.length; i++) {
		if (!sortCache[S[i]]) sortCache[S[i]] = index++;
	}

	let result = "";
	for (let s of T) {
		let index = sortCache[s];
		console.log({ s, index });

		if (index) {
			if (!cache[index - 1]) cache[index - 1] = "";
			cache[index - 1] += s;
		} else {
			result += s;
		}
	}
	return cache.join("") + result;
};

const S = "cba",
	T = "abcd";

console.log(customSortString(S, T));
