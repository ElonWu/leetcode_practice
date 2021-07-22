// Given a list of words, each word consists of English lowercase letters.

// Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.
// For example, "abc" is a predecessor of "abac".

// A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1,
// where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

// Return the longest possible length of a word chain with words chosen from the given list of words.

// Example 1:

// Input: ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: one of the longest word chain is "a","ba","bda","bdca".

// TODO 未完成

var longestStrChain = function (words) {
	const len = words.length;
	if (len < 2) return len;

	let obj = { [len - 1]: 1 };

	for (let i = len - 2; i >= 0; i--) {
		obj[i] = 1;

		for (let j = i + 1; j < len; j++) {
			// 只有 j 链长度 + 1 大于当前长度，才考虑加入 j 链条；
			if (obj[j] + 1 > obj[i]) {
				const isPredecessor = judgePredecessor(words[i], words[j]);
				if (isPredecessor) {
					obj[i] = obj[j] + 1;
				}
			}
		}
	}

	return obj;
};

// 判断前者是否后者少一个字符
function judgePredecessor(word1, word2) {
	const len1 = word1.length;
	const len2 = word2.length;

	if (len1 !== len2) return false;

	return true;
}

const source = ["a", "b", "ba", "bca", "bda", "bdca"];

console.log(longestStrChain(source));
