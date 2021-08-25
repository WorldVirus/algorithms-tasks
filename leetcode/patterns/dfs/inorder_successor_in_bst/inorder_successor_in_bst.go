/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
// https://leetcode.com/problems/inorder-successor-in-bst/
package inorder_successor_in_bst

func inorderSuccessor(root *TreeNode, p *TreeNode) *TreeNode {
	answer := &TreeNode{}
	var isFound bool
	for root != nil {
		if root.Val > p.Val {
			answer = root
			isFound = true
			root = root.Left
		} else {
			root = root.Right
		}
	}

	if isFound {
		return answer
	}

	return nil
}
