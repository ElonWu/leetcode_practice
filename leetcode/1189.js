/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let cache = { a: 0, b: 0, l: 0, o: 0, n: 0 },
    nums = {
      a: 1,
      b: 1,
      l: 2,
      o: 2,
      n: 1,
    },
    res;

  for (let s of text) {
    if (cache[s] !== undefined) cache[s]++;
  }

  for (let key of Object.keys(cache)) {
    let curr = Math.floor(cache[key] / nums[key]);
    res = res === undefined ? curr : Math.min(res, curr);
  }

  return res;
};

console.log(maxNumberOfBalloons('nlaebolko'));
console.log(maxNumberOfBalloons('balon'));
