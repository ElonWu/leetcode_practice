// 给你一个字符串 s ，根据下述规则反转字符串：

// 所有非英文字母保留在原有位置。
// 所有英文字母（小写或大写）位置反转。
// 返回反转后的 s 。

//

// 示例 1：

// 输入：s = "ab-cd"
// 输出："dc-ba"
// 示例 2：

// 输入：s = "a-bC-dEf-ghIj"
// 输出："j-Ih-gfE-dCba"
// 示例 3：

// 输入：s = "Test1ng-Leet=code-Q!"
// 输出："Qedo1ct-eeLg=ntse-T!"

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const swapList = [];

  let i = 0,
    j = s.length - 1;

  while (i < j) {
    const isFirstChar = /[a-zA-Z]/.test(s[i]);
    const isLastChar = /[a-zA-Z]/.test(s[j]);

    if (isFirstChar && isLastChar) {
      swapList.push([i, j]);

      i++;
      j--;
    } else {
      // 如果不是字母
      if (!isFirstChar) i++;
      if (!isLastChar) j--;
    }
  }

  return swap(s, swapList);
};

const swap = (s, swapList) => {
  const strs = s.split('');

  for (let [i, j] of swapList) {
    const temp = strs[i];
    strs[i] = strs[j];
    strs[j] = temp;
  }

  return strs.join('');
};

console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!'));
