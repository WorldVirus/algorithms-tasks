/** LINK: https://leetcode.com/problems/same-tree/
 * 
 *  EXAMPLES:
 *  Input: [1,2,1], [1,1,2]
 *  Output: false
 */

var isSameTree = function (p, q) {
    // easiest way
    // if(!p && !q){return true;}
    // if(!p || !q){return false;}
    // if(p.val !== q.val){return false;}
    // return isSameTree(p.left, q.left) && isSameTree(p.right,q.right);
  let arrF = [];
  let arrS = [];
  function dfs(node, index, flag) {
    if (!node) {
      return;
    }

    dfs(node.left, index * 2 + 1, flag);
    if (flag) {
      arrF[index] = node.val;
    } else {
      arrS[index] = node.val;
    }
    dfs(node.right, index * 2 + 2, flag);
  }

  dfs(p, 0, true);
  dfs(q, 0, false);

  if (arrS.length !== arrF.length) {
    return false;
  }

  for (let i = 0; i < arrF.length; ++i) {
    if (arrF[i] !== arrS[i]) {
      return false;
    }
  }

  return true;
};

console.log(isSameTree([1,2,1], [1,1,2]));