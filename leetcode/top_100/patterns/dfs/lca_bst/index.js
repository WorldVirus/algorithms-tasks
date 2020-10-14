/** LINK: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
 *
 *  EXAMPLES:
 *  Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 *  Output: 3
 */
var lowestCommonAncestor = function(root, p, q) {
    let queue = [];
    queue.push(root);
    let stack = [];
    let answer = 0;
    let found = 0;
    function microDfs(node, value){
        if(!node){return;}
        if(node.val === value){ answer = node; return ;}
        microDfs(node.left, value);
        microDfs(node.right, value);

    }
    
    while(queue){
        let root = queue.shift();
        stack.push(root);
        if(root){
            if(root.left && root.left.val === p ||  root.right && root.right.val === p){
                found = q;
                break;
            }
            if(root.right && root.right.val === q || root.left && root.left.val === q){
                found = p;
                break;
            }
            if(root.left){
                queue.push(root.left);
            }

            if(root.right){
                queue.push(root.right);
            }
        }
    }
    
    microDfs(stack[stack.length -1],found)
    if(answer){return stack[stack.length -1];}
    console.log(stack)
    let val = root.val;
    while(!answer){
        for(let i=0; i < stack.length; ++i){
            if(stack[i].left && stack[i].left.val === val){
              val = stack[i].left.val;
              microDfs(stack[i].left,found); 
              break;
            }
            if(stack[i].right && stack[i].right.val === val){
               val = stack[i].right.val
               microDfs(stack[i].right,found); 
               break;
            }
        }
    }
    
    return answer;
};