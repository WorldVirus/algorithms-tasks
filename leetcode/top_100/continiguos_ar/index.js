/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3298/
 * 
 *  EXAMPLES:
 *  Input: [0,1]
 *  Output: 2
 */

function findMaxLength(nums) {
    let checker = {0:-1};
    
      let max = 0; 
      let count = 0;
        for (let i = 0; i < nums.length; ++i) {
            let buf = nums[i] === 1 ? 1 : -1;
            count += buf;
            if (checker[`${count}`] !== undefined) {
                max = Math.max(max, i - checker[`${count}`]);
            } else {
                checker[`${count}`] = i;
            }
        }
        return max;
};

console.log(findMaxLength)