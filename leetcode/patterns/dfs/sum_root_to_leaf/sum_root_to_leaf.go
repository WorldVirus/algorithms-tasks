// https://leetcode.com/problems/sum-root-to-leaf-numbers/
package sum_root_to_leaf

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumNumbers(root *TreeNode) int {
	var answer int

	dfs(&answer, root, []int{})

	return answer
}

func dfs(answer *int, root *TreeNode, arr []int) {
	if root.Left == nil && root.Right == nil {
		arr = append(arr, root.Val)
		coef := 1
		var curVal int
		for i := len(arr) - 1; i >= 0; i -= 1 {
			curVal += arr[i] * coef
			coef *= 10
		}

		*answer += curVal

		return
	}

	arr = append(arr, root.Val)
	if root.Left != nil {
		dfs(answer, root.Left, arr)
	}
	if root.Right != nil {
		dfs(answer, root.Right, arr)
	}

}
