/** LINK: https://leetcode.com/problems/minimum-depth-of-binary-tree/
 * 
 *  EXAMPLES:
 *  Input: [3,9,20,null,null,15,7]
 *  Output: 2
 */

var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  let min = Number.MAX_VALUE;
  function dfs(node, cur) {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      min = Math.min(cur + 1, min);
    } else {
      dfs(node.right, cur + 1);
      dfs(node.left, cur + 1);
    }
  }

  dfs(root, 0);

  return min;
};

console.log(minDepth([3,9,20,null,null,15,7]));