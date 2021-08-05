/** LINK: https://leetcode.com/problems/binary-tree-level-order-traversal/
 * 
 *  EXAMPLES:
 *  Input: [3,9,20,null,null,15,7]
 *  Output: [[3],[9,20],[15,7]]
 */

function levelOrder (root) {
    if(!root){return [];}
    
    let level = [1,0];
    let queue = [];
    let answer = [[]];
    
    queue.push(root);
    while(queue.length){
        root = queue.shift();
        if(root.left){
            queue.push(root.left);
            ++level[1];
        }
        
        if(root.right){
            queue.push(root.right);
            ++level[1]; 
        }
        
        --level[0];
        answer[answer.length - 1].push(root.val);
        if(!level[0] && queue.length){
            answer.push([]);
            level[0] = level[1];
            level[1] = 0;
        }
    }
    
    return answer;
};

console.log(levelOrder([3,9,20,null,null,15,7]))