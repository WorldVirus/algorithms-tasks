/**
 * Definition for Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Parent *Node
 * }
 */
// https://leetcode.com/problems/inorder-successor-in-bst-ii/
package innorder_successor_in_bst

func inorderSuccessor(node *Node) *Node {

	if node.Right != nil {
		return dfs(node.Right, node.Val, node.Right)
	}

	cur_node := node
	node = node.Parent
	for node != nil {
		if node.Val > cur_node.Val {
			return dfs(node, cur_node.Val, node)
		}
		if node.Right != nil && node.Right.Val > cur_node.Val {
			return dfs(node.Right, cur_node.Val, node.Right)
		}

		node = node.Parent
	}

	return nil
}

func dfs(cur_min *Node, cur int, node *Node) *Node {
	if node == nil {
		return cur_min
	}

	if cur_min.Val > node.Val && cur < node.Val {
		cur_min = node
	}

	min_l := dfs(cur_min, cur, node.Left)
	min_r := dfs(cur_min, cur, node.Right)

	if min_l.Val > min_r.Val {
		return min_r
	}

	return min_l
}
