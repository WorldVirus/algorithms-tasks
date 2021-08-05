/** LINK: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * 
 *  EXAMPLES:
 *  Input: [3,4,5,1,2] 
 *  Output: 1
 */

findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let right = nums.length - 1;
  let left = 0;
  if (nums[right] > nums[0]) {
    return nums[0];
  }
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left; // nums[mid] = 5

    if (nums[mid] < nums[mid - 1]) {
      return nums[mid]; // 1
    }

    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    if (nums[mid] > nums[left]) {
      left = mid + 1; // nums[right] = 7
    } else {
      right = mid - 1; // 1
    }
  }
};

console.log(findMin([3,4,5,1,2] ));