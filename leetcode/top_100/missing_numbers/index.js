/** LINK: https://leetcode.com/problems/missing-number/
 * 
 *  EXAMPLES:
 *  Input: [9,6,4,2,3,5,7,0,1]
 *  Output: 8
 */

function missingNumber(nums) {
  let answer = nums.length;
  for (let i = 0; i < nums.length; ++i) {
    answer ^= i ^ nums[i];
  }
  return answer;
}
