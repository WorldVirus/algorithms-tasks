/** LINK: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 *
 *  EXAMPLES:
 *  Input: [6,2,8,0,4,7,9,null,null,3,5], 2, 8
 *  Output: 6
 */

var lowestCommonAncestor = function(root, p, q) {

    if(root.val < p.val && root.val < q.val){
        return  lowestCommonAncestor(root.right, p, q);   
    } else if(root.val > q.val && root.val > p.val){
        return lowestCommonAncestor(root.left, p, q);
    } else{
        return root;
    }
};

console.log(lowestCommonAncestor([6,2,8,0,4,7,9,null,null,3,5], 2, 8))