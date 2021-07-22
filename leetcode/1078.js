var findOcurrences = function (text, first, second) {
	let result = [];

	let key = `${first}${second}`;

	let words = text.split(" ");

	for (let i = 2; i < words.length; i++) {
		if (`${words[i - 2]}${words[i - 1]}` === key) result.push(words[i]);
	}

	return result;
};

const source = "asdas a good a good girl she is a good student";

console.log(findOcurrences(source, "a", "good"));
