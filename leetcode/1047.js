var removeDuplicates = function (S) {
	if (S.length <= 1) return S;

	let result = "";
	let justRemove = null;

	for (let i = 1; i < S.length; i++) {
		if (i - 1 === justRemove) continue;

		if (S[i] === S[i - 1]) {
			justRemove = i;
		} else {
			result += S[i - 1];
		}
	}

	if (S.length - 1 !== justRemove) result += S[S.length - 1];
	return result === S ? S : removeDuplicates(result);
};

const source = "abbaca";

console.log(removeDuplicates(source));
