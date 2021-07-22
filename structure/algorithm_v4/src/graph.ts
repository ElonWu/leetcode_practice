interface AdjType {
	[key: number]: Set<number>;
}

export default class Graph {
	private V: number; // 点数
	private E: number = 0; // 边数
	private Adj: AdjType = {}; // 邻接表

	get vertices() {
		return this.V;
	}
	get edges() {
		return this.E;
	}
	get adjs() {
		return this.Adj;
	}

	/**
	 * @description 创建 n 个点的 graph； 或者直接接受一个 graph
	 * @param {number | Graph} prop
	 */
	constructor(prop: number | Graph) {
		if (typeof prop === "number") {
			this.V = prop;
			for (let i: number = 0; i < prop; i++) {
				this.Adj[i] = new Set();
			}
		} else if (prop instanceof Graph) {
			const { V, E, Adj } = prop;
			this.V = V;
			this.E = E;
			this.Adj = Adj;
		}
	}

	/**
	 * @description 查找 v 的所有相邻点
	 * @param  {number}  v
	 */
	adj(v: number): Set<number> {
		if (this.hasVertice(v)) return this.Adj[v];
		return null;
	}

	/**
	 *  @description graph 的字符串表示
	 */
	toString(): string {
		let s: string = `${this.V}个点, ${this.E}条边;\n`;

		for (let key of Object.keys(this.Adj)) {
			let vals = "";

			this.Adj[key].forEach((val) => (vals += `${val}, `));

			s += `${key}: ${vals}\n`;
		}

		return s;
	}

	/**
	 * @description 判断是否存在点 v
	 * @param {number} v
	 */
	hasVertice(v: number): boolean {
		return Boolean(this.Adj[v]);
	}

	/**
	 * @description 增加点 v
	 * @param {number} v
	 */
	addVertice(v: number): void {
		if (!this.hasVertice(v)) {
			this.Adj[v] = new Set();
			this.V += 1;
		}
	}

	/**
	 * @description 删除点 v
	 * @param {number} v
	 */
	removeVertice(v: number): void {
		if (this.hasVertice(v)) {
			this.Adj[v].forEach((w) => this.removeEdge(v, w));

			delete this.Adj[v];
			this.V -= 1;
		}
	}

	/**
	 * @description 判断边 v-w 是否存在
	 * @param {number} v
	 * @param {number} w
	 */
	hasEdge(v: number, w: number): boolean {
		return this.Adj[v].has(w);
	}

	/**
	 * @description 增加边 v-w
	 * @param {number} v
	 * @param {number} w
	 */
	addEdge(v: number, w: number): void {
		if (!this.hasEdge(v, w)) {
			this.Adj[v].add(w);
			if (v !== w) this.Adj[w].add(v);

			this.E += 1;
		}
	}

	/**
	 * @description 删除边 v-w
	 * @param {number} v
	 * @param {number} w
	 */
	removeEdge(v: number, w: number): void {
		if (this.hasEdge(v, w)) {
			this.Adj[v].delete(w);
			this.Adj[w].delete(v);
			this.E -= 1;
		}
	}

	/**
	 * @description 查找 v 的度数
	 * @param  {Graph}  G
	 * @param  {number}  v
	 */
	static degree(G: Graph, v: number): number {
		return G.adj(v).size;
	}

	/**
	 * @description 最大度数
	 * @param  {Graph}  G
	 */
	static maxDegree(G: Graph): number {
		let max: number = 0;
		for (let i: number = 0; i < G.V; i++) {
			let curr: number = this.degree(G, i);
			if (curr > max) max = curr;
		}
		return max;
	}

	/**
	 * @description 平均度数
	 * @param  {Graph}  G
	 */
	static avgDegree(G: Graph): number {
		return (2 * G.E) / G.V;
	}

	/**
	 * @description 自环数量
	 * @param  {Graph}  G
	 */
	static numberOfSelfLoops(G: Graph): number {
		let count = 0;

		for (let i: number = 0; i < G.V; i++) {
			if (G.adj(i).has(i)) count += 1;
		}

		return count;
	}
}
