var checkValidString = function (s) {
  let cache = 0,
    star = 0,
    maxForbidRight = 0;

  for (let char of s) {
    switch (char) {
      case '(':
        cache += 1;
        break;

      case ')':
        cache -= 1;
        break;

      case '*':
        star += 1;
        break;
    }
    if (cache < -star) return false;

    if (cache <= 0) {
      maxForbidRight = Math.max(
        maxForbidRight,
        star - Math.floor((star - cache) / 2),
      );
    } else if (star > cache) {
      maxForbidRight = Math.max(maxForbidRight, Math.ceil((star - cache) / 2));
    }

    console.log(cache, star, maxForbidRight);
  }

  if (Math.abs(cache) > star) return false;

  // if (cache > star - maxForbidRight) return false;

  console.log(cache, star, maxForbidRight);

  return cache + maxForbidRight <= star;
};

// const str = '(*)(';
// const str = '(*)()';
const str =
  '(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())';

console.log(checkValidString(str));
