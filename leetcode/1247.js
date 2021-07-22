/**
You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. 
Your task is to make these two strings equal to each other. 
You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].

Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.


Example 1:
    Input: s1 = "xx", s2 = "yy"
    Output: 1
    Explanation: 
    Swap s1[0] and s2[1], s1 = "yx", s2 = "yx".
 */

var minimumSwap = function (s1, s2) {
	let pattern1 = 0,
		pattern2 = 0;

	for (let i = 0; i < s1.length; i++) {
		let a = s1[i],
			b = s2[i];

		if (a != b) {
			if (a + b === "xy") {
				pattern1 += 1;
			} else {
				pattern2 += 1;
			}
		}
	}
	let isPattern1Odd = pattern1 % 2,
		isPattern2Odd = pattern2 % 2;

	// 都是偶数
	if (!isPattern1Odd && !isPattern2Odd) {
		return (pattern1 + pattern2) / 2;
	}
	// 都是奇数
	else if (isPattern1Odd && isPattern2Odd) {
		return (pattern1 + pattern2) / 2 + 1;
	}

	return -1;
};

const source1 = ["xx", "yy"];
const source2 = ["yx", "xy"];
console.log(minimumSwap(...source1));
console.log(minimumSwap(...source2));
