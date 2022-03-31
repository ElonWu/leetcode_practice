/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 排序
  people.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]; // 其次前方数量升序
    return b[0] - a[0]; // 优先：身高降序
  });

  let res = [];

  for (let i = 0; i < people.length; i++) {
    // 此时 res 中的元素都比 people[i] 高， 因此只有插入到 people[i][1] 才能满足人数限制
    const shouldPlace = people[i][1];

    if (shouldPlace < res.length) {
      res = [
        ...res.slice(0, shouldPlace),
        people[i],
        ...res.slice(shouldPlace),
      ];
    }

    // 其他情况下直接插入即可，排序已满足人数限制
    else {
      res.push(people[i]);
    }
  }

  return res;
};
// const people = [
//   [7, 0],
//   [4, 4],
//   [7, 1],
//   [5, 0],
//   [6, 1],
//   [5, 2],
// ];
// 输出：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]

const people = [
  [6, 0],
  [5, 0],
  [4, 0],
  [3, 2],
  [2, 2],
  [1, 4],
];
// 输出：[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]

console.log(reconstructQueue(people));
