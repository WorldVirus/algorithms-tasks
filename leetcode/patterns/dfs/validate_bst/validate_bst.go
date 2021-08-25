/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
// https://leetcode.com/problems/validate-binary-search-tree/
package validate_bst

func isValidBST(root *TreeNode) bool {
	return valid(root, nil, nil)

}
func valid(node *TreeNode, lower *int, upper *int) bool {
	if node == nil {
		return true
	}

	value := node.Val

	if lower != nil {
		if value <= *lower {
			return false
		}
	}

	if upper != nil {
		if value >= *upper {
			return false
		}
	}

	return valid(node.Left, lower, &value) && valid(node.Right, &value, upper)
}
