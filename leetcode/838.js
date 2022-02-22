// n 张多米诺骨牌排成一行，将每张多米诺骨牌垂直竖立。在开始时，同时把一些多米诺骨牌向左或向右推。

// 每过一秒，倒向左边的多米诺骨牌会推动其左侧相邻的多米诺骨牌。同样地，倒向右边的多米诺骨牌也会推动竖立在其右侧的相邻多米诺骨牌。

// 如果一张垂直竖立的多米诺骨牌的两侧同时有多米诺骨牌倒下时，由于受力平衡， 该骨牌仍然保持不变。

// 就这个问题而言，我们会认为一张正在倒下的多米诺骨牌不会对其它正在倒下或已经倒下的多米诺骨牌施加额外的力。

// 给你一个字符串 dominoes 表示这一行多米诺骨牌的初始状态，其中：

// dominoes[i] = 'L'，表示第 i 张多米诺骨牌被推向左侧，
// dominoes[i] = 'R'，表示第 i 张多米诺骨牌被推向右侧，
// dominoes[i] = '.'，表示没有推动第 i 张多米诺骨牌。
// 返回表示最终状态的字符串。

/**
 * @param {string} dominoes
 * @return {string}
 */
// var pushDominoes = function (dominoes) {
//   return replaceAfter(dominoes.split(''), 0).join(''); // 数组比字符串方便替换元素； 引用类型方便递归；
// };

// const replaceAfter = (dominoes, start) => {
//   // 找到下一个受力的点
//   let breakPoint = start + 1;
//   for (; breakPoint < dominoes.length; breakPoint++) {
//     if (dominoes[breakPoint] !== '.') break;
//   }

//   // 到了最后一个，直接结束
//   if (breakPoint === dominoes.length) {
//     // 从 start 的 R 开始， 直到结束都是非受力的点，应全部更新为 R
//     updateRange(dominoes, start, breakPoint - 1);
//     return dominoes;
//   }

//   // 更新 start 到 breakPoint 之间的全部点
//   updateRange(dominoes, start, breakPoint);

//   // 继续更新 breakPoint 之后的点
//   return replaceAfter(dominoes, breakPoint);
// };

const updateRange = (dominoes, start, end) => {
  // 根据不同起止点更新范围内的点
  switch (dominoes[start] + dominoes[end]) {
    // 全部替换为 L
    case '.L':
    case 'LL':
      for (let i = start; i < end; i++) {
        dominoes[i] = 'L';
      }
      break;
    // 全部替换为 R
    case 'RR':
    case 'R.': // 仅针对结尾 R.... 这种情况
      for (let i = start + 1; i <= end; i++) {
        dominoes[i] = 'R';
      }
      break;

    // 两侧向中间逐个推倒，直到受力中和
    case 'RL':
      while (start < end) {
        dominoes[start++] = 'R';
        dominoes[end--] = 'L';
      }
      break;

    // 其他情况都不需要更新
  }
};
//
// 示例 1：

// 输入：dominoes = "RR.L"
// 输出："RR.L"
// 解释：第一张多米诺骨牌没有给第二张施加额外的力。

var pushDominoes = function (dominoes) {
  let start = 0,
    len = dominoes.length,
    arr = dominoes.split('');

  while (start < len) {
    let end = start + 1;
    while (end < len && arr[end] === '.') {
      end++;
    }

    updateRange(arr, start, Math.min(len - 1, end));

    start = end;
  }

  return arr.join('');
};
// console.log(pushDominoes('RR.L'));
console.log(pushDominoes('.LR..L.R..'));
