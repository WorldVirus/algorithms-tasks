/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// https://leetcode.com/problems/reorder-list/
package reorder_list

func reorderList(head *ListNode) {
	fast, slow := head, head

	for fast != nil && fast.Next != nil {
		slow, fast = slow.Next, fast.Next.Next
	}

	var prev *ListNode

	prev, slow, slow.Next = nil, slow.Next, nil
	for slow != nil {
		slow, prev, slow.Next = slow.Next, slow, prev
	}

	begin, end := head, prev
	for begin != nil && end != nil {
		begin, begin.Next, end, end.Next = begin.Next, end, end.Next, begin.Next
	}
}
