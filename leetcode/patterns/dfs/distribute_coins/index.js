/** LINK: https://leetcode.com/problems/distribute-coins-in-binary-tree/
 *
 *  EXAMPLES:
 *  Input: [4,0,null,null,0,null,0]
 *  Output: 6
 */

var distributeCoins = function (root) {
    let answer = 0;
    function dfs(node) {
        if (!node) { return 0; }

        let left = dfs(node.left);
        let right = dfs(node.right);
        answer += Math.abs(left) + Math.abs(right);
        return node.val + left + right - 1;
    }

    dfs(root);

    return answer;
};

console.log(distributeCoins([4,0,null,null,0,null,0]));