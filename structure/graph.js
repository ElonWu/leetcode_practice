// class GraphItem {
// 	constructor(value) {
// 		this.value = value;
// 	}
// }

// 无向图
class Graph {
	constructor() {
		this.points = [];
		this.lines = {};
	}

	print() {
		for (let key in this.lines) {
			console.log(key, "=>", this.lines[key].join(","));
		}
	}

	has(key) {
		return this.points.indexOf(key) >= 0;
	}

	addPoint(key) {
		if (!this.has(key)) {
			this.points.push(key); // 加入点
			this.lines[key] = []; // 默认边为空
		}
	}

	addLine(start, end) {
		if (this.has(start) && this.has(end)) {
			this.lines[start].push(end);
			this.lines[end].push(start);
		}
	}

	// 广度优先遍历
	breadthFirstIterator(cb) {
		if (this.points.length) {
			let done = [], // 已遍历
				ready = [this.points[0]]; // 下一步起点

			while (ready.length) {
				let nextReady = [];

				for (let i = 0; i < ready.length; i++) {
					let curr = ready[i];
					cb(curr);

					// ready点依次置入已完成
					done.push(curr);

					// 探索当前点的相邻点
					nextReady = nextReady.concat(
						// 过滤掉 以探索， 准备探索，下次准备探索
						this.lines[curr].filter(
							(el) =>
								done.indexOf(el) === -1 &&
								ready.indexOf(el) === -1 &&
								nextReady.indexOf(el) === -1
						)
					);
				}
				// 更新准备探索的点
				ready = nextReady;
			}
		}
	}

	// 广度优先， 最短路径
	breadthFirstGetShortestPath(start, end) {
		// 某一点不匹配
		if (!this.has(start) || !this.has(end)) return null;
		// 起点即终点
		if (start === end) return 0;

		let done = [start], // 已遍历
			ready = {}; // 正在遍历

		// 记录节点路径
		this.lines[start].forEach((key) => (ready[key] = `${start} => ${key}`));

		while (Object.keys(ready).length) {
			let nextReady = {}; // 下一轮遍历

			// console.log(ready);

			for (let curr of Object.keys(ready)) {
				if (curr === end) return ready[curr]; // 匹配成功， 返回触发路径
				done.push(curr); // 已遍历
				// 过滤连线节点中未探索过的点, 并存入下一轮遍历
				this.lines[curr]
					.filter(
						(key) =>
							done.indexOf(key) === -1 && // 已探索
							!ready[key] && // 正在遍历
							!nextReady[key] // 已加入下一轮遍历
					)
					.forEach(
						(key) => (nextReady[key] = `${ready[curr]} => ${key}`) // 更新路径
					);
			}
			// 更新下一轮遍历的点
			ready = nextReady;
		}
	}

	// 深度优先
	depthFirstIterator(cb) {}

	// 深度优先， 最短路径
	breadthFirstGetShortestPath(start, end) {}
}

let graph = new Graph();

// graph.addPoint("A");
// graph.addPoint("B");
// graph.addPoint("C");
// graph.addPoint("D");
// graph.addPoint("E");
// graph.addPoint("F");
// graph.addPoint("G");
// graph.addPoint("H");
// graph.addPoint("I");
// graph.addPoint("J");

// graph.addLine("A", "B");
// graph.addLine("A", "C");

// graph.addLine("B", "C");
// graph.addLine("B", "D");
// graph.addLine("B", "E");

// graph.addLine("C", "E");
// graph.addLine("C", "F");

// graph.addLine("D", "E");
// graph.addLine("D", "G");
// graph.addLine("D", "H");

// graph.addLine("E", "F");
// graph.addLine("E", "H");
// graph.addLine("E", "I");

// graph.addLine("F", "I");
// graph.addLine("F", "J");

// graph.addLine("G", "H");

// graph.addLine("H", "I");

// graph.addLine("I", "J");

// graph.print();
// console.log(graph.breadthFirstGetShortestPath("A", "I"));

// console.log(graph.minPath("A", "H"));

let graph1 = new Graph();

graph1.addPoint("A");
graph1.addPoint("B");
graph1.addPoint("C");
graph1.addPoint("D");
graph1.addPoint("E");
graph1.addPoint("F");
graph1.addPoint("G");
graph1.addPoint("H");
graph1.addPoint("I");
graph1.addPoint("J");
graph1.addPoint("K");
graph1.addPoint("L");
graph1.addPoint("M");
graph1.addPoint("N");
graph1.addPoint("O");
graph1.addPoint("P");
graph1.addPoint("Q");

graph1.addLine("A", "B");

graph1.addLine("B", "C");
graph1.addLine("B", "E");

graph1.addLine("C", "D");
graph1.addLine("D", "F");
graph1.addLine("F", "G");
graph1.addLine("G", "J");
graph1.addLine("J", "M");
graph1.addLine("M", "L");
graph1.addLine("L", "Q");

graph1.addLine("E", "I");
graph1.addLine("I", "H");
graph1.addLine("H", "K");
graph1.addLine("K", "N");
graph1.addLine("N", "O");
graph1.addLine("O", "P");
graph1.addLine("P", "Q");

// 扩大地图
graph1.addPoint("R");
graph1.addPoint("S");
graph1.addPoint("T");
graph1.addPoint("U");
graph1.addPoint("V");
graph1.addPoint("W");
graph1.addPoint("X");

graph1.addLine("R", "N");
graph1.addLine("R", "U");
graph1.addLine("U", "V");
graph1.addLine("V", "W");
graph1.addLine("W", "X");
graph1.addLine("S", "Q");
graph1.addLine("S", "T");
graph1.addLine("S", "X");

// graph1.print();
console.log(graph1.breadthFirstGetShortestPath("A", "X"));
