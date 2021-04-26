// https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/
 func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func Max(x, y int) int {
	if x < y {
		return y
	}
	return x
}

var max int

func dfsR(node *TreeNode, maxCur,minCur int) {
    if node != nil {
        
        diff := Max(Abs(maxCur - node.Val),Abs(minCur - node.Val))

        if diff > max {
            max = diff
        }
    
        if maxCur < node.Val {
            maxCur = node.Val
        }
        
        if minCur > node.Val {
            minCur = node.Val
        }
        
        dfsR(node.Left, maxCur, minCur)
        dfsR(node.Right, maxCur, minCur)
    }
}


func maxAncestorDiff(root *TreeNode) int {
    if root == nil {
        return 0
    }
    
    dfsR(root, root.Val, root.Val)
    return max
}