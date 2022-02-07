// 输入：richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0]
// 输出：[5,5,2,5,4,5,6,7]
// 解释：
// answer[0] = 5，
// person 5 比 person 3 有更多的钱，person 3 比 person 1 有更多的钱，person 1 比 person 0 有更多的钱。
// 唯一较为安静（有较低的安静值 quiet[x]）的人是 person 7，
// 但是目前还不清楚他是否比 person 0 更有钱。
// answer[7] = 7，
// 在所有拥有的钱肯定不少于 person 7 的人中（这可能包括 person 3，4，5，6 以及 7），
// 最安静（有较低安静值 quiet[x]）的人是 person 7。
// 其他的答案也可以用类似的推理来解释。

/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  const total = quiet.length,
    cache = new Array(total),
    answer = new Array(total);

  // 更新大小关联
  for (let [prev, next] of richer) {
    if (!cache[next]) {
      cache[next] = { richer: [prev] };
      continue;
    }

    if (!cache[next].richer.includes(prev)) cache[next].richer.push(prev);
  }

  console.log(cache);

  // 更新最安静
  for (let i = 0; i < total; i++) {
    answer[i] = updateQuietest(i, cache, quiet);
  }

  console.log(cache);

  return answer;
};

var updateQuietest = function (i, cache, quiet) {
  // 已经计算过最安静
  if (typeof cache[i]?.questestIndex === 'number')
    return cache[i].questestIndex;

  // 无大小关联， 自身就是最安静
  if (!cache[i]?.richer) {
    cache[i] = { questestIndex: i };
    return i;
  }

  let currentQuestest = i;

  // richer 里的 quietest
  cache[i].richer.forEach((richerIndex) => {
    const quietestRicherIndex = updateQuietest(richerIndex, cache, quiet);
    if (quiet[quietestRicherIndex] < quiet[currentQuestest])
      currentQuestest = quietestRicherIndex;
  });

  cache[i].questestIndex = currentQuestest;

  return currentQuestest;
};

// const richer = [
//     [0, 2],
//     [1, 2],
//   ],
//   quiet = [0, 1, 2];

const richer = [
    [1, 0],
    [2, 1],
    [3, 1],
    [3, 7],
    [4, 3],
    [5, 3],
    [6, 3],
  ],
  quiet = [3, 2, 5, 4, 6, 1, 7, 0];

console.log(loudAndRich(richer, quiet));
