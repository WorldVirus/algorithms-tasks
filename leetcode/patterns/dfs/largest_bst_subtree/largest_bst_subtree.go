/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func largestBSTSubtree(root *TreeNode) int {
	if root == nil {
		return 0
	}

	ans := dfs(root)
	return ans[0]
}

func dfs(node *TreeNode) []int {
	if node == nil {
		return []int{0, math.MinInt32, math.MaxInt32}
	}

	maxL := dfs(node.Left)
	maxR := dfs(node.Right)

	if node.Val > maxL[1] && node.Val < maxR[2] {
		max := maxL[2]
		if maxL[2] > node.Val {
			max = node.Val
		}

		min := maxR[1]
		if node.Val > maxR[1] {
			min = node.Val
		}

		return []int{maxL[0] + maxR[0] + 1, min, max}
	}

	ans := maxL[0]
	if maxL[0] < maxR[0] {
		ans = maxR[0]
	}

	return []int{ans, math.MaxInt32, math.MinInt32}
}

//  func largestBSTSubtree(root *TreeNode) int {
//     return dfs(root)
// }

// func isBst(node *TreeNode, left, right int)bool{
//     if node == nil{
//         return true
//     }
//     if node.Val <= left || node.Val >= right{
//         return false
//     }

//     return isBst(node.Left, left, node.Val) && isBst(node.Right, node.Val,right)
// }

// func dfs(node *TreeNode)int{
//     if node == nil {
//         return 0
//     }

//     maxL := dfs(node.Left)
//     maxR := dfs(node.Right)
//     if isBst(node, math.MinInt32, math.MaxInt32){
//         return 1 + maxL + maxR
//     }

//     if maxL > maxR{
//         return maxL
//     }

//     return maxR
// }