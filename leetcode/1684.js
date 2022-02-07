/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  return words.filter((word) => {
    for (let char of word) {
      if (!allowed.includes(char)) return false;
    }
    return true;
  }).length;
};

const allowed = 'cad',
  words = ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'];

console.log(countConsistentStrings(allowed, words));
