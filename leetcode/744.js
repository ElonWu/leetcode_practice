/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

var nextGreatestLetter = function (letters, target) {
  const charCodeA = 97,
    chartCodeZ = 122,
    charCode = target.charCodeAt(0);

  for (
    let code = charCode + 1;
    code < charCode + (chartCodeZ - charCodeA);
    code++
  ) {
    const realCode =
      code > chartCodeZ ? code - (chartCodeZ - charCodeA) - 1 : code;
    const char = String.fromCharCode(realCode);
    if (letters.includes(char)) return char;
  }
};
