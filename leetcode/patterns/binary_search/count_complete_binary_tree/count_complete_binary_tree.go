/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
// https://leetcode.com/problems/count-complete-tree-nodes/
package count_complete_binary_tree

import "math"

func countNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}

	var height int
	stack := []*TreeNode{}
	stack = append(stack, root)

	for len(stack) > 0 {
		curNode := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		if curNode.Left != nil {
			stack = append(stack, curNode.Left)
			height += 1
		}

	}

	if height == 0 {
		return 1
	}

	start, end := 1, powInt(2, height)-1

	for start <= end {
		mid := start + (end-start)/2
		if exist(root, mid, height) {
			start = mid + 1
			continue
		}

		end = mid - 1
	}

	return powInt(2, height) - 1 + start
}

func exist(node *TreeNode, curNode, height int) bool {
	start, end := 0, powInt(2, height)-1
	for i := 0; i < height; i += 1 {
		mid := start + (end-start)/2

		if mid < curNode {
			node = node.Right
			start = mid + 1
			continue
		}

		end = mid
		node = node.Left
	}

	if node == nil {
		return false
	}

	return true
}

func powInt(x, y int) int {
	return int(math.Pow(float64(x), float64(y)))
}
