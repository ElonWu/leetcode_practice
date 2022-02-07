var reverseLeftWords = function (s, n) {
  n %= s.length;
  return s.slice(n) + s.slice(0, n);
};

console.log(reverseLeftWords('lrloseumgh', 6));
