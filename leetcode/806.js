/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  const widthHash = {};

  for (let i = 0; i < widths.length; i++) {
    widthHash[String.fromCharCode(i + 97)] = widths[i];
  }

  let lineWidth = 0,
    line = 1;

  for (let i = 0; i < s.length; i++) {
    if (lineWidth + widthHash[s[i]] > 100) {
      lineWidth = widthHash[s[i]];
      line++;
    } else {
      lineWidth += widthHash[s[i]];
    }
  }

  return [line, lineWidth];
};

// const widths = [
//   10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
//   10, 10, 10, 10, 10, 10, 10,
// ];
// S = 'abcdefghijklmnopqrstuvwxyz';

const widths = [
  4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10,
];
S = 'bbbcccdddaaa';

console.log(numberOfLines(widths, S));
