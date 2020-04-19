/** LINK: https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * 
 *  EXAMPLES:
 *  Input: [1,2,5,3,4,null,6]
 *  Output: [1,null,2,null,3,null,4,null,5,null,6]
 */

function flatten (root) {
    while(root){
        if(root.left){
            let node = root.left;
            while(node.right){
                node = node.right;
            }
            
            node.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        
        root = root.right;
    }
};

console.log(flatten([1,2,5,3,4,null,6]));