/** LINK: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
 *
 *  EXAMPLES:
 *  Input: [3,9,20,null,null,15,7]
 *  Output: [[3],[20,9],[15,7]]
 */

var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  let answer = [];
  let levelAr = [];
  let queue = [];
  let cur = 1;
  let next = 0;
  let rightF = false;
  queue.push(root);

  while (queue.length) {
    let node = queue.shift(); //
    levelAr.push(node.val); //[9,20]
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
      let buf = levelAr.slice();
      if (rightF) {
        buf = buf.reverse();
        rightF = false;
      } else {
        rightF = true;
      }

      cur = next;
      next = 0;
      let index = !answer.length ? 0 : answer.length;
      answer[index] = buf;
      levelAr.length = 0;
    }
  }
  return answer;
};

console.log(zigzagLevelOrder([3,9,20,null,null,15,7]));