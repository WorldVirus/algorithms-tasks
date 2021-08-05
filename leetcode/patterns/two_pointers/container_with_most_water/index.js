/** LINK: https://leetcode.com/problems/container-with-most-water/
 * 
 *  EXAMPLES:
 *  Input: [1,8,6,2,5,4,8,3,7]
 *  Output: 49
 */

maxArea = function (height) {
  let first = 0;
  let last = height.length - 1;
  let square = 0;

  while (first < last) {
    let compareFlag = height[first] > height[last];
    let curSquare = compareFlag
      ? height[last] * (last - first)
      : height[first] * (last - first);
    if (curSquare > square) square = curSquare;

    if (compareFlag) --last;
    else ++first;
  }

  return square;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))