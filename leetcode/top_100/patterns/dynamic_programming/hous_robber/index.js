/** LINK: https://leetcode.com/problems/house-robber/
 *
 *  EXAMPLES:
 *  Input: [2,7,9,3,1]
 *  Output: 12
 * Description : https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.
 */

function rob(nums) {
    let curMax = 0;
    let prevMax = 0;
    for(let i=0; i< nums.length; ++i){
        let buf = curMax;
        curMax = Math.max(curMax, prevMax + nums[i]);
        prevMax = buf;
    }
    return curMax;
};

console.log(rob([2,7,9,3,1]));