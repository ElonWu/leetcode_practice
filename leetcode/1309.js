var freqAlphabets = function (s) {
	let start = 0;
	let result = "";
	for (let i = 0; i < s.length; i++) {
		// 每个（可能的） # 前的字符处理
		if (s.charAt(i) === "#") {
			result +=
				convertAi(s.slice(start, i - 2)) + convertJz(s.slice(i - 2, i));
			// 更新已处理边界
			start = i + 1;
		}
		// 最后一个字符到最后一个（可能的） # 之间的字符处理
		else if (i === s.length - 1) {
			result += convertAi(s.slice(start));
		}
	}

	return result;
};

function convertAi(str) {
	if (!str) return "";

	return str
		.split("")
		.map((el) => String.fromCharCode(+el + 96))
		.join("");
}

function convertJz(str) {
	return String.fromCharCode(parseInt(str) + 96);
}

// const str = "10#11#12";
const str = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#";
console.log(freqAlphabets(str));
