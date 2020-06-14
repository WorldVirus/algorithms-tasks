/** LINK: https://leetcode.com/problems/merge-two-binary-trees/
 * 
 *  EXAMPLES:
 *  Input: [1,3,2,5], [2,1,3,null,4,null,7]
 *  Output: [3,4,5,5,4,null,7]
 */

var mergeTrees = function (t1, t2) {
  function merger(rootF, rootS) {
    if (!rootF) {
      return rootS;
    }

    if (!rootS) {
      return rootF;
    }

    rootF.val += rootS.val;
    rootF.left = merger(rootF.left, rootS.left);
    rootF.right = merger(rootF.right, rootS.right);
    return rootF;
  }

  return merger(t1, t2);
};

console.log(mergeTrees([1,3,2,5], [2,1,3,null,4,null,7]));