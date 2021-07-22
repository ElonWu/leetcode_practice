var candy = function (ratings) {
	let gap = 0,
		candyArr = [1];

	for (let i = 1; i < ratings.length; i++) {
		let curr = ratings[i],
			prev = ratings[i - 1],
			prevCandy = candyArr[i - 1],
			currCandy;

		// 大于前者
		if (curr > prev) {
			currCandy = prevCandy + 1;
			gap = i;
		}
		// 等于前者
		else if (curr === prev) {
			currCandy = 1;
		}
		// 小于前者
		else if (curr < prev) {
			currCandy = 1;

			if (prevCandy === 1) {
				candyArr[i - 1] = 2;

				// 追溯直到 gap
				for (let j = i - 2; j >= gap; j--) {
					// 下一人分数较小， 糖果不更多时， 为当前人增加糖果
					if (
						ratings[j] > ratings[j + 1] &&
						candyArr[j] <= candyArr[j + 1]
					) {
						candyArr[j] = candyArr[j + 1] + 1;
					}
					// 直到不产生链式影响或到达 gap， gap 原本就应该比前者大， 所以它增加时， 也必然不会产生链式影响
					else {
						break;
					}
				}
			}
		}

		// console.log({ i, currCandy, gap });

		candyArr.push(currCandy);
	}

	return candyArr.reduce((curr, next) => curr + next, 0);
};

const source = [1, 3, 2, 2, 1];

console.log(candy(source));
