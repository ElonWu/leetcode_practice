var pathSum = function (root, targetSum) {
  return calcPathCount(root, targetSum, []);
};

const calcPathCount = (root, targetSum, targets) => {
  if (!root) return 0;

  let count = targetSum === root.val ? 1 : 0;

  const nextTargets = [targetSum - root.val];

  for (let t of targets) {
    const next = t - root.val;
    nextTargets.push(next);

    if (next === 0) count++;
  }

  count += calcPathCount(root.left, targetSum, nextTargets);
  count += calcPathCount(root.right, targetSum, nextTargets);

  return count;
};
