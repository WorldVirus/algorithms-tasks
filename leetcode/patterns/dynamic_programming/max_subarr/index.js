/** LINK: https://leetcode.com/problems/maximum-subarray
 * 
 *  EXAMPLES:
 *  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 *  Output: 6
 */

function maxSubarr(nums) {
    let max = nums[0];
    let bufferSum = nums[0];
    for(let i=1; i < nums.length; ++i){
        bufferSum = Math.max(nums[i], bufferSum + nums[i]);
        max = Math.max(max, bufferSum);
    }
        
    return max;
}

console.log(maxSubarr([-2,1,-3,4,-1,2,1,-5,4]));