/** LINK: https://leetcode.com/problems/subarray-product-less-than-k/
 * 
 *  EXAMPLES:
 *  Input: [10,5,2,6], 100
 *  Output: 8
 */

numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  let answer = 0;
  let left = 0;
  let product = 1;

  for (let right = 0; right < nums.length; ++right) {
    product *= nums[right];
    while (product >= k) {
      product = product / nums[left++];
    }
    answer += right - left + 1;
  }

  return answer;
};

console.log(numSubarrayProductLessThanK([10,5,2,6], 100));