/** LINK: https://leetcode.com/problems/merge-k-sorted-lists/
 * 
 *  EXAMPLES:
 *  Input: [[1,4,5],[1,3,4],[2,6]]
 *  Output: [1,1,2,3,4,4,5,6]
 */

function mergeKLists (lists) {
  if (!lists.length) {
    return null;
  }
  let ar = [];
  for (let i = 0; i < lists.length; ++i) {
    let buf = lists[i];
    while (buf) {
      ar.push(buf.val);
      buf = buf.next;
    }
  }

  ar.sort((a, b) => a - b); 

  let answerList = new ListNode(ar[0]); 
  let buf = answerList; // attention how work with list in js
  for (let i = 1; i < ar.length; ++i) {
    buf.next = new ListNode(ar[i]); 
    buf = buf.next;
  }

  return answerList;

// try to divide and concuer solution, but have some troubles
//
//   function mergeIntervals(nodeF,nodeS){
// 	let head = new ListNode(0);
// 	let point = head;
	
// 	while(nodeF && nodeS){
// 		if(nodeF.val <= nodeS.val){
// 			point.next = nodeF;
// 			nodeF = nodeF.next;
// 		} else{
// 			point.next = nodeS;
// 			nodeS = nodeF;
// 			nodeF = point.next.next;
// 		}
		
// 		point = point.next;
// 	}
	
// 	if(!nodeF){point.next = nodeS}
// 	else{point.next = nodeF;}
	
// 	return head;
// }
// let interval = 1;

// while(interval < lists.length){
// 	for(let i=0; i < lists.length - interval; i*=2){
// 		lists[i] = mergeIntervals(lists[i], lists[i])
// 		if(!i){i=interval;}
// 	}
// 	interval *= 2;
// }

// return lists.length ? lists[0]: lists;
};

console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]))