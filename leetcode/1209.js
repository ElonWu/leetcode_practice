// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.

// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.
// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"

var removeDuplicates = function (s, k) {
	const len = s.length;

	if (len < k) return s;

	let result = "",
		nearestRemoveIndex = -1; // 最近已排除的 index

	for (let i = 1; i < len; i++) {
		const distance = i - nearestRemoveIndex;
		// 小于指定长度
		if (distance < k) {
			if (s[i] !== s[i - 1]) {
				result += s.slice(nearestRemoveIndex + 1, i);
				nearestRemoveIndex = i - 1; // 更新排查位置
			}
			continue;
		}

		// 到达指定长度， 且相等
		if (s[i] === s[i - 1]) {
			nearestRemoveIndex = i; // 更新排查位置
			continue;
		}

		// 到达指定长度，不相等
		result += s.slice(nearestRemoveIndex + 1, i);
		nearestRemoveIndex = i - 1; // 更新排查位置
	}

	if (len - 1 !== nearestRemoveIndex)
		result += s.slice(nearestRemoveIndex + 1);

	return result === s ? s : removeDuplicates(result, k);
};

const source = "deeedbbcccbdaa";

console.log(removeDuplicates(source, 3));
