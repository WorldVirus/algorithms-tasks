/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3286/
 *
 *  EXAMPLES:
 *  Input: [0,1,0,3,12]
 *  Output: [1,3,12,0,0]
 */
function moveZeroes (nums) {
    for(let i=nums.length - 1; i >= 0; --i){
        if(!nums[i]){
            let index = i;
            while( index !== nums.length - 1 && !nums[index]){
                let swap = nums[index];
                nums[index] = nums[index + 1];
                nums[index + 1] = swap;
                ++index;
            }
        }
    }
};

console.log(moveZeroes([1,3,12,0,0]));