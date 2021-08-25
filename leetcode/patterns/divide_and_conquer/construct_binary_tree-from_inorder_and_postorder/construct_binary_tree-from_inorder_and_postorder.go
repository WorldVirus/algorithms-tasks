/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 // https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 package construct_binary_tree-from_inorder_and_postorder
func buildTree(inorder []int, postorder []int) *TreeNode {
	if len(inorder) == 0 || len(postorder) == 0 {
		return nil
	}

	root := &TreeNode{
		Val: postorder[len(postorder)-1],
	}

	var index int
	for index < len(inorder) {
		if inorder[index] != postorder[len(postorder)-1] {
			index += 1
		} else {
			break
		}
	}

	root.Left = buildTree(inorder[:index], postorder[:index])
	root.Right = buildTree(inorder[index+1:], postorder[index:len(postorder)-1])

	return root
}