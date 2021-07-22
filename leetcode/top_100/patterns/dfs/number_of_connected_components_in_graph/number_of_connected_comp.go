// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
package number_of_connected_components_in_graph

func countComponents(n int, edges [][]int) int {
	var connectedNodes int
	adjList := make(map[int][]int)
	visited := make(map[int]bool)
	for i := range edges {
		adjList[edges[i][0]] = append(adjList[edges[i][0]], edges[i][1])
		adjList[edges[i][1]] = append(adjList[edges[i][1]], edges[i][0])
	}

	for i := 0; i < n; i += 1 {
		connectedNodes += dfs(visited, adjList, i)
	}

	return connectedNodes
}

func dfs(visited map[int]bool, adjList map[int][]int, val int) int {
	if visited[val] {
		return 0
	}

	visited[val] = true
	for i := range adjList[val] {
		dfs(visited, adjList, adjList[val][i])
	}

	return 1
}

// int bfs(int src, List<Integer>[] graph, boolean[] visited) {
// 	if (visited[src]) return 0;
// 	visited[src] = true;
// 	Queue<Integer> q = new LinkedList<>();
// 	q.offer(src);
// 	while (!q.isEmpty()) {
// 		int u = q.poll();
// 		for (int v : graph[u]) {
// 			if (!visited[v]) {
// 				visited[v] = true;
// 				q.offer(v);
// 			}
// 		}
// 	}
// 	return 1;
// }
