var stringMatching = function (words) {
	words = words.sort((a, b) => a.length - b.length);

	let result = [];

	for (let i = 0; i < words.length - 1; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (
				words[j].indexOf(words[i]) >= 0 &&
				result.indexOf(words[i]) === -1
			) {
				result.push(words[i]);
			}
		}
	}

	return result;
};

const words = [
	"o",
	"mass",
	"as",
	"hero",
	"superhero",
	"leetcode",
	"et",
	"code",
];

console.log(stringMatching(words));
