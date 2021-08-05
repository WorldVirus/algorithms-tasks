/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func findNearestRightNode(root *TreeNode, u *TreeNode) *TreeNode {
    if root == nil && u == nil {
        return nil
    }
    
    var q []*TreeNode
    q = append(q, root)
    cur := 1
    var next int
    
    for len (q) > 0 {
        buf := q[0]
        q = q[1:]
        cur -= 1
        if buf != nil && buf.Val == u.Val {
            if len(q) == 0 || cur == 0 {
                return nil
            }
            
            return q[0]
        }
        
        if buf != nil && buf.Left != nil{
            q = append(q, buf.Left)
            next += 1
        }
        if buf != nil && buf.Right != nil{
            q = append(q, buf.Right)
            next += 1
        }

        
        if cur == 0 {
            cur = next
            next = 0
        }
    }
    
    return nil
}