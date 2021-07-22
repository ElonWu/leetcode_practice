var findJudge = function (N, trust) {
	let trustReceivedGraph = {}; // key 收到的信任
	let trustGivenGraph = {}; // key 发出的信任

	for (let i = 0; i < trust.length; i++) {
		let [from, to] = trust[i];

		if (from === to) continue; // 去除相信自己的干扰

		if (!trustReceivedGraph[to]) trustReceivedGraph[to] = [];
		if (!trustGivenGraph[from]) trustGivenGraph[from] = [];

		trustReceivedGraph[to].push(from);

		trustGivenGraph[from].push(to);
	}

	console.log({
		trustReceivedGraph,
		trustGivenGraph,
	});

	for (let key in trustReceivedGraph) {
		// 获得除自己外的全部人信任 且 不信任其他人
		if (trustReceivedGraph[key].length === N - 1 && !trustGivenGraph[key]) {
			return parseInt(key);
		}
	}

	return -1;
};

const source = [
	[1, 3],
	[1, 4],
	[2, 3],
	[2, 4],
	[4, 3],
];

console.log(findJudge(3, source));
