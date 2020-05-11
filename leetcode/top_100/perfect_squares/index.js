/** LINK: https://leetcode.com/problems/perfect-squares/
 * 
 *  EXAMPLES:
 *  Input: 13
 *  Output: 2
 */

function numSquares(n) {
  if (n <= 0) {
    return 0;
  }

  let sqAr = [];
  let index = 1;
  while (index * index <= n) {
    sqAr.push(index * index);
    ++index;
  }

  let checker = { 0: 0 };

  for (let i = 1; i <= n; ++i) {
    let min = Number.MAX_VALUE;
    let j = 0;
    while (sqAr[j] <= i) {
      let bufMin = checker[`${i - sqAr[j]}`] + 1;
      min = Math.min(min, bufMin); // 1
      ++j; //1
    }

    checker[`${i}`] = min;
  }

  return checker[`${n}`];
};

console.log(numSquares(13));