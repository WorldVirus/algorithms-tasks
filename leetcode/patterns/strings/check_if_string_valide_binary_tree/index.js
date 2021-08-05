/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/532/week-5/3315/
 * 
 *  EXAMPLES:
 *  Input: [0,1,0,0,1,0,null,null,1,0,0]
 *  Output: [0,1,0,1]
 */

function isValidSequence (root, arr) {
    if(!root || !arr.length){return false;}

    
    function correctDetector(node,index){
        if(!node || index === arr.length){return false;}
        if(!node.left && !node.right && node.val === arr[index] && index === arr.length -1){return true;}
        return node.val === arr[index] && (correctDetector(node.left, index + 1)
        ||correctDetector(node.right, index + 1));
    }
    
   return correctDetector(root, 0);    
};

console.log(isValidSequence([0,1,0,0,1,0,null,null,1,0,0],[0,1,0,1]));