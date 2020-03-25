/** LINK: https://leetcode.com/problems/climbing-stairs/
 *
 *  EXAMPLES:
 *  Input: 2
 *  Output: 2
 */

function climbStairs(n) {
    let arr = [];
    arr[1] = 1;
    arr[2] = 2;
    for(let i=3; i <= n; ++i ){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

console.log(climbStairs(2));