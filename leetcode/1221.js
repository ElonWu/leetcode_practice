var balancedStringSplit = function (s) {
	let result = 0,
		total = 0;
	for (let i = 0; i < s.length - 1; i += 2) {
		total += combineVal(s, i);
		if (total === 0) result += 1;
	}
	return result;
};

function combineVal(str, i) {
	switch (str.charAt(i) + str.charAt(i + 1)) {
		case "LL":
			return 2;
		case "RR":
			return -2;
		default:
			return 0;
	}
}

balancedStringSplit("RLRRLLRLRL");
balancedStringSplit("LLLLRRRR");
