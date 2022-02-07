/**
 * @param {string[][]} paths
 * @return {string}
 */
// var destCity = function (paths) {
//   let cache = {};

//   for (let [start, dest] of paths) {
//     cache[start] = false;
//     if (cache[dest] !== false) cache[dest] = true;
//   }

//   for (let [key, value] of Object.entries(cache)) {
//     if (value) return key;
//   }
// };

var destCity = function (paths) {
  let cache = {};

  for (let [start, dest] of paths) {
    cache[start] = dest;
  }

  let stop = paths[0][0],
    next;

  while ((next = cache[stop])) {
    stop = next;
  }

  return stop;
};

const paths = [
  ['B', 'C'],
  ['D', 'B'],
  ['C', 'A'],
];

console.log(destCity(paths));
