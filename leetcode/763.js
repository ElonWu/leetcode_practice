var partitionLabels = function (str) {
	if (!str) return [];

	let lastIndexObj = {};

	let start = 0,
		currLetter = str[start],
		end = str.lastIndexOf(currLetter);

	lastIndexObj[currLetter] = end;

	// 查找满足条件的 end;
	for (let i = start + 1; i < end; i++) {
		const letter = str[i];
		// 已经确认在射程内
		if (letter === currLetter || lastIndexObj[letter]) continue;

		const lastIndex = str.lastIndexOf(letter);
		lastIndexObj[letter] = lastIndex;
		if (lastIndex > end) end = lastIndex;
	}

	return [end - start + 1, ...partitionLabels(str.slice(end + 1))];
};

const source = "ababcbacadefegdehijhklij";

console.log(partitionLabels(source));
