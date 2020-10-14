/** LINK: https://leetcode.com/problems/validate-binary-search-tree/
 * 
 *  EXAMPLES:
 *  Input: [1,1]
 *  Output: false
 */

function isValidBST(root) {
    let stack = [];
    let inorder = -1*Number.MAX_VALUE;
    while(stack.length || root){
        while(root){
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if( root.val <= inorder){return false;}
        inorder = root.val;
        root = root.right;
    }
    
    return true;
};

console.log(isValidBST([1,1]));