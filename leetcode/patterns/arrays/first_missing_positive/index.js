/** LINK: https://leetcode.com/problems/first-missing-positive/
 *
 *  EXAMPLES:
 *  Input: [1,2,0]
 *  Output: 3
 */
function firstMissingPositive (nums) {
    let beginFlagNotFound = true;
    for(let i = 0; i < nums.length; ++i){
        if(nums[i] === 1) {beginFlagNotFound = false};
    }
        
    if(beginFlagNotFound){return 1;}
    if(nums.length === 1){return 2;}
    
    for(let i = 0; i < nums.length; ++i){
        if(nums[i]  > nums.length || nums[i] <= 0) {nums[i] = 1;};
    }
    
    for(let i = 0; i < nums.length; ++i){
        let bufValue = Math.abs(nums[i]);
        if(bufValue === nums.length){
           nums[0] = -Math.abs(nums[0]);
        } else{
            nums[bufValue] = -Math.abs(nums[bufValue])
        }
    }

    for(let i = 1; i < nums.length; ++i){
        if(nums[i] > 0){return i;}
    }
    
    if(nums[0] > 0){ return nums.length;}
    
    return nums.length + 1;
};

console.log(firstMissingPositive([1,2,0]))