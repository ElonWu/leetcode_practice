var trap = function (height) {
	let maxIndex,
		secondIndex,
		lastIndex,
		// 最终答案
		result = 0;

	for (let i = 0; i < height.length; i++) {
		let prev = height[i - 1],
			curr = height[i],
			next = height[i + 1];

		if (
			// 起始高点
			(prev === undefined && curr > next) ||
			// 中间高点
			(curr >= next && curr > prev) ||
			(curr >= prev && curr > next) ||
			// 最末高点
			(next === undefined && curr > prev)
		) {
			if (notUndefined(maxIndex)) {
				// 新高点
				if (height[i] >= height[maxIndex]) {
					result += getTrapBetween(
						height.slice(maxIndex + 1, i),
						height[maxIndex]
					);

					maxIndex = i;
					secondIndex = undefined;
				} else if (
					!notUndefined(secondIndex) ||
					(notUndefined(secondIndex) &&
						height[i] >= height[secondIndex])
				) {
					secondIndex = i;
				}
			} else {
				maxIndex = i;
			}

			lastIndex = i;
		}
	}

	if (lastIndex !== maxIndex) {
		if (height[lastIndex] >= height[secondIndex]) {
			result += getTrapBetween(
				height.slice(maxIndex + 1, lastIndex),
				height[lastIndex]
			);
		} else {
			result +=
				getTrapBetween(
					height.slice(maxIndex + 1, secondIndex),
					height[secondIndex]
				) + trap(height.slice(secondIndex, lastIndex + 1));
		}
	}

	return result;
};

function getTrapBetween(slice, level) {
	let result = 0;

	for (let i = 0; i < slice.length; i++) {
		result += Math.max(level - slice[i], 0);
	}

	console.log({ slice, level, result });

	return result;
}

function notUndefined(val) {
	return val !== undefined;
}

const source = "3,9,8,1,1,4,1,5,1,4,1,1,2".split(",").map((el) => parseInt(el));

let result = trap(source);

console.log({ result });
