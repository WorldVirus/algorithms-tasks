/** LINK: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,4,5,6,7]
 *  Output: [1,#,2,3,#,4,5,6,7,#]
 */

var connect = function (root) {
  if (!root) {
    return null;
  }
  let cop = root;
  let cur = 1;
  let next = 0;
  let queue = [];

  queue.push(cop);
  while (queue.length) {
    cop = queue.shift();
    if (cur !== 1 && queue[0]) {
      cop.next = queue[0];
    } else {
      cop.next = null;
    }

    if (cop.left) {
      queue.push(cop.left);
      ++next;
    }
    if (cop.right) {
      queue.push(cop.right);
      ++next;
    }
    --cur;
    if (!cur) {
      cur = next;
      next = 0;
    }
  }

  return root;
};

console.log(connect([1,2,3,4,5,6,7]))