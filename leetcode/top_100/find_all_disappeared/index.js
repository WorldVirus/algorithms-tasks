/** LINK: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
 * 
 *  EXAMPLES:
 *  Input: nums = [4,3,2,7,8,2,3,1]
 *  Output: [5,6]
 */

function findAllDisappeared(nums) {
    let answerArr = [];
    for(let i = 0; i < nums.length; ++i){
        let index = Math.abs(nums[i]) - 1;
        nums[index] = nums[index] > 0 ? -1*nums[index]: nums[index];
    }
    
    for(let i = 0; i < nums.length; ++i){
       if(nums[i] > 0){
          answerArr.push(i+1) 
       }
    }
    
    return answerArr;
}

console.log(findAllDisappeared());