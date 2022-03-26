var findRestaurant = function (list1, list2) {
  let sum = list1.length - 1 + (list2.length - 1);

  for (let i = 0; i <= sum; i++) {
    let res = [];
    for (let first = 0; first < list1.length; first++) {
      const second = i - first;

      if (list1[first] === list2[second]) {
        res.push(list1[first]);
      }
    }

    if (res.length) return res;
  }
};
