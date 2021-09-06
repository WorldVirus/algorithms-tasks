/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3312/
 *
 *  EXAMPLES:
 *  Input: [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 *  Output: 4
 */

function maximalSquare(matrix) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0;
  let dp = [];
  for (let i = 0; i < cols + 1; ++i) {
    dp[i] = 0;
  }
  let maxsqlen = 0,
    prev = 0;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      let temp = dp[j];
      if (matrix[i - 1][j - 1] == "1") {
        dp[j] = Math.min(Math.min(dp[j - 1], prev), dp[j]) + 1;
        maxsqlen = Math.max(maxsqlen, dp[j]);
      } else {
        dp[j] = 0;
      }
      prev = temp;
    }
  }
  return maxsqlen * maxsqlen;
}

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ])
);
