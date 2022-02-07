var xorOperation = function (n, start) {
  let result = start;

  for (let i = 1; i < n; i++) {
    result = result ^ (start += 2);
  }

  return result;
};

console.log(xorOperation(5, 0));
