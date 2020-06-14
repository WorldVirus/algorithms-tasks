/** LINK: https://leetcode.com/problems/path-sum-ii/
 * 
 *  EXAMPLES:
 *  Input: [5,4,8,11,null,13,4,7,2,null,null,5,1], 22
 *  Output: [ [ 5, 4, 11 ], [ 5, 8, 4 ] ]
 */

var pathSum = function (root, sum) {
  if (!root) {
    return [];
  }

  function dfs(node, arr, cur) {
    if (!node) {
      return;
    }

    if (cur === node.val && !node.left && !node.right) {
      let copAr = arr.slice();
      answer.push(copAr.concat([node.val]));
    } else {
      dfs(node.left, arr.concat([node.val]), cur - node.val);
      dfs(node.right, arr.concat(node.val), cur - node.val);
    }
  }

  let answer = [];

  dfs(root, [], sum);

  return answer;
};

console.log(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1], 22))