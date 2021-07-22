import Graph from "./src/graph";
import DepthFirstSearch from "./src/dfs";

const graph = new Graph(5);

graph.addEdge(0, 2);
graph.addEdge(3, 4);
// graph.addEdge(4, 1);
graph.addEdge(1, 0);
graph.addEdge(1, 1);

// console.log(graph.toString());
// graph.removeVertice(1);
// console.log(graph.toString());
// graph.removeEdge(3, 4);
// console.log(graph.toString());
// console.log(Graph.numberOfSelfLoops(graph));

const dfs: DepthFirstSearch = new DepthFirstSearch(graph, 2);

console.log({
	marked_1: dfs.marked(1),
	count: dfs.count,
	searched: dfs.searched,
});
