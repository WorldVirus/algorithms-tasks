/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 * }
 */
// https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/
package convert_search_binary_tree_to_dll

func treeToDoublyList(root *Node) *Node {
	if root == nil {
		return root
	}
	var first *Node
	var last *Node

	dfs(root, &first, &last)
	last.Right = first
	first.Left = last

	return first
}

func dfs(node *Node, first **Node, last **Node) {
	if node == nil {
		return
	}

	dfs(node.Left, first, last)
	if *first == nil {
		*first = node
	} else {
		(*last).Right = node
		node.Left = *last
	}
	*last = node

	dfs(node.Right, first, last)
}
