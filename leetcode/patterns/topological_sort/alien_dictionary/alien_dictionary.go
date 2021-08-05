import (
	"strings"
)

func alienOrder(words []string) string {
	/* topological sort by DFS, so the least values should be at child direction
	 * O(T), T is the total number of chars in all words
	 */
	toSmallerMap := make(map[byte][]byte)
	visited := make(map[byte]bool)
	var builder strings.Builder

	for _, word := range words {
		for i := 0; i < len(word); i++ {
			toSmallerMap[word[i]] = make([]byte, 0)
		}
	}

	/* gather edge relations */
	for i := 0; i < len(words)-1; i++ {
		w1 := words[i]
		w2 := words[i+1]

		if len(w1) > len(w2) && strings.HasPrefix(w1, w2) {
			return ""
		}

		l := len(w1)
		if l > len(w2) {
			l = len(w2)
		}

		for j := 0; j < l; j++ {
			if w1[j] == w2[j] {
				continue
			}
			toSmallerMap[w2[j]] = append(toSmallerMap[w2[j]], w1[j])
			break
		}
	}

	/* DFS over each start point */
	for char := range toSmallerMap {
		if dfs(char, toSmallerMap, visited, &builder) == false {
			return ""
		}
	}

	return builder.String()
}

func dfs(char byte, toSmallerMap map[byte][]byte, visited map[byte]bool, builder *strings.Builder) bool {
	finish, ok := visited[char]
	if ok {
		/* circular graph if finish is false */
		return finish
	}

	visited[char] = false
	smaller := toSmallerMap[char]

	for _, s := range smaller {
		if dfs(s, toSmallerMap, visited, builder) == false {
			return false
		}
	}

	visited[char] = true

	/* after all smaller chars are visited and put into the result, we can put current one now */
	builder.WriteByte(char)

	return true
}

// bfs

// var adjList = make(map[byte][]byte,0)
// var inDegree = make(map[byte]int,0)

// for i:= range words[0]{
// 	adjList[words[0][i]] = make([]byte,0)
// 	inDegree[words[0][i]] = 0
// }

// for i:=1;i<len(words);i++{
// 	wrd := words[i]
// 	for j := range wrd{
// 		if _,ok := adjList[wrd[j]];!ok{
// 			adjList[wrd[j]] = make([]byte,0)
// 			inDegree[wrd[j]] = 0
// 		}
// 	}
// }

// for i:=1;i<len(words);i++{
// 	prev,curr := words[i-1],words[i]
// 	for j := range prev{
// 		if j < len(curr) && curr[j]!= prev[j]{
// 			// in from prev[j] - curr[j]
// 			// indeg(curr[j]++)
// 			// add to adjlist(prev[j])
// 			adjList[prev[j]] = append(adjList[prev[j]], curr[j])
// 			inDegree[curr[j]]++
// 			break
// 		}
// 		if j == len(curr) {
// 			return ""
// 		}
// 	}
// }
// var queue = []byte{}
// for k, v := range inDegree{
// 	if v == 0 {
// 		queue = append(queue,k)
// 	}
// }

// var ret = []byte{}

// for len(queue) > 0{
// 	l := len(queue)
// 	for i:=0;i<l;i++{
// 		top := queue[0]
// 		ret = append(ret, top)
// 		queue = queue[1:]
// 		// reduce inDeg of children by 1
// 		for _, child := range adjList[top] {
// 			inDegree[child]--
// 			if inDegree[child] == 0 {
// 				queue = append(queue, child)
// 			}
// 		}
// 	}
// }
// if len(adjList)!=len(ret) {
// 	return ""
// }
// return string(ret)
// //invalid would mean that there is a cycle somewhere in our graph
// }
