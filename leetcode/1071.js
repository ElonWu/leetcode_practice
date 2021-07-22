// var gcdOfStrings = function (str1, str2) {
// 	// 确保 str1 是较短的那个
// 	if (str1.length > str2.length) {
// 		let temp = str1;
// 		str1 = str2;
// 		str2 = temp;
// 	}
// 	const len1 = str1.length,
// 		len2 = str2.length;

// 	for (let i = len1; i >= 1; i--) {
// 		if (len1 % i || len2 % i) continue;
// 		let pattern = str1.slice(0, i);
// 		if (canDivide(str1, pattern) && canDivide(str2, pattern))
// 			return pattern;
// 	}

// 	return "";
// };

var gcdOfStrings = function (str1, str2) {
	// 确保 str1 是较短的那个
	if (str1.length > str2.length) {
		let temp = str1;
		str1 = str2;
		str2 = temp;
	}
	const len1 = str1.length,
		len2 = str2.length;

	// 最多循环次数：较短的字符长度的一半
	const end = Math.floor(len1 / 2);

	for (let i = 1; i <= end; i++) {
		// 由大到小， 依次筛选公约数
		if (len1 % i === 0 && len2 % (len1 / i) === 0) {
			let pattern = str1.slice(0, len1 / i);
			if (canDivide(str1, pattern) && canDivide(str2, pattern))
				return pattern;
		}
	}
	return "";
};

function canDivide(str, pattern) {
	return str.split(pattern).join("") === "";
}

const source = [
	"NLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGM",
	"NLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGMNLZGM",
];

console.log(gcdOfStrings(...source));
