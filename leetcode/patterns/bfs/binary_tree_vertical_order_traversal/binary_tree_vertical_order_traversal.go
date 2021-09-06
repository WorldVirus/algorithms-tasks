// https://leetcode.com/problems/binary-tree-vertical-order-traversal/
package binary_tree_vertical_order_traversal

import "math"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func verticalOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}

	levelNodes := map[int][]int{}

	queueCounterLev := []int{0}
	queue := []*TreeNode{root}
	min := math.MaxInt32
	max := math.MinInt32
	for len(queue) > 0 {
		curNode := queue[0]
		queue = queue[1:]
		curVal := queueCounterLev[0]
		queueCounterLev = queueCounterLev[1:]
		if _, ok := levelNodes[curVal]; !ok {
			levelNodes[curVal] = []int{}
		}

		levelNodes[curVal] = append(levelNodes[curVal], curNode.Val)

		if curNode.Left != nil {
			queue = append(queue, curNode.Left)
			queueCounterLev = append(queueCounterLev, curVal-1)
		}

		if curNode.Right != nil {
			queue = append(queue, curNode.Right)
			queueCounterLev = append(queueCounterLev, curVal+1)
		}
		if min > curVal {
			min = curVal
		}

		if max < curVal {
			max = curVal
		}
	}

	answer := [][]int{}

	index := min

	for index <= max {
		if val, ok := levelNodes[index]; ok {
			answer = append(answer, val)
		}
		index += 1
	}

	return answer
}
