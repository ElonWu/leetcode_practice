import Graph from "./graph";

export default class DepthFirstSearch {
	private Searched: boolean[];
	private Count: number = 0;
	// private Paths:

	get count() {
		return this.Count;
	}
	get searched() {
		return this.Searched;
	}

	/**
	 * @description 和 v 连通的全部顶点
	 * @param {Graph} G
	 * @param {number} v
	 */
	constructor(G: Graph, s: number) {
		let g: Graph = new Graph(G);

		this.Searched = new Array(g.vertices).fill(false); // 默认全部未连通

		this.dfs(g, s);
	}

	dfs(g: Graph, v: number) {
		// 当前点能够连通
		this.Searched[v] = true;
		this.Count++;

		// 对当前点的全部相邻点中，未连通过的点，递归进行深度优先查询
		g.adj(v).forEach((adj: number) => {
			if (!this.Searched[adj]) this.dfs(g, adj);
		});
	}

	/**
	 * @description s 和 v 是否连通
	 * @param {number} v
	 */
	marked(v: number) {
		return this.Searched[v];
	}
}
