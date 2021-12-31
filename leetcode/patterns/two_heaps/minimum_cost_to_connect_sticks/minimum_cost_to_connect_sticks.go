// https://leetcode.com/problems/minimum-cost-to-connect-sticks/
package minimum_cost_to_connect_sticks

import "container/heap"

func connectSticks(sticks []int) int {
	var minH minHeap

	heap.Init(&minH)

	for i := 0; i < len(sticks); i++ {
		heap.Push(&minH, sticks[i])
	}

	var answer int

	for len(minH) > 1 {
		stickF := heap.Pop(&minH).(int)
		stickS := heap.Pop(&minH).(int)

		sum := stickF + stickS
		answer += sum
		heap.Push(&minH, sum)
	}

	return answer
}

type minHeap []int

func (m *minHeap) Len() int { return len(*m) }

func (m *minHeap) Less(i, j int) bool { return (*m)[i] < (*m)[j] }

func (m *minHeap) Swap(i, j int) { (*m)[i], (*m)[j] = (*m)[j], (*m)[i] }

func (m *minHeap) Push(x interface{}) {
	*m = append(*m, x.(int))
}

func (m *minHeap) Pop() interface{} {
	val := (*m)[len(*m)-1]
	*m = (*m)[:len(*m)-1]
	return val
}
