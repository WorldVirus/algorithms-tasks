/** LINK: 
 * 
 *  EXAMPLES:
 *  Input: nums = [2,3,1,2,4,3] , s = 7
 *  Output: 2
 */

function minSubArrayLen(s, nums) {
  let first = 0;
  let answer = Number.MAX_VALUE;
  let bufVal = 0;

  for (let i = 0; i < nums.length; ++i) {
    bufVal += nums[i];

    while (bufVal >= s) {
      answer = Math.min(answer, i - first + 1);
      bufVal -= nums[first];
      ++first;
    }
  }

  return answer === Number.MAX_VALUE ? 0 : answer;
}
