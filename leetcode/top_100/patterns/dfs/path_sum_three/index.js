/** LINK: https://leetcode.com/problems/path-sum-iii/
 * 
 *  EXAMPLES:
 *  Input: [1,-2,-3,1,3,-2,null,-1],-1
 *  Output: 4
 */

var pathSum = function (root, sum) {
  if (!root) {
    return 0;
  }
  return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);

  function dfs(node, sum) {
    let res = 0;
    if (!node) {
      return 0;
    }

    if (sum === node.val) {
      ++res;
    }

    return (
      res + dfs(node.left, sum - node.val) + dfs(node.right, sum - node.val)
    );
  }

    // without recursion
    // let cnt = 0;
    // let map = new Map();
    // map.set(0, 1);
    // dfs(root, 0);
    
    
    // function dfs( node, curSum ){
    //     if( node === null ) return;
        
    //     let counterpart = curSum + node.val - sum;
    //     if( map.has(counterpart) ) cnt += map.get(counterpart);
        
    //     if( !map.has(curSum+node.val) ) map.set(curSum+node.val, 0);
    //     map.set(curSum+node.val, map.get(curSum+node.val)+1);
        
    //     dfs( node.left, curSum+node.val );
    //     dfs( node.right, curSum+node.val );
        
    //     map.set(curSum+node.val, map.get(curSum+node.val)-1);
    // }
    // return cnt;

};

console.log(pathSum([1,-2,-3,1,3,-2,null,-1],-1));