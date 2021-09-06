/** LINK: https://leetcode.com/problems/majority-element
 * 
 *  EXAMPLES:
 *  Input: nums = [3,2,3]
 *  Output: 3
 */

function majorityElement(nums) {
    let checkerObj = {};
    let max = 0;
    let answer = 0;
    for(let i=0; i < nums.length; ++i){
        if(checkerObj[`${nums[i]}`]){
            ++checkerObj[`${nums[i]}`];
        } else{
            checkerObj[`${nums[i]}`] = 1;
        }
        
        if(max < checkerObj[`${nums[i]}`]){
           max = checkerObj[`${nums[i]}`];
           answer = nums[i];
         }
    }
    
    return answer;
    
    /**
     * Boyer-Moore Voting Algorithm if answer strictly >n/2
     */
    // function majorityElement(nums) {
    //     let count = 0;
    //     let answer = 0;
    //     for(let i=0; i < nums.length; ++i){
    //         if(!count){
    //            answer = nums[i]; 
    //         }
            
    //         count += (answer === nums[i] ? +1: -1)
    //     }
        
    //     return answer;
    // };
}

console.log(majorityElement([3,2,3]));