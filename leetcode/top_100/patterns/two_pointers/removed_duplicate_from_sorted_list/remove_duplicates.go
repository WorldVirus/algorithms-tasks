// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
package removed_duplicate_from_sorted_list

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func deleteDuplicates(head *ListNode) *ListNode {
	cop_h := head

	for cop_h != nil && cop_h.Next != nil {
		buf := cop_h
		var isNeededRemove bool

		for buf.Next != nil && buf.Val == buf.Next.Val {
			isNeededRemove = true
			buf = buf.Next
		}

		if isNeededRemove {
			cop_h.Next = buf.Next
		}

		cop_h = cop_h.Next
	}

	return head
}
