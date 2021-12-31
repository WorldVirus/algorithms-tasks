// https://leetcode.com/problems/delete-nodes-and-return-forest/

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
package delete_nodes_and_return_forest

func delNodes(root *TreeNode, to_delete []int) []*TreeNode {
	toDeleteSet := make(map[int]bool)
	result := make([]*TreeNode, 0)
	for _, t := range to_delete {
		toDeleteSet[t] = true
	}

	dfs(root, &result, toDeleteSet, true)

	return result
}

func dfs(node *TreeNode, resultSet *[]*TreeNode, toDeleteSet map[int]bool, isRoot bool) *TreeNode {
	if node == nil {
		return nil
	}
	deleted := toDeleteSet[node.Val]
	if isRoot && !deleted {
		*resultSet = append(*resultSet, node)
	}

	node.Left = dfs(node.Left, resultSet, toDeleteSet, deleted)
	node.Right = dfs(node.Right, resultSet, toDeleteSet, deleted)
	if deleted {
		return nil
	} else {
		return node
	}
}
