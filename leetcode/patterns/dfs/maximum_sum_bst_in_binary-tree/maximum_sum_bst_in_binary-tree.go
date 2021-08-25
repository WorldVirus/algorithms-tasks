/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 // https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/
 package maximum_sum_bst_in_binary-tree
func maxSumBST(root *TreeNode) int {
	arr := dfs(root)
	if arr[3] < 0 {
		return 0
	}

	return arr[3]
}

func dfs(node *TreeNode) []int {
	if node == nil {
		return []int{math.MaxInt32, math.MinInt32, 0, math.MinInt32}
	}

	left := dfs(node.Left)
	right := dfs(node.Right)
	if left[1] < node.Val && node.Val < right[0] {
		min := left[0]
		if min > node.Val {
			min = node.Val
		}
		max := right[1]
		if max < node.Val {
			max = node.Val
		}

		sum := left[2] + right[2] + node.Val
		maxSum := left[3]
		if left[3] < right[3] {
			maxSum = right[3]
		}

		if maxSum < sum {
			maxSum = sum
		}

		return []int{min, max, sum, maxSum}
	}

	tempSum := left[2]
	if tempSum < right[2] {
		tempSum = right[2]
	}

	tempMaxSum := left[3]
	if tempMaxSum < right[3] {
		tempMaxSum = right[3]
	}

	return []int{math.MinInt32, math.MaxInt32, tempSum, tempMaxSum}
}
   