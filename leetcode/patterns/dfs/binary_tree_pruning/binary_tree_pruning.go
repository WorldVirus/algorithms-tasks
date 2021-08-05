/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
// https://leetcode.com/problems/binary-tree-pruning/
package binary_tree_pruning

func pruneTree(root *TreeNode) *TreeNode {
	dfs(root, nil, false)
	if root.Left == nil && root.Right == nil {
		if root.Val == 0 {
			return nil
		}

		return root
	}
	return root
}

func dfs(node *TreeNode, parent *TreeNode, flagL bool) {
	if node == nil {
		return
	}
	dfs(node.Left, node, true)

	dfs(node.Right, node, false)

	if node.Left == nil && node.Right == nil {
		if parent != nil && node.Val == 0 {
			if flagL {
				parent.Left = nil
			} else {
				parent.Right = nil
			}
		}

		return
	}
}
