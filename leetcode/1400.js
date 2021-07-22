// Given a string s and an integer k. You should construct k non-empty palindrome strings using all the characters in s.

// Return True if you can use all the characters in s to construct k palindrome strings or False otherwise.

// Example 1:

// Input: s = "annabelle", k = 2
// Output: true
// Explanation: You can construct two palindromes using all characters in s.
// Some possible constructions "anna" + "elble", "anbna" + "elle", "anellena" + "b"

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
	if (k > s.length) return false;

	let obj = {},
		oddCount = 0;

	for (const curr of s) {
		obj[curr] = (obj[curr] || 0) + 1;
	}

	for (let count of Object.values(obj)) {
		if (count % 2) {
			oddCount += 1;
			if (oddCount > k) return false;
		}
	}

	return true;
};

const source = "annabelle";

console.log(canConstruct(source, 2));
