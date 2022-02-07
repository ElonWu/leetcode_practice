// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。

// 示例 1：
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = [];

  // 根据起始点排序
  intervals.sort((prev, next) => prev[0] - next[0]);

  for (let curr of intervals) {
    const last = result[result.length - 1];

    // 与最后一项无交集
    if (!last || curr[0] > last[1]) {
      result.push(curr);
    }
    // 有交集，更新最后一项
    else {
      last[1] = Math.max(last[1], curr[1]);
    }
  }

  return result;
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

console.log(merge(intervals));

// class Solution {
//   public int[][] merge(int[][] intervals) {
//       if (intervals.length == 0) {
//           return new int[0][2];
//       }
//       Arrays.sort(intervals, new Comparator<int[]>() {
//           public int compare(int[] interval1, int[] interval2) {
//               return interval1[0] - interval2[0];
//           }
//       });
//       List<int[]> merged = new ArrayList<int[]>();
//       for (int i = 0; i < intervals.length; ++i) {
//           int L = intervals[i][0], R = intervals[i][1];
//           if (merged.size() == 0 || merged.get(merged.size() - 1)[1] < L) {
//               merged.add(new int[]{L, R});
//           } else {
//               merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], R);
//           }
//       }
//       return merged.toArray(new int[merged.size()][]);
//   }
// }

// class Solution:
//     def merge(self, intervals: List[List[int]]) -> List[List[int]]:
//         intervals.sort(key=lambda x: x[0])

//         merged = []
//         for interval in intervals:
//             # 如果列表为空，或者当前区间与上一区间不重合，直接添加
//             if not merged or merged[-1][1] < interval[0]:
//                 merged.append(interval)
//             else:
//                 # 否则的话，我们就可以与上一区间进行合并
//                 merged[-1][1] = max(merged[-1][1], interval[1])

//         return merged
