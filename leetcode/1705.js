// 输入：apples = [1,2,3,5,2], days = [3,2,1,4,2]
// 输出：7
// 解释：你可以吃掉 7 个苹果：
// - 第一天，你吃掉第一天长出来的苹果。
// - 第二天，你吃掉一个第二天长出来的苹果。
// - 第三天，你吃掉一个第二天长出来的苹果。过了这一天，第三天长出来的苹果就已经腐烂了。
// - 第四天到第七天，你吃的都是第四天长出来的苹果。

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */

var push = function (list, curr) {
  if (list.length === 0) return [curr];

  for (let k = 0; k < list.length; k++) {
    if (list[k][0] === curr[0]) {
      list[k][1] += curr[1];
      break;
    }

    if (list[k][0] > curr[0]) {
      list = list.slice(0, k).concat(curr).concat(list.slice(k));
      break;
    }
  }
};

var pop = function (cache, i) {
  while (cache.length > 0 && (cache[0][0] < i || cache[0][1] <= 0)) {
    cache.pop();
  }
};

var eatenApples = function (apples, days) {
  let cache = [],
    result = 0;

  const n = apples.length;

  for (let i = 0; i < n; i++) {
    // 删除已过期
    pop(cache, i);

    // 存入
    if (apples[i] > 0) {
      const curr = [i + days[i], apples[i]];
      cache = push(cache, curr);
    }

    // 消耗
    if (cache.length > 0 && cache[0][1] > 0) {
      cache[0][1]--;
      result++;
    }
  }

  let i = n; // 从第 n 天后，只消耗

  while (cache.length > 0) {
    // 删除已过期
    pop(cache, i);

    // 消耗
    if (cache.length > 0 && cache[0][1] > 0) {
      cache[0][1]--;
      result++;
    }
  }

  console.log(cache);

  return result;
};

// const apples = [1, 2, 3, 5, 2],
//   days = [3, 2, 1, 4, 2];

// const apples = [3, 0, 0, 0, 0, 2],
//   days = [3, 0, 0, 0, 0, 2];

const apples = [
    1, 10, 17, 10, 12, 6, 20, 8, 8, 22, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 5, 2, 1, 0, 0, 0, 0, 0, 0, 23,
  ],
  days = [
    19999, 11, 18, 22, 5, 2, 14, 5, 20, 7, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 1, 4, 2, 7, 0, 0, 0, 0, 0, 0, 1,
  ];

// const apples = [2, 1, 10],
//   days = [2, 10, 1];

// const apples = [1, 1, 1],
//   days = [1, 1, 1];

console.log(eatenApples(apples, days));
