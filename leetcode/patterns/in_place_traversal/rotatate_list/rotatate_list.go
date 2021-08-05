/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// https://leetcode.com/problems/rotate-list/
package rotatate_list

func rotateRight(head *ListNode, k int) *ListNode {
	if head == nil || k == 0 {
		return head
	}

	arr := []int{}
	cop := head
	for cop != nil {
		arr = append(arr, cop.Val)
		cop = cop.Next
	}
	k %= len(arr)
	for k > 0 {
		cur := arr[len(arr)-1]
		arr = arr[:len(arr)-1]
		arr = append([]int{cur}, arr...)
		k -= 1
	}

	newCop := head
	var index int
	for newCop != nil {
		newCop.Val = arr[index]
		index += 1
		newCop = newCop.Next
	}

	return head
}
