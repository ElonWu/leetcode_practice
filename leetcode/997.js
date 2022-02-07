// var findJudge = function (N, trust) {
// 	let trustReceivedGraph = {}; // key 收到的信任
// 	let trustGivenGraph = {}; // key 发出的信任

// 	for (let i = 0; i < trust.length; i++) {
// 		let [from, to] = trust[i];

// 		if (from === to) continue; // 去除相信自己的干扰

// 		if (!trustReceivedGraph[to]) trustReceivedGraph[to] = [];
// 		if (!trustGivenGraph[from]) trustGivenGraph[from] = [];

// 		trustReceivedGraph[to].push(from);

// 		trustGivenGraph[from].push(to);
// 	}

// 	console.log({
// 		trustReceivedGraph,
// 		trustGivenGraph,
// 	});

// 	for (let key in trustReceivedGraph) {
// 		// 获得除自己外的全部人信任 且 不信任其他人
// 		if (trustReceivedGraph[key].length === N - 1 && !trustGivenGraph[key]) {
// 			return parseInt(key);
// 		}
// 	}

// 	return -1;
// };

/**
 *
 * 2021-12-20 新解法
 *
 */

// 在一个小镇里，按从 1 到 n 为 n 个人进行编号。传言称，这些人中有一个是小镇上的秘密法官。

// 如果小镇的法官真的存在，那么：

// 小镇的法官不相信任何人。
// 每个人（除了小镇法官外）都信任小镇的法官。
// 只有一个人同时满足条件 1 和条件 2 。
// 给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示编号为 a 的人信任编号为 b 的人。

// 如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的编号。否则，返回 -1。

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const trustCache = {},
    trustedCache = {};

  for (let [a, b] of trust) {
    trustCache[a] = (trustCache[a] || []).concat(b);
    trustedCache[b] = (trustedCache[b] || []).concat(a);
  }

  for (let [key, value] of Object.entries(trustedCache)) {
    if (value.length === N - 1 && !trustCache[key]) {
      return key;
    }
  }

  if (N === 1) return 1;

  return -1;
};

const trust = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
];

console.log(findJudge(3, trust));
