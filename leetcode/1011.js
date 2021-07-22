var shipWithinDays = function (weights, D) {
	let maxItem = Math.max(...weights);
	let minAvg = avg(weights, D);
	// 最少依次装载量
	let minPertime = Math.max(maxItem, minAvg);

	console.log({
		maxItem,
		minAvg,
		minPertime,
	});

	while (true) {
		// 不断累加装载量， 直到满足 D 天内完成
		let days = getDays(weights, minPertime);
		if (days <= D) return minPertime;
		minPertime++;
	}
};

function getDays(weights, max) {
	let result = 0,
		total = 0,
		len = weights.length;

	for (let i = 0; i < len; i++) {
		total += weights[i];

		if (total > max) {
			result++;
			i--;
			total = 0;
		}
	}

	return result + 1;
}

function avg(list, D) {
	let sum = 0;
	for (let i = 0; i < list.length; i++) {
		sum += list[i];
	}

	return Math.floor(sum / D);
}

const source = require("../_test/1011");

console.log(shipWithinDays(source, 5832));
