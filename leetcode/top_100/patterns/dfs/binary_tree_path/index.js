/** LINK: https://leetcode.com/problems/binary-tree-paths/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,null,5]
 *  Output: ["1->2->5","1->3"]
 */

var binaryTreePaths = function (root) {
    if (!root) { return []; }
    let answer = [];

    function dfs(node, str) {
        if (!node) { return; }
        if (!node.left && !node.right) {
            str += String(node.val);
            answer.push(str);
            return;
        }

        str += String(node.val) + "->"
        dfs(node.left, str);
        dfs(node.right, str);
    }

    dfs(root, "");

    return answer;
};

console.log(binaryTreePaths([1,2,3,null,5]));