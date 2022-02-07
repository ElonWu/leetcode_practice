/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  let result = 0,
    houseI = 0,
    heaterI = 0;

  houses.sort((a, b) => a - b);
  heaters.sort((a, b) => a - b);

  while (houseI < houses.length) {
    const house = houses[houseI];

    // 找到最近的 heaterI
    while (heaterI < heaters.length - 1) {
      const nextDistance = Math.abs(heaters[heaterI + 1] - house);
      const prevDistance = Math.abs(heaters[heaterI] - house);

      console.log({
        houseI,
        heaterI,
        nextDistance: nextDistance / 10000000,
        prevDistance: prevDistance / 10000000,
      });

      if (nextDistance > prevDistance) break;

      heaterI++;
    }

    // console.log(houseI, heaterI);

    // 更新最小覆盖
    result = Math.max(result, Math.abs(heaters[heaterI] - house));

    houseI++;
  }

  return result;
};

const houses = [
    282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878,
    458777923,
  ],
  heaters = [
    823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327,
    16531729, 823378840, 143542612,
  ];

console.log(findRadius(houses, heaters));
