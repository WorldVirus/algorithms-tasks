/** LINK: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * 
 *  EXAMPLES:
 *  Input: [5,3,6,2,4,null,null,1],3
 *  Output: 3
 */

function kthSmallest (root, k) {
  // inorder dfs
  function microDfs(node, arr) {
    if (!node) {
      return arr;
    }

    microDfs(node.left, arr);
    arr.push(node.val);
    microDfs(node.right, arr);
  }

  let answer = [];
  microDfs(root, answer);

  return answer[k - 1];

  // bfs
  //     if(!root){return 0;}

  //     let stack = [];

  //     while(true){
  //         while(root){
  //             stack.push(root);
  //             root = root.left;
  //         }

  //         root = stack.pop();
  //         if(--k === 0){return root.val}
  //         root = root.right;
  //     }
};

console.log(kthSmallest([5,3,6,2,4,null,null,1],3))