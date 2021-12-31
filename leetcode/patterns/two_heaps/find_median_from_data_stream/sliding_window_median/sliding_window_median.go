// https://leetcode.com/problems/sliding-window-median/
// O(nlogk)
package sliding_window_median

import "container/heap"

type MinHeap []int

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.(int))
}

func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

type MaxHeap []int

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MaxHeap) Push(x interface{}) {
	// Push and Pop use pointer receivers because they modify the slice's length,
	// not just its contents.
	*h = append(*h, x.(int))
}

func (h *MaxHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}
func medianSlidingWindow(nums []int, k int) []float64 {
	mi := &MinHeap{}
	ma := &MaxHeap{}
	heap.Init(mi)
	heap.Init(ma)
	var res []float64
	var curMa int
	var curMi int

	for i, v := range nums {
		if ma.Len() == 0 {
			heap.Push(ma, v)
		} else if mi.Len() == ma.Len() {
			curMi = heap.Pop(mi).(int)
			if curMi > v {
				heap.Push(mi, curMi)
				heap.Push(ma, v)
			} else {
				heap.Push(ma, curMi)
				heap.Push(mi, v)
			}
		} else {
			curMa = heap.Pop(ma).(int)
			if curMa < v {
				heap.Push(ma, curMa)
				heap.Push(mi, v)
			} else {
				heap.Push(ma, v)
				heap.Push(mi, curMa)
			}
		}
		if mi.Len()+ma.Len() == k {
			curMa = heap.Pop(ma).(int)
			heap.Push(ma, curMa)
			if mi.Len() != ma.Len() {
				res = append(res, float64(curMa))
			} else {
				curMi = heap.Pop(mi).(int)
				heap.Push(mi, curMi)
				res = append(res, (float64(curMa)+float64(curMi))/2)
			}
			toBeRemoved := nums[i-k+1]
			removed := false
			for j := 0; j < ma.Len(); j++ {
				if (*ma)[j] == toBeRemoved {
					(*ma) = append((*ma)[:j], (*ma)[j+1:]...)
					removed = true
					heap.Init(ma)
					if ma.Len() < mi.Len() {
						curMi = heap.Pop(mi).(int)
						heap.Push(ma, curMi)
					}
					break
				}
			}
			if removed == false {
				for j := 0; j < mi.Len(); j++ {
					if (*mi)[j] == toBeRemoved {
						(*mi) = append((*mi)[:j], (*mi)[j+1:]...)
						removed = true
						heap.Init(mi)
						if ma.Len()-mi.Len() == 2 {
							curMa = heap.Pop(ma).(int)
							heap.Push(mi, curMa)
						}
						break
					}
				}
			}
		}

	}
	return res
}
