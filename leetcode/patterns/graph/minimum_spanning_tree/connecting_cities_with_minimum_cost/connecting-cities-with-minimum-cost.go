// https://leetcode.com/problems/connecting-cities-with-minimum-cost/
// prims Algo
package connecting_cities_with_minimum_cost

import "container/heap"

func minimumCost(n int, connections [][]int) int {
	var answer int
	graph := generateGraph(connections)

	var pq PriorityQueue

	heap.Init(&pq)
	visited := map[int]bool{}
	arr := []int{1, 0}

	heap.Push(&pq, arr)

	for pq.Len() > 0 {
		curVal := heap.Pop(&pq).([]int)

		if ok, _ := visited[curVal[0]]; ok {
			continue
		}

		visited[curVal[0]] = true
		n -= 1
		answer += curVal[1]

		for _, item := range graph[curVal[0]] {
			if ok, _ := visited[item[0]]; !ok {
				heap.Push(&pq, item)
			}
		}
	}

	if n > 0 {
		return -1
	}

	return answer
}

func generateGraph(connections [][]int) map[int][][]int {
	graph := map[int][][]int{}

	for _, conn := range connections {
		v1 := conn[0]
		v2 := conn[1]
		cost := conn[2]
		if _, ok := graph[v1]; ok {
			graph[v1] = append(graph[v1], []int{v2, cost})
		} else {
			graph[v1] = [][]int{{v2, cost}}
		}
		if _, ok := graph[v2]; ok {
			graph[v2] = append(graph[v2], []int{v1, cost})
		} else {
			graph[v2] = [][]int{{v1, cost}}
		}
	}

	return graph
}

type PriorityQueue [][]int

func (pq PriorityQueue) Len() int {
	return len(pq)
}

func (pq PriorityQueue) Less(i, j int) bool {
	return pq[i][1] < pq[j][1]
}

func (pq PriorityQueue) Swap(i, j int) {
	pq[i], pq[j] = pq[j], pq[i]
}

func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := len(old)
	item := old[n-1]
	old[n-1] = nil
	*pq = old[0 : n-1]
	return item
}

func (pq *PriorityQueue) Push(x interface{}) {
	*pq = append(*pq, x.([]int))
}
