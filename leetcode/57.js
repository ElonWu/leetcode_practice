// 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let result = [],
    inserted = false;

  let [newStart, newEnd] = newInterval;

  for (let i = 0; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (inserted) {
      result.push(intervals[i]);
      continue;
    }

    // 在区间之前 插入
    if (newEnd < start) {
      result.push([newStart, newEnd]);
      result.push(intervals[i]);
      inserted = true;
      continue;
    }

    // 后端在区间内(包括新区间全部在区间内部) 合并后插入
    if (isBetween(newEnd, intervals[i])) {
      result.push([Math.min(start, newStart), end]);
      inserted = true;
      continue;
    }
    // 前端在区间内 合并
    if (isBetween(newStart, intervals[i])) {
      newStart = start;
      continue;
    }

    // 区间全部在新区间内 直接忽略
    if (
      isBetween(start, [newStart, newEnd]) &&
      isBetween(end, [newStart, newEnd])
    ) {
      continue;
    }

    // 无关的区间， 直接插入
    result.push(intervals[i]);
  }

  if (!inserted) result.push([newStart, newEnd]);

  return result;
};

const isBetween = (num, arr) => {
  return num >= arr[0] && num <= arr[1];
};

//

// 示例 1：

// 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
// 输出：[[1,5],[6,9]]
// 示例 2：

// 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// 输出：[[1,2],[3,10],[12,16]]
// 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
// 示例 3：

// 输入：intervals = [], newInterval = [5,7]
// 输出：[[5,7]]
// 示例 4：

// 输入：intervals = [[1,5]], newInterval = [2,3]
// 输出：[[1,5]]
// 示例 5：

// 输入：intervals = [[1,5]], newInterval = [2,7]
// 输出：[[1,7]]

console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8],
  ),
);
