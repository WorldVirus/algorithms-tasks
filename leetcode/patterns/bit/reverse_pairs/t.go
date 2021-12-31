// 500 + 1000 + 1500 + 2000

// 4,3,5,1 -> 1000, 1500,  4,3,2,1 + 500 + 1500 + 2000 + 2500

//500, 1500, 2000, 500

// 1, 2, 3, 4 -> 2  -> 500

// 4,1,5, 3 -> 1000 +500 + 1000 + 500

// 4,2,3,3 -> 1000 + 500 + 1000 + 500
// 1000 + 500
// 500 + 500 + 1000
// package main

// import (
// 	"fmt"
// )

// func main() {
// 	var size, answer int
// 	fmt.Scanf("%d", &size)

// 	carDrivers := make([]int, size)
// 	for i := 0; i < size; i += 1 {
// 		fmt.Scanf("%d", &carDrivers[i])
// 		fmt.Println(carDrivers[i])

// 	}

// 	curBonus := 500
// 	for i := 0; i < size; i += 1 {
// 		if (i != 0 && carDrivers[i] > carDrivers[i-1]) || (i != size-1 && carDrivers[i] > carDrivers[i+1]) {
// 			curBonus += 500
// 		} else {
// 			curBonus = 500
// 		}

// 		answer += curBonus

// 	}

// 	fmt.Println(answer)

// }

package main

import (
	"container/heap"
	"fmt"
)

func main() {
	var size, x, k, answer int
	fmt.Scanf("%d", &size)
	fmt.Scanf("%d", &x)
	fmt.Scanf("%d", &k)

	var minH MinHeap

	heap.Init(&minH)

	tasks := make([]int, size)
	for i := 0; i < size; i += 1 {
		fmt.Scanf("%d", &tasks[i])
	}
	for i := 0; i < size; i += 1 {
		heap.Push(&minH, tasks[i])
	}
	for k > 0 {
		curDay := heap.Pop(&minH).(int)
		if answer != curDay {
			answer = curDay
			k -= 1
			heap.Push(&minH, x+curDay)
		}
	}
	// 1, 2, 3, 4, 5  , 6, 7, 8, 9, 10
	fmt.Println(answer)
}

type MinHeap []int

func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func (h *MinHeap) Peek() int { return (*h)[0] }
