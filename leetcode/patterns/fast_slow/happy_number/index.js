/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3284/
 *
 *  EXAMPLES:
 *  Input: 19
 *  Output: true
 */
function isHappy(n) {
  function calcBitwiseSum(number) {
    let value = 0;
    while (number >= 1) {
      value += (number % 10) * (number % 10);
      number = Math.floor(number / 10);
    }

    return value;
  }

  let slow = calcBitwiseSum(n);
  let fast = calcBitwiseSum(calcBitwiseSum(n));
  while (slow !== fast) {
    slow = calcBitwiseSum(slow);
    fast = calcBitwiseSum(calcBitwiseSum(fast));
  }

  return fast === 1;
}

console.log(calcBitwiseSum(19));
