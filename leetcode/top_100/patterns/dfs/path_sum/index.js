/** LINK: https://leetcode.com/problems/path-sum/
 * 
 *  EXAMPLES:
 *  Input: [], 0
 *  Output: false
 */

var hasPathSum = function (root, sum) {
  if (root && !root.left && !root.right) {
    if (!(sum - root.val)) {
      return true;
    } else {
      return false;
    }
  } else if (!root) {
    return false;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};

console.log(hasPathSum([],0))