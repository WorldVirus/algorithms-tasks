// https://leetcode.com/problems/cheapest-flights-within-k-stops/
package cheapest_flights_within_k_stops

import "math"

const inf = math.MaxUint32

func findCheapestPrice(n int, flights [][]int, src int, dst int, K int) int {

	cheapest := make([]int, n+1)
	for i := 0; i < len(cheapest); i++ {
		cheapest[i] = inf
	}
	cheapest[src] = 0

	for i := 0; i <= K; i++ {
		tmp := make([]int, n+1)
		copy(tmp, cheapest)
		for _, flight := range flights {
			from, to, cost := flight[0], flight[1], flight[2]
			if cheapest[from] == inf {
				continue
			}
			if tmp[from]+cost < tmp[to] {
				tmp[to] = cheapest[from] + cost
			}
		}
		cheapest = tmp
	}

	if p := cheapest[dst]; p != inf {
		return p
	}
	return -1
}

// Dijkstra
// type Path struct {
// 	node  int
// 	price int
// 	k     int
// }

// type minHeap []Path

// func (h minHeap) Len() int           { return len(h) }
// func (h minHeap) Less(i, j int) bool { return h[i].price < h[j].price }
// func (h minHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

// func (h *minHeap) Push(x interface{}) {
// 	*h = append(*h, x.(Path))
// }

// func (h *minHeap) Pop() interface{} {
// 	x := (*h)[len(*h)-1]
// 	*h = (*h)[:len(*h)-1]
// 	return x
// }

// func findCheapestPrice(n int, flights [][]int, src int, dst int, K int) int {
// 	cache := make(map[int]map[int]int)
// 	for _, flight := range flights {
// 		if _, ok := cache[flight[0]]; !ok {
// 			cache[flight[0]] = make(map[int]int)
// 		}
// 		cache[flight[0]][flight[1]] = flight[2]
// 	}
// 	h := &minHeap{}
// 	heap.Init(h)
// 	heap.Push(h, Path{price: 0, node: src, k: K + 1})

// 	for h.Len() > 0 {
// 		path := heap.Pop(h).(Path)
// 		if path.node == dst {
// 			return path.price
// 		}
// 		if path.k > 0 {
// 			for next, price := range cache[path.node] {
// 				heap.Push(h, Path{node: next, price: path.price + price, k: path.k - 1})
// 			}
// 		}
// 	}
// 	return -1
// }
