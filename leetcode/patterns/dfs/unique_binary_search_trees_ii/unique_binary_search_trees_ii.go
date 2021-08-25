/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func generateTrees(n int) []*TreeNode {
	return traversalGenerate(1, n)
}

func traversalGenerate(start, end int) []*TreeNode {
	if start > end {
		return []*TreeNode{nil}
	}

	ans := []*TreeNode{}
	for curVal := start; curVal < end+1; curVal += 1 {
		leftAr := traversalGenerate(start, curVal-1)
		rightAr := traversalGenerate(curVal+1, end)

		for i := 0; i < len(leftAr); i += 1 {
			for j := 0; j < len(rightAr); j += 1 {
				node := &TreeNode{
					Val: curVal,
				}

				node.Left = leftAr[i]

				node.Right = rightAr[j]

				ans = append(ans, node)
			}

		}
	}

	return ans
}


