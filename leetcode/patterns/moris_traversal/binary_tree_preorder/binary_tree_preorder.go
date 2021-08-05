/**
* Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
*/
// https://leetcode.com/problems/binary-tree-preorder-traversal/
// https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/
package binary_tree_preorder

func preorderTraversal(root *TreeNode) []int {
	cur := root
	res := []int{}

	for cur != nil {
		if cur.Left == nil {
			res = append(res, cur.Val)
			cur = cur.Right
		} else {
			prev := cur.Left

			for prev.Right != nil && prev.Right != cur {
				prev = prev.Right
			}

			if prev.Right == nil {
				res = append(res, cur.Val)
				prev.Right = cur
				cur = cur.Left
			} else {
				prev.Right = nil
				cur = cur.Right
			}
		}
	}

	return res
}
