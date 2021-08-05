/** LINK: https://leetcode.com/problems/reverse-linked-list-ii/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,4,5],2,4
 *  Output: [1,4,3,2,5]
 */
var reverseBetween = function (head, m, n) {
    if (!head || n - m <= 0) {
        return head;
    }


    let answer = new ListNode(-1, null);
    answer.next = head;
    let prev = answer;
    for (let i = 0; i < m - 1; ++i) {
        prev = prev.next;
    }

    let start = prev.next;
    let then = start.next;

    while (n - m > 0) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
        ++m;
    }

    return answer.next;
};

console.log(reverseBetween([1,2,3,4,5],2,4))