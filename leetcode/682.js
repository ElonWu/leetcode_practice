/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let res = 0,
    arr = [];

  for (let i = 0; i < ops.length; i++) {
    let diff;
    switch (ops[i]) {
      case 'D':
        diff = arr[arr.length - 1] * 2;
        arr.push(diff);
        break;
      case 'C':
        diff = -1 * arr.pop();
        break;
      case '+':
        diff = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(diff);
        break;
      default:
        diff = parseInt(ops[i]);
        arr.push(diff);
        break;
    }

    res += diff;
  }

  return res;
};

const ops = ['5', '2', 'C', 'D', '+'];
// 输出：30
console.log(calPoints(ops));
