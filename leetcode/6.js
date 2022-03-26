// var convert = function (s, numRows) {
//   if (numRows < 2) return s;

//   let str = '';
//   // 将 s 切成若干个最长长度为 gap 的组；
//   const gap = numRows * 2 - 2,
//     groupCount = Math.ceil(s.length / gap);

//   // 逐行追加字符
//   for (let i = 0; i < numRows; i++) {
//     // 逐组查询满足 i 行的字符
//     for (let j = 0; j < groupCount; j++) {
//       const firstMatchIndex = gap * j + i;

//       if (firstMatchIndex >= s.length) break;

//       // 每组首个处于 i 行的字符
//       str += s[firstMatchIndex];

//       // 如果 i行 不是第一行 或 最后一行， i行 将可能拥有第二个匹配的字符
//       if (i !== 0 && i !== numRows - 1) {
//         let matchIndex = (j + 1) * gap - i; // 下标规律
//         if (matchIndex < s.length) str += s[matchIndex]; // 加入本组 i 行第二个匹配字符
//       }
//     }
//   }

//   return str;
// };

var convert = function (s, numRows) {
  // if (numRows < 2) return s;
  //   let res = [],
  //     col = 0,
  //     index = 0;

  //   while (true) {
  //     for (let i = 0; i < numRows; i++) {
  //       if (!res[i]) res[i] = new Array(numRows);

  //       if (
  //         col % (numRows - 1) === 0 ||
  //         i === numRows - 1 - (col % (numRows - 1))
  //       ) {
  //         res[i][col] = s.charAt(index);

  //         index++;
  //       }

  //       if (index === s.length) {
  //         let str = '';
  //         for (let row = 0; row < res.length; row++) {
  //           for (let col = 0; col < res[0].length; col++) {
  //             let curr = res[row][col];

  //             if (curr) str += curr;
  //           }
  //         }
  //         return str;
  //       }
  //     }

  //     col++;
  //   }

  //   let res = '',
  //     i = 0;

  //   const group = Math.floor(s.length / (numRows * 2 - 2));
  //   const rest = s.length % (numRows * 2 - 2);

  //   const rows = numRows;
  //   const cols =
  //     group * (numRows - 1) + (rest <= numRows ? 1 : 1 + rest - numRows);

  //   for (let row = 0; row < rows; row++) {
  //     for (let col = 0; col < cols; col++) {
  //       if (
  //         col % (numRows - 1) === 0 ||
  //         row === numRows - 1 - (col % (numRows - 1))
  //       ) {
  //         res += s[i];
  //         i++;

  //         if (i === s.length) return res;
  //       }
  //     }
  //   }

  if (numRows < 2) return s;

  // 一个循环
  const group = (numRows - 1) * 2;
  const groupCount = Math.ceil(s.length / group);

  let res = new Array(numRows * (numRows - 1) * groupCount).fill('');

  for (let g = 0; g < groupCount; g++) {
    let i = 0;

    for (let row = 0; row < numRows - 1; row++) {
      for (let col = 0; col < numRows - 2; col++) {
        // if() {
        //     const index = g * group + i; // s 字符串位置
        //     const arrIndex = row * (numRows - 2) * groupCount + col; // res 数组位置

        //     res[arrIndex] += s[index];
        // }
        if (index === s.length - 1) return res.join('');
      }
    }
  }
};

console.log(convert('PAYPALISHIRING', 4)); // "PINALSIGYAHRPI"
// console.log(convert('PAYPALISHIRING', 5)); // "PHASIYIRPLIGAN"

// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
//

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// 示例 3：

// 输入：s = "A", numRows = 1
// 输出："A"
