/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
package n_array_preorder

func preorder(root *Node) []int {
	answer := []int{}

	if root == nil {
		return answer
	}

	stack := []*Node{}
	for i := len(root.Children) - 1; i >= 0; i -= 1 {
		stack = append(stack, root.Children[i])
	}
	answer = append(answer, root.Val)

	for len(stack) > 0 {
		cur := stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		answer = append(answer, cur.Val)

		for i := len(cur.Children) - 1; i >= 0; i -= 1 {
			stack = append(stack, cur.Children[i])
		}
	}

	return answer
}
