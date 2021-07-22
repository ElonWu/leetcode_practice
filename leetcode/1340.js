var maxJumps = function (arr, d) {
	let graph = {},
		len = arr.length;

	for (let i = 0; i < len; i++) {
		let val = arr[i],
			nextSteps = [],
			start = Math.max(0, i - d),
			end = Math.min(len - 1, i + d);

		for (let j = i - 1; j >= start; j--) {
			if (arr[j] >= val) break;
			nextSteps.push(j);
		}

		for (let j = i + 1; j <= end; j++) {
			if (arr[j] >= val) break;
			nextSteps.push(j);
		}

		graph[i] = { val, nextSteps };
	}
	let max = 0,
		getMax = genGetMax();

	for (let key in graph) {
		let currMax = 1 + getMax(graph, key);

		if (currMax > max) max = currMax;

		graph[key].max = currMax;
	}

	return max;
};

function genGetMax() {
	let cache = {};

	return function getMax(graph, key) {
		if (cache[key] !== undefined) return cache[key];

		const { nextSteps } = graph[key];

		if (nextSteps.length === 0) return 0;

		let max = 1 + Math.max(...nextSteps.map((next) => getMax(graph, next)));

		cache[key] = max;

		return max;
	};
}

const arr = [
		39,
		1,
		1,
		19,
		40,
		34,
		87,
		44,
		30,
		3,
		89,
		55,
		81,
		97,
		84,
		52,
		10,
		8,
		96,
		69,
		17,
		48,
		93,
		84,
		10,
		48,
		1,
		93,
		65,
		24,
		100,
		26,
		24,
		33,
		52,
		17,
		15,
		26,
		8,
		87,
		69,
		47,
		61,
		58,
		78,
		52,
		2,
		72,
		23,
		9,
		3,
		27,
		36,
		38,
		88,
		20,
		21,
		79,
		5,
		67,
		22,
		24,
		39,
		7,
		17,
		29,
		3,
		97,
		36,
		51,
		91,
		53,
		98,
		48,
		83,
		52,
		14,
		71,
		91,
		46,
		42,
		88,
		44,
		52,
		74,
		8,
		39,
		11,
		48,
		59,
		98,
		34,
		43,
		94,
		46,
		20,
		26,
		62,
		6,
		36,
		59,
		77,
		23,
		93,
		6,
		93,
		64,
		18,
		33,
		69,
		56,
		48,
		54,
		98,
		98,
		53,
		14,
		97,
		47,
		50,
		33,
		87,
		10,
		51,
		92,
		1,
		14,
		27,
		19,
		34,
		83,
		65,
		48,
		44,
		82,
		51,
		81,
		83,
		23,
		8,
		63,
		70,
		76,
		83,
		46,
		84,
		20,
		7,
		37,
		4,
		69,
		63,
		84,
		71,
		91,
		78,
		58,
		25,
		63,
		85,
		98,
		78,
		21,
	],
	d = 62;

console.log(maxJumps(arr, d));
