// https://leetcode.com/problems/sell-diminishing-valued-colored-balls/
// TLE
package sell_diminishing_valued_colored_balls

import "container/heap"

func maxProfit(inventory []int, orders int) int {
	var maxH maxHeap
	heap.Init(&maxH)

	for i := 0; i < len(inventory); i += 1 {
		heap.Push(&maxH, inventory[i])
	}

	var answer int64
	modul := int64(1e9 + 7)
	heap.Push(&maxH, 0)
	for orders > 0 {
		curMax := heap.Pop(&maxH).(int)
		diff := curMax - maxH.Peek()
		// kind of optimization
		// i think possible use arithmetic progression formula
		for j := 0; j <= diff && orders > 0 && curMax > 0; j += 1 {
			answer = (answer + int64(curMax)) % modul
			curMax -= 1
			orders -= 1
		}

		heap.Push(&maxH, curMax)
	}

	return int(answer)
}

type maxHeap []int

func (m *maxHeap) Len() int { return len(*m) }

func (m *maxHeap) Less(i, j int) bool { return (*m)[i] > (*m)[j] }

func (m *maxHeap) Swap(i, j int) { (*m)[i], (*m)[j] = (*m)[j], (*m)[i] }

func (m *maxHeap) Push(x interface{}) {
	*m = append(*m, x.(int))
}
func (m *maxHeap) Peek() int { return (*m)[0] }
func (m *maxHeap) Pop() interface{} {
	val := (*m)[len(*m)-1]
	*m = (*m)[:len(*m)-1]
	return val
}
