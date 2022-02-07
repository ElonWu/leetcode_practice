// 给你一个字符串 date ，按 YYYY-MM-DD 格式表示一个 现行公元纪年法 日期。请你计算并返回该日期是当年的第几天。
// 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。每个月的天数与现行公元纪年法（格里高利历）一致。

/**
 * @param {string} date
 * @return {number}
 */
// var dayOfYear = function (date) {
//   const [year, month, day] = date.split('-').map((el) => parseInt(el));

//   let result = day;

//   for (let m = 1; m < month; m++) {
//     if ([1, 3, 5, 7, 8, 10, 12].includes(m)) result += 31;
//     else if (m === 2) result += isLeapYear(year) ? 29 : 28;
//     else result += 30;
//   }

//   return result;
// };

var dayOfYear = function (date) {
  const [year, month, day] = date.split('-').map((el) => parseInt(el));

  let result = day;

  result += [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334][month - 1];

  console.log(month, year, isLeapYear(year));
  if (month > 2 && isLeapYear(year)) result += 1;

  return result;
};

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const date = '2018-12-31';

console.log(dayOfYear(date));
