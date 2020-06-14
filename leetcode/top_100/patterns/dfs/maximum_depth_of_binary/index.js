/** LINK: https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * 
 *  EXAMPLES:
 *  Input: [3,9,20,null,null,15,7]
 *  Output: 3
 */

var maxDepth = function (root) {

    // simplest
    // if(!root){
	// 	return 0;
    // }
    
    // return Math.max(1 + maxDepth(root.left), 1+ maxDepth(root.right));
  if (!root) {
    return 0;
  }

  let max = 0;

  function dfs(node, depth) {
    if (!node) {
      return;
    }

    dfs(node.left, depth + 1);
    max = Math.max(max, depth);
    dfs(node.right, depth + 1);
  }

  dfs(root, 1);
  return max;
};

console.log(maxDepth([3,9,20,null,null,15,7]));