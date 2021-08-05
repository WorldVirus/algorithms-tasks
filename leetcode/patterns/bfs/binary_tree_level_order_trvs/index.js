/** LINK: https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 *
 *  EXAMPLES:
 *  Input: [3,9,20,null,null,15,7]
 *  Output: [[15,7],[9,20],[3]]
 */

var levelOrderBottom = function (root) {
  if (!root) {
    return [];
  }
  let curAr = [];
  let answer = [];
  let cur = 1;
  let next = 0;
  let queue = [];

  queue.push(root); 
  while (queue.length) {
    let node = queue.shift();
    curAr.push(node.val);
    --cur; 
    if (node.left) {
      ++next;
      queue.push(node.left); 
    }

    if (node.right) {
      ++next;
      queue.push(node.right); 
    }

    if (!cur) {
      cur = next; // 2
      next = 0;
      let index = !answer.length ? 0 : answer.length;
      let cop = curAr.slice(); // ATTENTION
      answer[index] = cop;

      curAr.length = 0;
    }
  }

  return answer.reverse();
};

console.log(levelOrderBottom([3,9,20,null,null,15,7]))