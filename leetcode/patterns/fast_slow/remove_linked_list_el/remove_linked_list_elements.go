// https://leetcode.com/problems/remove-linked-list-elements/
package remove_linked_list_el

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {
	if head == nil {
		return nil
	}

	cop := &ListNode{
		Val:  -1,
		Next: nil,
	}

	cop.Next = head
	cur := head
	prev := cop

	for cur != nil {
		if cur.Val == val {
			prev.Next = cur.Next
		} else {
			prev = cur
		}

		cur = cur.Next
	}

	return cop.Next
}
