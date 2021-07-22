var minJumps = function (arr) {
	let len = arr.length;

	if (len <= 1) return 0;

	let graph = {};

	for (let i = 0; i < len; i++) {
		for (let key in graph) {
			if (graph[key].val === arr[i] && i - key > 1) {
				graph[key].next.push(i);
			}
		}

		if (!graph[i]) graph[i] = { val: arr[i], next: [] };

		if (i - 1 >= 0) graph[i].next.push(i - 1);
		if (i + 1 < len) graph[i].next.push(i + 1);
	}

	let step = 0,
		choices = [0],
		history = { 0: true };

	while (choices.length) {
		step++;

		console.log({
			step,
			len: choices.length,
			history: Object.keys(history).length,
		});

		let nextChoices = [];

		for (let i = 0; i < choices.length; i++) {
			let next = graph[choices[i]].next;

			for (let index of next) {
				if (index === len - 1) return step;

				if (!history[index]) {
					history[index] = true;
					nextChoices.push(index);
				}
			}
		}

		choices = nextChoices;
	}

	return step;
};

const source = require("../_test/1345");

console.log(minJumps(source));
