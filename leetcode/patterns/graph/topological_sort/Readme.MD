[Article1](https://emre.me/coding-patterns/topological-sort/)

[Article2](https://www.geeksforgeeks.org/topological-sorting/)

Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u v, vertex u comes before v in the ordering. Topological Sorting for a graph is not possible if the graph is not a DAG.
The ordering of the nodes in the array is called a topological ordering.
Note: this isn't the only way to produce a topological ordering.


Topological Sort pattern is very useful for finding a linear ordering of elements that have dependencies on each other.
Scheduling or grouping problems which have dependencies between items are good examples to the problems that can be solved with using this technique.

PseudoCode:

    L ← Empty list that will contain the sorted nodes
    while exists nodes without a permanent mark do
        select an unmarked node n
        visit(n)

    function visit(node n)
        if n has a permanent mark then
            return
        if n has a temporary mark then
            stop   (not a DAG)

        mark n with a temporary mark

        for each node m with an edge from n to m do
            visit(m)

        remove temporary mark from n
        mark n with a permanent mar

Time Complexity: O(V + E) where E is the number of edges, V number of vertices

Space Complexity: O(V)

![Picture](imgs/topological-sort.gif)

func main() {
  //Result array
  var q []string = make([]string, 0)
  //Array accessed
  var visited []string = make([]string, 0)
  for i := 0; i < 5; i++ {
    tupusort(&q, &visited, strconv.Itoa(i))
  }
  // fmt.Printf("visited: %v \n", visited)
  reverse(q)
  fmt.Printf("topusort: %v \n", q)
}

//Topology sort DFS
func tupusort(q *[]string, visited *[]string, element string) {
  if !isVisited(visited, element) {
    *visited = append(*visited, element)
    if edge[element] != "" {
      tupusort(q, visited, edge[element])
    }
    *q = append(*q, element)
  }
}

//Check whether it exists in the accessed array
func isVisited(visited *[]string, element string) bool {
  var isVisited bool = false
  for _, item := range *visited {
    if item == element {
      isVisited = true
      break
    }
  }
  return isVisited
}

//Reverse array order
func reverse(arr []string) {
  for i, j := 0, len(arr)-1; i < j; i, j = i+1, j-1 {
    arr[i], arr[j] = arr[j], arr[i]
  }
}