// https://leetcode.com/problems/number-of-provinces/
package number_of_provinces

type DisjointSet struct {
	Rank         []int
	Nodes        []int
	CounterNodes int
}

func NewDisjointSet(size int) DisjointSet {
	ds := DisjointSet{}
	ds.Nodes = make([]int, size)
	ds.Rank = make([]int, size)

	for i := 0; i < size; i += 1 {
		ds.Nodes[i] = i
		ds.Rank[i] += 1
	}

	ds.CounterNodes = size
	return ds
}

func (ds *DisjointSet) find(val int) int {
	if ds.Nodes[val] == val {
		return val
	}

	ds.Nodes[val] = ds.find(ds.Nodes[val])
	return ds.Nodes[val]
}

func (ds *DisjointSet) Union(i, j int) {
	iNode := ds.find(i)
	jNode := ds.find(j)

	if jNode != iNode {
		if ds.Rank[iNode] > ds.Rank[jNode] {
			ds.Nodes[jNode] = ds.Nodes[iNode]
		} else if ds.Rank[iNode] < ds.Rank[jNode] {
			ds.Nodes[iNode] = ds.Nodes[jNode]
		} else {
			ds.Rank[iNode] += 1
			ds.Nodes[jNode] = ds.Nodes[iNode]
		}
		ds.CounterNodes -= 1
	}
}

func (ds *DisjointSet) CalcRoots() int {
	return ds.CounterNodes
}

func findCircleNum(isConnected [][]int) int {
	ds := NewDisjointSet(len(isConnected))
	for i := 0; i < len(isConnected); i += 1 {
		ds.Union(i, i)
		for j := 0; j < len(isConnected[0]); j += 1 {
			if isConnected[i][j] == 1 {
				ds.Union(i, j)
			}
		}
	}

	return ds.CalcRoots()
}
