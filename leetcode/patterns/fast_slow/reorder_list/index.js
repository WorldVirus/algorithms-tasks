/** LINK: https://leetcode.com/problems/reorder-list/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,4,5]
 *  Output: [1,5,2,4,3]
 */
var reorderList = function (head) {
    if (!head) { return; }

    let slow = head;
    let fast = head;

    // find median
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse
    let cur = slow, tmp = slow;
    let prev = null

    while (cur) {
        tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }

    // merge
    let first = head; let second = prev;

    while (second.next) {
        tmp = first.next;
        first.next = second
        first = tmp;

        tmp = second.next;
        second.next = first;
        second = tmp;
    }
};

console.log(reorderList([1, 2, 3, 4, 5]))