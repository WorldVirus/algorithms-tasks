/** LINK: https://leetcode.com/problems/find-leaves-of-binary-tree/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,4,5]
 *  Output: [[4,5,3],[2],[1]]
 */

var findLeaves = function (root) {
    if (!root) { return []; }
    let arr = [[]];

    while (root.left || root.right) {
        let cop = root;
        dfs(root);
        arr.push([]);
    }

    arr[arr.length - 1].push(root.val);
    function dfs(node) {
        if (!node) { return null; }
        if (!node.left && !node.right) {
            arr[arr.length - 1].push(node.val);
            node = null;
            return node;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);
        node.left = left;
        node.right = right
        return node;
    }

    return arr
};