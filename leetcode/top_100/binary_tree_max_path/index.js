/** LINK: https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * 
 *  EXAMPLES:
 *  Input: [-10,9,20,null,null,15,7]
 *  Output: 42
 */

function maxPathSum(root) {
  let max = -90000; // cheat Number.MIN_VALUE doesnot work for submit

  function findMax(node) {
    if (!node) {
      return 0;
    }
    let left = Math.max(findMax(node.left), 0);
    let right = Math.max(findMax(node.right), 0);

    let bufSum = node.val + left + right;

    max = Math.max(max, bufSum);
    console.log(Math.max(max, bufSum));
    return node.val + Math.max(left, right);
  }

  findMax(root);
  return max;
};

console.log(maxPathSum([-10,9,20,null,null,15,7]));