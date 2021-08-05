/** LINK: https://leetcode.com/problems/binary-tree-right-side-view/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,null,5,null,4]
 *  Output: [1,3,4]
 */

var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  let answer = [];
  let queue = [];
  let cur = 1;
  let next = 0;
  let flag = true;

  queue.push(root);
  while (queue.length) {
    let node = queue.shift(); 
    if (node.right) {
      queue.push(node.right);
      ++next;
    }

    if (node.left) {
      queue.push(node.left); 
      ++next;
    }

    if (flag) {
      answer.push(node.val);
      flag = false;
    }

    --cur;
    if (!cur) {
      cur = next; 
      next = 0;
      flag = true;
    }
  }

  return answer;
};

console.log(rightSideView([1,2,3,null,5,null,4]))