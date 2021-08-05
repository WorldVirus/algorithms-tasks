/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
// create number_1 for linked_list_1
// create number_2 for linked_list_2
// sum number_1 and number_2
// change values of linked_list_1 at last number of sum
// https://leetcode.com/problems/add-two-numbers/
package add_two_numbers

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// not submited
	if l1 == nil && l2 != nil {
		return l2
	}
	if l1 != nil && l2 == nil {
		return l1
	}

	cop := l1
	var valF int
	coef := 1
	for cop != nil {
		valF += coef * cop.Val
		coef *= 10
		cop = cop.Next
	}

	var valS int
	coef = 1

	for l2 != nil {
		valS += coef * l2.Val
		coef *= 10
		l2 = l2.Next
	}

	sum := valF + valS
	newCop := l1

	for sum != 0 {
		cur := sum % 10
		sum = (sum - cur) / 10
		if newCop != nil {
			newCop.Val = cur
			if newCop.Next == nil && sum > 0 {
				newCop.Next = &ListNode{
					Val:  cur,
					Next: nil,
				}

			}

			newCop = newCop.Next
			continue
		}
	}

	return l1

	// submited
	// tail := &ListNode{0, nil}
	// head := tail
	// var num int
	// for a != nil || b != nil {
	// 	num /= 10
	// 	if a != nil {
	// 		num += a.Val
	// 		a = a.Next
	// 	}
	// 	if b != nil {
	// 		num += b.Val
	// 		b = b.Next
	// 	}

	// 	head.Next = &ListNode{Val: num % 10}
	// 	head = head.Next
	// }

	// if num/10 == 1 {
	// 	head.Next = &ListNode{Val: 1}
	// }

	// return tail.Next
}
