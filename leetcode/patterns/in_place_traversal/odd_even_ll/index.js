/** LINK: https://leetcode.com/problems/odd-even-linked-list/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,4,5]
 *  Output: [1,3,5,2,4]
 */
var oddEvenList = function (head) {
    if (!head) {
        return head;
    }

    let answer = new ListNode(-1, null);
    answer.next = head;
    let evenL = new ListNode(-1, null);
    let cop = evenL;

    while (head && head.next) {
        cop.next = new ListNode(head.next.val, null);
        cop = cop.next;
        head.next = head.next.next;

        if (head.next) { head = head.next; }
    }

    if (evenL.next) {
        head.next = new ListNode(evenL.next.val, evenL.next.next)
    }
    return answer.next;

};

console.log(oddEvenList([1,2,3,4,5]));