/** LINK: https://leetcode.com/problems/shortest-unsorted-continuous-subarray
 * 
 *  EXAMPLES:
 *  Input: nums = [2,6,4,8,10,9,15]
 *  Output: 5
 */

function findUnsortedSubarray(nums) {
    let cop = nums.slice();
    let answer = 0;
    let posAct = -1;
    let endFlag = false;
    cop.sort((a,b)=> a - b);
    
    for(let i = 0; i < nums.length; ++i){
        if(cop[i] !== nums[i]){
            if(posAct !== - 1 && endFlag){
               answer += (i - posAct);
             } else{
                 ++answer;
             }
            posAct = i;
            endFlag = false;
        } else{ endFlag = true; }
    }
    
    return answer;
}

console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));