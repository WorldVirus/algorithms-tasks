// https://leetcode.com/problems/graph-valid-tree/
package graph_valid_tree

func validTree(n int, edges [][]int) bool {
	// not connected if < n - 1 and cycle if n - 1 >
	if len(edges) != n-1 {
		return false
	}
	adjList := make(map[int][]int)
	for i := range edges {
		adjList[edges[i][0]] = append(adjList[edges[i][0]], edges[i][1])
		adjList[edges[i][1]] = append(adjList[edges[i][1]], edges[i][0])
	}

	q := []int{0}
	seen := map[int]bool{}

	for len(q) > 0 {
		cur := adjList[q[0]]
		q = q[1:]
		for i := 0; i < len(cur); i += 1 {
			if seen[cur[i]] {
				continue
			}

			q = append(q, cur[i])
			seen[cur[i]] = true
		}

	}

	return len(seen) == n
}
