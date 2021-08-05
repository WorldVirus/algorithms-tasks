/** LINK: https://leetcode.com/problems/swap-nodes-in-pairs/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,4]
 *  Output: [2,1,4,3]
 */
var swapPairs = function (head) {
    //     if(!head || !head.next){
    //         return head;
    //     }

    //     let first = head;
    //     let second = head.next;

    //     first.next = swapPairs(second.next);
    //     second.next = first;
    //         console.log(first,second)

    //     return second;

    let answer = new ListNode(-1, null);
    answer.next = head;

    let prev = answer;

    while (head && head.next) {
        let first = head;
        let second = head.next;

        prev.next = second;
        first.next = second.next;
        second.next = first;

        prev = first;
        head = first.next;
    }

    return answer.next;
};

console.log(swapPairs([1,2,3,4]));