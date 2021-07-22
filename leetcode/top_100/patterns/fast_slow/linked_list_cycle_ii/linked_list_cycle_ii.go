// https://leetcode.com/problems/linked-list-cycle-ii/

package linked_list_cycle_ii

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func detectCycle(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}

	fast, slow := head, head
	var cycleFlag bool

	for fast != nil && fast.Next != nil && fast.Next.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
		if fast == slow {
			cycleFlag = true
			break
		}
	}

	if !cycleFlag {
		return nil
	}

	first := head
	for first != slow {
		first = first.Next
		slow = slow.Next
	}

	return first
}
