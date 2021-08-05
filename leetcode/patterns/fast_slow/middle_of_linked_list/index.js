/** LINK: https://leetcode.com/problems/middle-of-the-linked-list/
 *
 *  EXAMPLES:
 *  Input: head = [1,2,3,4,5]
 *  Output: 3
 */

function middleNode(head) {
    if(!head){return null;}
    let counter = 0;
    let copList = head;
    while(head){
        ++counter;
        head = head.next;
    }
    
   counter = counter % 2 === 0 ? counter/2 + 1: Math.ceil(counter/2);
   let bufCounter = 0;
   while(copList){
        ++bufCounter;
        if(bufCounter === counter){return copList;}
       copList = copList.next;
    }

    // beatiful solution
    // slow = fast = head;
    // while (fast && fast.next) {
    //     slow = slow.next;
    //     fast = fast.next.next;
    // }
    //return slow;
};

console.log(middleNode([1,2,3,4,5]));