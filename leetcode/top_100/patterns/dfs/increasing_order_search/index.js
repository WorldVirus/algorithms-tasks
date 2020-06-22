/** LINK: https://leetcode.com/problems/increasing-order-search-tree/
 *
 *  EXAMPLES:
 *  Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]
 *  Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
 */

var increasingBST = function (root) {
    // without array
    // let answer = new TreeNode(0);
	// let cop = answer;
    
    // function dfs(node){
    //     if(!node){return;}
        
    //     dfs(node.left);
    //     node.left = null;
    //     cop.right = node;
    //     cop = node;
    //     dfs(node.right);
    // }
    
    // dfs(root)
    // return answer.right;
    
    let answer = new TreeNode(0);
    let cop = answer;
    let arr = [];
    function dfs(node) {
        if (!node) { return; }

        dfs(node.left);

        arr.push(node.val)
        dfs(node.right);
    }

    dfs(root);

    for (let i = 0; i < arr.length; ++i) {
        cop.right = new TreeNode(arr[i]);
        cop = cop.right;
    }

    return answer.right;


};

console.log(increasingBST([5,3,6,2,4,null,8,1,null,null,null,7,9]));