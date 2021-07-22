var minSteps = function (s, t) {
	let char = {},
		result = 0;

	for (let i = 0; i < s.length; i++) {
		char[s[i]] = (char[s[i]] || 0) + 1;
	}

	console.log(char);

	for (let i = 0; i < t.length; i++) {
		char[t[i]] = (char[t[i]] || 0) - 1;
	}

	console.log(char);

	for (let key in char) {
		if (char[key] > 0) {
			result += char[key];
		} else {
			result -= char[key];
		}
	}

	return result / 2;
};

const source = ["leetcode", "practice"];
// const source = ["anagram", "mangaar"];

console.log(minSteps(...source));
