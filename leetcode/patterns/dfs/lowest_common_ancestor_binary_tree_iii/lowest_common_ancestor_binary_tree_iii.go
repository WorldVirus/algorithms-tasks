// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
/**
 * Definition for Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Parent *Node
 * }
 */

package lowest_common_ancestor_binary_tree_iii

func lowestCommonAncestor(p *Node, q *Node) *Node {
	if p == nil || q == nil {
		return nil
	}

	parentP := map[*Node]bool{}

	for p != nil {
		parentP[p] = true
		p = p.Parent
	}

	for q != nil {
		if _, ok := parentP[q]; ok {
			return q
		}

		q = q.Parent
	}

	return nil
}
