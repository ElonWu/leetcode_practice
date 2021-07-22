// 在100-999这900个自然数中,若将组成这个数的三个数字认为是三条线段的长度,
// 那么是三条线段组成一个等腰三角形(包括等边)的共有多少个？

// A、45
// B、91
// C、121
// D、142
// E、156
// F、165

function count(max) {
	let arr = [];

	for (let i = 100; i <= max; i++) {
		const [a, b, c] = i
			.toString()
			.split("")
			.map((el) => parseInt(el))
			.sort();

		// 无法组成三角形
		if (a === 0 || b === 0 || c === 0 || a + b <= c) continue;
		if (a === b || b === c) arr.push(i);
	}

	console.log(arr.length);
}

count(999);
