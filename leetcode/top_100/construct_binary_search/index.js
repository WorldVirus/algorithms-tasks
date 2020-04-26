/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3305/
 * 
 *  EXAMPLES:
 *  Input: [8,5,1,7,10,12]
 *  Output: [8,5,10,1,7,null,12]
 */

function bstFromPreorder (preorder) {
    let root = new TreeNode(preorder[0]);
    
    for(let i=1; i < preorder.length; ++i){
        let cop = root;
        while(true){
            if(cop.val > preorder[i]){
                if(cop.left){
                    cop = cop.left;
                } else{
                    cop.left = new TreeNode(preorder[i]);
                    break;
                }
            } else {
                if(cop.right){
                    cop = cop.right;
                } else{
                    cop.right = new TreeNode(preorder[i]);
                    break;
                }
            }
        }
    }
    
    return root;
};

console.log(bstFromPreorder([8,5,1,7,10,12]));