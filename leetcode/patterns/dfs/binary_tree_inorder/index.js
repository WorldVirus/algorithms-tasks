/** LINK: https://leetcode.com/problems/binary-tree-inorder-traversal/
 * 
 *  EXAMPLES:
 *  Input: [1,null,2,3]
 *  Output: [1,3,2]
 */

function inorderTraversal(root) {
    let stack = [];
    let answer = [];
    while(stack.length || root){
        while(root){
            stack.push(root);
            root = root.left;
        }
        
        root = stack.pop();
        answer.push(root.val);
        root = root.right;
    }
    
    return answer;
};

console.log(inorderTraversal([1,null,2,3]));