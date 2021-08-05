/** LINK: https://leetcode.com/problems/fruit-into-baskets/
 * 
 *  EXAMPLES:
 *  Input: [1,2,3,2,2]
 *  Output: 4
 */

totalFruit = function (tree) {
  let first = 0;
  let checker = {};
  let max = Number.MIN_VALUE;

  for (let last = 0; last < tree.length; ++last) {
    if (!checker[`${tree[last]}`]) {
      checker[`${tree[last]}`] = 0;
    }
    ++checker[`${tree[last]}`];

    while (Object.keys(checker).length > 2) {
      if (--checker[`${tree[first]}`] === 0) {
        delete checker[`${tree[first]}`];
      }
      ++first; 
    }

    max = Math.max(max, last - first + 1); 
  }

  return max;
};

console.log(totalFruit([1,2,3,2,2]));