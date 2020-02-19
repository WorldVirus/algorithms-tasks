/** LINK: https://leetcode.com/problems/coin-change
 *
 *  EXAMPLES:
 *  Input: coins = [1,2,5], amount = 11
 *  Output: 3
 */

function coinChange(coins, amount) {
  let fillArr = [];
  for (let i = 0; i < amount + 1; ++i) {
    fillArr[i] = amount + 1;
  }
  fillArr[0] = 0;
  for (let i = 1; i <= amount; ++i) {
    for (let j = 0; j < coins.length; ++j) {
      if (coins[j] <= i) {
        fillArr[i] = Math.min(fillArr[i], fillArr[i - coins[j]] + 1);
      }
    }
  }

  return fillArr[amount] === amount + 1 ? -1 : fillArr[amount];
}

console.log(coinChange([1, 2, 5], 11));