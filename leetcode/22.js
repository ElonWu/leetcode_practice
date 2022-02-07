/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let list = [{ value: 0, str: '' }];

  // 每次添加一笔
  for (let i = 0; i < n * 2; i++) {
    list = list.reduce((accu, { value, str }) => {
      // 可加左括号
      if (value < n * 2 - i) accu.push({ value: value + 1, str: str + '(' });
      // 可加右括号
      if (value > 0) accu.push({ value: value - 1, str: str + ')' });

      return accu;
    }, []);
  }

  return list.map((el) => el.str);
};

console.log(generateParenthesis(1));
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
