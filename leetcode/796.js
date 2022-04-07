/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  for (let i = 0; i < s.length; i++) {
    if (matchRotate(s, goal, i)) return true;
  }

  return false;
};

const matchRotate = (s, goal, offset) => {
  for (let j = 0; j < goal.length; j++) {
    if (s.charAt((j + offset) % s.length) !== goal.charAt(j)) return false;
  }

  return true;
};
