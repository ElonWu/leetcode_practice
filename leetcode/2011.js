/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  return operations.reduce(
    (accu, curr) => (accu += curr.includes('++') ? 1 : -1),
    0,
  );
};

const operations = ['--X', 'X++', 'X++'];

console.log(finalValueAfterOperations(operations));
