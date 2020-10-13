/** LINK: https://leetcode.com/problems/remove-linked-list-elements/
 *
 *  EXAMPLES:
 *  Input: [1,2,6,3,4,5,6],6
 *  Output: [1,2,3,4,5]
 */
var removeElements = function (head, val) {
    if (!head) {
        return head;
    }

    let cop = new ListNode(-1, null);
    cop.next = head;
    let cur = head;
    let prev = cop;

    while (cur) {
        if (cur.val === val) {
            prev.next = cur.next;
        } else {
            prev = cur;
        }

        cur = cur.next;
    }

    return cop.next;
};

console.log(removeElements([1,2,6,3,4,5,6],6))