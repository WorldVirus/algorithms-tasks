/** LINK: https://leetcode.com/problems/diameter-of-binary-tree/
 *
 *  EXAMPLES:
 *  Input: [1,2,3,4,5]
 *  Output: 3
 */
var diameterOfBinaryTree = function (root) {
    let answer = 0;
    function calc(node) {
        if (!node) { return 0; }
        let left = calc(node.left);
        let right = calc(node.right);
        answer = Math.max(answer, left + right);
        return Math.max(left, right) + 1;
    }

    calc(root);
    return answer;
};

console.log(diameterOfBinaryTree([1, 2, 3, 4, 5]))