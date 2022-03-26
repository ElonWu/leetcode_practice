/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    result.push(excute(n, startPos, s.slice(i)));
  }

  return result;
};

const excute = (n, startPos, s) => {
  let i = 0,
    x = startPos[1],
    y = startPos[0];

  while (i < s.length) {
    switch (s[i]) {
      case 'U':
        if (y === 0) return i;
        y--;
        break;

      case 'D':
        if (y === n - 1) return i;
        y++;
        break;

      case 'L':
        if (x === 0) return i;
        x--;
        break;

      case 'R':
        if (x === n - 1) return i;
        x++;
        break;
    }

    i++;
  }

  return i;
};

// 现有一个 n x n 大小的网格，左上角单元格坐标 (0, 0) ，右下角单元格坐标 (n - 1, n - 1) 。
// 给你整数 n 和一个整数数组 startPos ，其中 startPos = [startrow, startcol] 表示机器人最开始在坐标为 (startrow, startcol) 的单元格上。
// 另给你一个长度为 m 、下标从 0 开始的字符串 s ，其中 s[i] 是对机器人的第 i 条指令：'L'（向左移动），'R'（向右移动），'U'（向上移动）和 'D'（向下移动）。
// 机器人可以从 s 中的任一第 i 条指令开始执行。它将会逐条执行指令直到 s 的末尾，但在满足下述条件之一时，机器人将会停止：

// 下一条指令将会导致机器人移动到网格外。
// 没有指令可以执行。
// 返回一个长度为 m 的数组 answer ，其中 answer[i] 是机器人从第 i 条指令 开始 ，可以执行的 指令数目 。

const n = 3,
  startPos = [0, 1],
  s = 'RRDDLU';

// [1,5,4,3,1,0]

console.log(executeInstructions(n, startPos, s));
