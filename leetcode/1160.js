var countCharacters = function (words, chars) {
	let cache = {},
		result = 0;

	for (let char of chars) {
		cache[char] = (cache[char] || 0) + 1;
	}

	for (let word of words) {
		let cacheCopy = Object.assign({}, cache);

		for (let i = 0; i < word.length; i++) {
			if (!cacheCopy[word[i]]) break;
			cacheCopy[word[i]] -= 1;

			if (i === word.length - 1) result += word.length;
		}
	}
	return result;
};

const source = ["hello", "world", "leetcode"],
	chars = "welldonehoneyr";

// const source = [
// 		"dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin",
// 		"ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb",
// 		"ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl",
// 		"boygirdlggnh",
// 		"xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx",
// 		"nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop",
// 		"hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx",
// 		"juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr",
// 		"lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo",
// 		"oxgaskztzroxuntiwlfyufddl",
// 		"tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp",
// 		"qnagrpfzlyrouolqquytwnwnsqnmuzphne",
// 		"eeilfdaookieawrrbvtnqfzcricvhpiv",
// 		"sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz",
// 		"yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue",
// 		"hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv",
// 		"cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo",
// 		"teyygdmmyadppuopvqdodaczob",
// 		"qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs",
// 		"qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs",
// 	],
// 	chars = "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp";

console.log(countCharacters(source, chars));
