// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Examples:

// s = "3[a]2[bc]", return "aaabcbc".
// s = "3[a2[c]]", return "accaccacc".
// s = "2[abc]3[cd]ef", return "abcabccdcdcdef".

var decodeString = function (s) {
	let result = "";

	// 针对 s 串联:  匹配到如  ]abc78[ ， 必然表示至少有两个串联
	const seriesReg = /\]([^\[\]0-9]*)([0-9]+)\[/gi;

	while (s) {
		// 确保最外层不是一个 nested
		s = nestedDecode(s);
		// 拆分出首个串联
		const match = seriesReg.exec(s);

		console.log("检测串联", s, { index: match ? match.index : -1 });

		if (match) {
			const firstNested = s.slice(0, match.index + 1);

			console.log({ firstNested });

			s = s.slice(match.index + 1);
			result += nestedDecode(firstNested);
			continue;
		} else {
			result += nestedDecode(s);
			s = "";
		}
	}
	return result;
};

var nestedDecode = function (s) {
	console.log("最靠前的非串联片段", s);
	let result = "";

	// 针对 s 串联
	const matchReg = /^([^\[\]0-9]*)([0-9]+)\[(\S+)\]([^\[\]0-9]*)$/gi;

	let matchResult = matchReg.exec(s);
	// 匹配成功
	if (matchResult) {
		const [_, pre, count, child, suffix] = matchResult;
		// 转码匹配到的部分
		result = `${pre}${multyChild(count, decodeString(child))}${suffix}`;
	} else {
		result = s;
	}
	return result;
};

var multyChild = function (count, str) {
	let result = "";
	for (let i = 0; i < count; i++) {
		result += str;
	}
	return result;
};

const str = `2[2[y]pq4[2[jk]e1[f]]]ef`;

console.log(decodeString(str));
