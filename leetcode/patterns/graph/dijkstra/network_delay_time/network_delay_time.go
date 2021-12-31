package network_delay_time

// https://leetcode.com/problems/network-delay-time/
// heap implementation https://leetcode.com/problems/network-delay-time/discuss/1380269/Dijkstra-using-heap-with-true-updates-in-gogolang
// without heap https://leetcode.com/problems/network-delay-time/discuss/439486/golang-%3A-Dijkstra

// https://dev.to/douglasmakey/implementation-of-dijkstra-using-heap-in-go-6e3
// NOT SUBMITED, HAVE BUGS WITH DETECTION MAXIMUM
// import (
//     "fmt"
//     hp "container/heap"
// )
// type path struct {
//     value int
//     nodes []string
// }

// type minPath []path

//  func (h minPath) Len() int           { return len(h) }
// func (h minPath) Less(i, j int) bool { return h[i].value < h[j].value }
//  func (h minPath) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

// func (h *minPath) Push(x interface{}) {
//     *h = append(*h, x.(path))
// }

// func (h *minPath) Pop() interface{} {
//     old := *h
//     n := len(old)
//     x := old[n-1]
//     *h = old[0 : n-1]
//     return x
// }

// type heap struct {
//     values *minPath
// }

// func newHeap() *heap {
//     return &heap{values: &minPath{}}
// }

// func (h *heap) push(p path) {
//     hp.Push(h.values, p)
// }

// func (h *heap) pop() path {
//     i := hp.Pop(h.values)
//     return i.(path)
// }

//    type edge struct {
//     node   string
//     weight int
// }

// type graph struct {
//     nodes map[string][]edge
// }

// func newGraph() *graph {
//     return &graph{nodes: make(map[string][]edge)}
// }

// func (g *graph) addEdge(origin, destiny string, weight int) {
//     g.nodes[origin] = append(g.nodes[origin], edge{node: destiny, weight: weight})
//     g.nodes[destiny] = append(g.nodes[destiny], edge{node: origin, weight: weight})
// }

// func (g *graph) getEdges(node string) []edge {
//     return g.nodes[node]
// }

// func (g *graph) getPath(origin string, size int) int {
//     h := newHeap()
//     h.push(path{value: 0, nodes: []string{origin}})
//     visited := make(map[string]bool)
//     dist := []int{}
//     for len(*h.values) > 0 {
//         p := h.pop()
//         node := p.nodes[len(p.nodes)-1]

//         if _, ok := visited[node]; ok {
//             continue
//         }

//         for _, e := range g.getEdges(node) {
//             if _, ok := visited[e.node]; !ok {
//                 dist = append(dist, p.value + e.weight)
//                 h.push(path{value: p.value + e.weight, nodes: append([]string{}, append(p.nodes, e.node)...)})
//             }
//         }

//         visited[node] = true
//     }

//     if len(dist) != size{
//         return -1
//     }

//     max := 0
//     for item := range dist {
//         if max < dist[item]{
//             max = dist[item]
//         }
//     }

//     return max
// }

// func networkDelayTime(times [][]int, n int, k int) int {
//     graph := newGraph()

//     for i := 0; i < len(times); i += 1{
//         or, child := fmt.Sprint(times[i][0]), fmt.Sprint(times[i][1])
//             graph.addEdge(or, child, times[i][2])
//     }

//     start := fmt.Sprint(k)

//     return graph.getPath(start, n)
// }
