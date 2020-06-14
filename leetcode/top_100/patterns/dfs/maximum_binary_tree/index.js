/** LINK: https://leetcode.com/problems/maximum-binary-tree/
 * 
 *  EXAMPLES:
 *  Input: [3,9,20,null,null,15,7]
 *  Output: 3
 */

var constructMaximumBinaryTree = function (nums) {
  function maxSearcher(iL, jR) {
    let maxPos = 0;
    let max = Number.MIN_VALUE;

    for (let i = iL; i < jR; ++i) {
      if (max < nums[i]) {
        maxPos = i;
        max = nums[i];
      }
    }

    return maxPos;
  }

  function creator(indexL, indexR) {
    if (indexL === indexR) {
      return null;
    }
    let max = maxSearcher(indexL, indexR);
    let newObj = new TreeNode(nums[max]);
    newObj.left = creator(indexL, max);
    newObj.right = creator(max + 1, indexR);

    return newObj;
  }

  return creator(0, nums.length);
};
