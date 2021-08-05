/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
package n_array_tree_level_order

func levelOrder(root *Node) [][]int {
	queue := []*Node{}
	answer := [][]int{}
	if root == nil {
		return answer
	}

	nextCounter := len((*root).Children)
	curCounter := 1
	queue = append(queue, root)
	curAr := []int{}
	var flag bool

	for len(queue) > 0 {
		curNodes := queue[0]
		queue = queue[1:]
		curCounter -= 1
		curAr = append(curAr, curNodes.Val)

		for _, item := range curNodes.Children {
			queue = append(queue, item)
			if flag {
				nextCounter += 1
			}
		}

		if curCounter == 0 {
			answer = append(answer, curAr)
			curCounter = nextCounter
			curAr = nil
			nextCounter = 0
		}

		flag = true
	}

	return answer
}
