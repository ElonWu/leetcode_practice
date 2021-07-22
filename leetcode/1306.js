var canReach = function (arr, start) {
	let graph = {},
		targets = [],
		len = arr.length,
		history = [start];

	for (let i = 0; i < len; i++) {
		if (arr[i] === 0) {
			if (start === i) return true;

			targets.push(i);
		} else {
			if (!graph[i]) graph[i] = [];
			if (i + arr[i] < len) graph[i].push(i + arr[i]);
			if (i - arr[i] >= 0) graph[i].push(i - arr[i]);
		}
	}

	let choices = graph[start];

	while (choices.length) {
		let nextChoice = [];

		for (let i = 0; i < choices.length; i++) {
			// 找到目标
			if (targets.indexOf(choices[i]) >= 0) return true;

			// 记录当前路径已走过
			history.push(choices[i]);

			// 子路径加入到下次循环
			nextChoice = nextChoice.concat(graph[choices[i]]);
		}

		// 过滤已走过的路径
		choices = nextChoice.filter((el) => history.indexOf(el) === -1);
	}
	return false;
};

const source = [4, 2, 3, 0, 3, 1, 2];

console.log(canReach([0], 0));
