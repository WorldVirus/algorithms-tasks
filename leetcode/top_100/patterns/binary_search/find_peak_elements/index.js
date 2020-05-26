/** LINK: https://leetcode.com/problems/find-peak-element/
 * 
 *  EXAMPLES:
 *  Input: [1,2,3,1]
 *  Output: 2
 */

findPeakElement = function (nums) {
  let first = 0;
  let last = nums.length - 1;
  while (first < last) {
    let mid = first + Math.floor((last - first) / 2);

    if (nums[mid] > nums[mid + 1]) {
      last = mid;
    } else {
      first = mid + 1;
    }
  }

  return last;
};

console.log(findPeakElement([1,2,3,1]));