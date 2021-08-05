/** LINK:https://leetcode.com/problems/palindrome-linked-list
 *
 *  EXAMPLES:
 *  Input: [1,1,2,1]
 *  Output: false
 */

function palindromeLinkedList(head) {
    function reversedList(list){
        let newList = null;
        while(list){
            let copCur = list.next;
            list.next = newList;
            newList = list;
            list = copCur;
          }
       return newList;
    }
    
      let reversList = reversedList(head);
      let result = true;
      while(head){
          if(head.val !== reversList.val){ return false;}
          head = head.next;
          reversList = reversList.next;
      }
      
      return true;
  }

console.log(palindromeLinkedList([1,1,2,1]));