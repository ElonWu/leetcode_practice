/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  // 拆解为分数, 并完成基础加减
  const [numerator, denominator] = calcExpression(expression);

  // 求分子分母最大公约数
  let greatestCommonDivisor = calcGreatestCommonDivisor(numerator, denominator);

  // 确保分母是正数
  if (greatestCommonDivisor * denominator < 0) {
    greatestCommonDivisor *= -1;
  }

  // 得到最终结果
  return `${numerator / greatestCommonDivisor}/${
    denominator / greatestCommonDivisor
  }`;
};

// 拆解并计算全部和
const calcExpression = (expression) => {
  let prevNumerator = '',
    prevDenominator = '',
    numerator = '',
    denominator = '',
    nextOperator = '',
    passSlash = false;

  for (let i = 0; i <= expression.length; i++) {
    const char = expression[i];

    // 经过 slash
    if (char === '/') {
      passSlash = true;
      continue;
    }

    // 进入一个计算周期
    if (
      // 到达末尾
      char === undefined ||
      // 有当前分母才能进入下一周期， 否则说明分母是负数
      (denominator && (char === '+' || char === '-'))
    ) {
      nextOperator = char;

      // 计算二者
      [prevNumerator, prevDenominator] = calcSum(
        prevNumerator,
        prevDenominator,
        numerator,
        denominator,
      );

      // 重置当前分子分母
      numerator = '';
      denominator = '';
      // 重置 slash
      passSlash = false;
    }
    // 累加当前分母
    else if (passSlash) {
      denominator += char;
    }
    // 累加当前分子
    else {
      // 默认加法， - 则修改首数字为负数
      if (nextOperator === '-') {
        numerator += '-';
        nextOperator = '';
      }
      numerator += char;
    }
  }
  return [parseInt(prevNumerator), parseInt(prevDenominator)];
};

// 分数之和
const calcSum = (prevNumerator, prevDenominator, numerator, denominator) => {
  if (!prevNumerator || !prevDenominator) return [numerator, denominator];

  return [
    prevNumerator * denominator + numerator * prevDenominator,
    prevDenominator * denominator,
  ];
};

// 最大公约数
const calcGreatestCommonDivisor = (a, b) => {
  if (a % b === 0) return b;
  return calcGreatestCommonDivisor(b, a % b);
};

console.log(fractionAddition('1/3-1/2'));
