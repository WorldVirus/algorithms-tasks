/** LINK: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 *
 *  EXAMPLES:
 *  Input: [1,1,2,3,3]
 *  Output: [1,2,3]
 */

function deleteDuplicates (head) {
    if(!head){return null;}

	let answerList = new ListNode(0);
	let buf = answerList;

	while(head){
		buf.next = new ListNode(head.val); 
		while(head.next && head.val === head.next.val){
            head = head.next; 
        }
        
		head = head.next; 
        buf = buf.next;
    }

    
    return answerList.next;
};

console.log(deleteDuplicates([1,1,2,3,3]));