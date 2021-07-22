/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */
// https://leetcode.com/problems/n-ary-tree-postorder-traversal/
package n_array_tree_in_postorder

func postorder(root *Node) []int {
	arr := []int{}

	return dfs(root, &arr)
}

func dfs(node *Node, arr *[]int) []int {
	if node == nil {
		return *arr
	}

	for i := 0; i < len((*node).Children); i += 1 {
		dfs(node.Children[i], arr)
	}

	*arr = append(*arr, node.Val)

	return *arr
}
