/** LINK: https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/
 * 
 *  EXAMPLES:
 *  Input: [1,null,3,2,4,null,null,null,5]
 *  Output: 3
 */
var longestConsecutive = function (root) {
    if (!root) { return 0; }
    let max = 0;
    let flagRoot = true;

    function dfs(prev, node, cur) {
        if (!node) {
            max = Math.max(max, cur - 1);
            return;
        }

        if (node.val - prev !== 1 && !flagRoot) {
            max = Math.max(max, cur - 1);
            cur = 1;
        }

        flagRoot = false;
        dfs(node.val, node.left, cur + 1);
        dfs(node.val, node.right, cur + 1);
    }

    dfs(root.val, root, 1);

    return max;

};