/** LINK: https://leetcode.com/problems/linked-list-cycle/
 *
 *  EXAMPLES:
 *  Input: [3,2,0,-4]
 *  Output: true
 */

function hasCycle(head) {
    if(!head){return false;}
    let hare = head;
    let tortoise = head;
    while(hare.next && hare.next.next){
        hare = hare.next.next;
        tortoise = tortoise.next;
        if(tortoise.val === hare.val){
            return true;
        }
    }
    
    return false;
};

console.log(hasCycle([3,2,0,-4]));