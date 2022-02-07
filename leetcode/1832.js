/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const count = 26;
  let cache = new Array(count);

  for (let i = 0; i < sentence.length; i++) {
    cache[sentence.charCodeAt(i) - 97] = sentence.charAt(i);
  }

  return cache.filter(Boolean).length === count;
};

const sentence = 'thequickbrownfoxjumpsoverthelazydog';

console.log(checkIfPangram(sentence));
