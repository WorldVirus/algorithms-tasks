// https://leetcode.com/problems/is-graph-bipartite/
package is_graph_bipartite

func isBipartite(graph [][]int) bool {
	visited := make([]int, len(graph)+1)

	for item := range graph {
		visited[item] = -1
	}

	for item := range graph {
		if visited[item] == -1 {
			stack := []int{item}
			visited[item] = 0

			for len(stack) > 0 {
				curNode := stack[len(stack)-1]
				stack = stack[:len(stack)-1]

				for i := 0; i < len(graph[curNode]); i += 1 {
					val := graph[curNode][i]
					if visited[val] == -1 {
						stack = append(stack, val)
						visited[val] = visited[curNode] ^ 1
					} else if visited[curNode] == visited[val] {
						return false
					}
				}
			}
		}
	}

	return true
}
