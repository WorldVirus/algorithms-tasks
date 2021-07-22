/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// https://leetcode.com/problems/reverse-nodes-in-k-group/
package reverse_nodes_in_k_groups

func reverseKGroup(head *ListNode, k int) *ListNode {
	answer := &ListNode{
		Val:  0,
		Next: head,
	}

	groupPrev := answer

	for true {
		kth := findGroup(groupPrev, k)
		if kth == nil {
			break
		}
		groupNext := kth.Next
		cur, next := groupPrev.Next, kth.Next
		for cur != groupNext {
			tmp := cur.Next
			cur.Next = next
			next = cur
			cur = tmp
		}

		tmp := groupPrev.Next
		groupPrev.Next = kth
		groupPrev = tmp
	}

	return answer.Next
}

func findGroup(node *ListNode, k int) *ListNode {
	for k > 0 && node != nil {
		k -= 1
		node = node.Next
	}

	return node
}
