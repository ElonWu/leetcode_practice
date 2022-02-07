/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  let result = [first],
    curr = first;

  for (let i = 0; i < encoded.length; i++) {
    curr = encoded[i] ^ curr;
    result.push(curr);
  }

  return result;
};

console.log(decode([1, 2, 3], 1));
