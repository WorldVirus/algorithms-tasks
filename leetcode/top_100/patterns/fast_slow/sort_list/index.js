/** LINK: https://leetcode.com/problems/sort-list/
 *
 *  EXAMPLES:
 *  Input: [4,2,1,3]
 *  Output: [1,2,3,4]
 */
var sortList = function(head) {
    if(!head || !head.next){
        return head;
    }
    
    let fast = head;
    let slow = head;
    let prev = null;
    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;
    let l1 = sortList(slow);
    let l2 = sortList(head);
    
    return merge(l1, l2);
};

var merge = function(l1,l2){
    let list = new ListNode(0);
    let cop = list;
    
    while(l1 && l2){
        if(l1.val < l2.val){
            cop.next = l1;
            l1 = l1.next;
        } else{
           cop.next = l2;
            l2 = l2.next;  
        }
        
        cop = cop.next;
    }
    
    if(l1){
        cop.next = l1;
    }
    
    if(l2){
        cop.next = l2
    }
    
    return list.next;
}