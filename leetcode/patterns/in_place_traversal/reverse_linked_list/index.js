/** LINK: https://leetcode.com/problems/reverse-linked-list
 *
 *  EXAMPLES:
 *  Input: head = [1,2,3,4,5] 
 *  Output: [5,4,3,2,1]
 */

function reverseLinkedList(head) {
    let prev = null;    
    while(head){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;

    // cheet solution with recursion
    //
    // if(!head || !head.next){
    //     return head;
    //  }
    //  let temp = reverseList(head.next);
    //  head.next.next = head;
    //  head.next = null;
    //  return temp;
};

console.log(reverseLinkedList([1,2,3,4,5]));