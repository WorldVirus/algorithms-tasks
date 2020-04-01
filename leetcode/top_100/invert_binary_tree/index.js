/** LINK: https://leetcode.com/problems/invert-binary-tree/
 *
 *  EXAMPLES:
 *  Input: [1,2]
 *  Output: [1,null,2]
 */
function invertTree (root) {
    function inverter(root){
       if(!root){return null;}
       if(root.left && root.right){
           let buf = root.left;
           root.left = root.right;
           root.right = buf;
           inverter(root.left);
           inverter(root.right);
       } else if(!root.left){
          root.left = null
           let buf = root.left;
           root.left = root.right;
           root.right = buf;
           inverter(root.left); 
       } else if(!root.right){
            root.right = null
           let buf = root.left;
           root.left = root.right;
           root.right = buf;          
           inverter(root.right);
       }
    }
    
    inverter(root);
    
    return root;
};

console.log(invertTree([1,2]));