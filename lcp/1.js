/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  let result = 0;
  i = 0;

  while (i < guess.length) {
    result += guess[i] === answer[i];
    i++;
  }

  return result;
};
