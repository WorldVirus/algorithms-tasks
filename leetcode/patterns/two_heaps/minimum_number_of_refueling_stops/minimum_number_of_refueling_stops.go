// https://leetcode.com/problems/minimum-number-of-refueling-stops/
package minimum_number_of_refueling_stops

import "container/heap"

func minRefuelStops(target int, startFuel int, stations [][]int) int {
	maxH := &maxHeap{}
	var answer, pos int
	for i := range stations {
		startFuel = startFuel - (stations[i][0] - pos) // 0
		for startFuel < 0 && maxH.Len() > 0 {
			startFuel += heap.Pop(maxH).(int)
			answer += 1
		}
		if startFuel < 0 {
			return -1
		}

		heap.Push(maxH, stations[i][1]) // 50,25
		pos = stations[i][0]            // 50
	}

	startFuel = startFuel - (target - pos)
	for startFuel < 0 && maxH.Len() > 0 {
		startFuel += heap.Pop(maxH).(int)
		answer += 1
	}
	if startFuel < 0 {
		return -1
	}

	return answer
}

type maxHeap []int

func (h *maxHeap) Less(i, j int) bool { return (*h)[i] > (*h)[j] }
func (h *maxHeap) Swap(i, j int)      { (*h)[i], (*h)[j] = (*h)[j], (*h)[i] }
func (h *maxHeap) Len() int           { return len(*h) }
func (h *maxHeap) Pop() (v interface{}) {
	*h, v = (*h)[:h.Len()-1], (*h)[h.Len()-1]
	return v
}
func (h *maxHeap) Push(v interface{}) { *h = append(*h, v.(int)) }
