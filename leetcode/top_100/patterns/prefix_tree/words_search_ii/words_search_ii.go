// https://leetcode.com/problems/word-search-ii/

// We are doing a 4-child DFS traversal.
// The worst case depth in this case is the minimum of [traversing the entire board, traversing until we hit the end of a word].
// -> O of each traversal is4^(min(Y, NM))
// Note: min accounts for the case where we have words in the dictionary longer than the number of characters in the board itself.
// We are doing this N*M times since we need to check for words starting at each position in the board
// -> O(4^(min(Y, NM))*NM)
package words_search_ii

type TrieNode struct {
	word     string
	children [26]*TrieNode
}

func findWords(board [][]byte, words []string) []string {
	root := &TrieNode{}
	for _, w := range words {
		node := root
		for _, c := range w {
			if node.children[c-'a'] == nil {
				node.children[c-'a'] = &TrieNode{}
			}
			node = node.children[c-'a']
		}
		node.word = w
	}

	result := make([]string, 0)
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[0]); j++ {
			dfs(i, j, board, root, &result)
		}
	}
	return result
}

func dfs(i, j int, board [][]byte, node *TrieNode, result *[]string) {
	if i < 0 || j < 0 || i == len(board) || j == len(board[0]) {
		return
	}
	c := board[i][j]
	if c == '#' || node.children[c-'a'] == nil {
		return
	}
	node = node.children[c-'a']
	if node.word != "" {
		*result = append(*result, node.word)
		node.word = ""
	}

	board[i][j] = '#'
	dfs(i+1, j, board, node, result)
	dfs(i-1, j, board, node, result)
	dfs(i, j+1, board, node, result)
	dfs(i, j-1, board, node, result)
	board[i][j] = c
}
