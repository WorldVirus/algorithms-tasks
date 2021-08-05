/** LINK: https://leetcode.com/problems/subtree-of-another-tree/
 * 
 *  EXAMPLES:
 *  Input: [1,2,3],[2,3]
 *  Output: false
 */

var isSubtree = function (s, t) {
  function dfs(node, nodeT) {
    if (!node) {
      return false;
    }
    return calc(node, nodeT) || dfs(node.left, nodeT) || dfs(node.right, nodeT);
  }

  function calc(rootF, rootS) {
    if (!rootF && !rootS) {
      return true;
    }

    if (!rootF || !rootS) {
      return false;
    }

    return (
      rootF.val === rootS.val &&
      calc(rootF.left, rootS.left) &&
      calc(rootF.right, rootS.right)
    );
  }

  return dfs(s, t);
};

console.log(isSubtree([1,2,3],[2,3]));