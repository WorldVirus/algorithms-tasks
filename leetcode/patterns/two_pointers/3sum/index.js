/** LINK: https://leetcode.com/problems/3sum
 * 
 *  EXAMPLES:
 *  Input: nums = [-1,0,1,2,-1,-4]
 *  Output: [[-1,-1,2],[-1,0,1]]
 */

function sum(nums) {
    nums.sort((a,b) => a - b);
    let answerArr = [];

    for(let i = 0; i < nums.length; ++i){
        let end = nums.length - 1;
        let first = i+1;
        let bufferArr = [];
        if (!nums[first] && !nums[end] && !nums[i]){
            continue;
        }
        while(first < end ){
            if(((nums[i] + nums[first] + nums[end]) === 0) && !(nums[i] === nums[end] && nums[end] === nums[first])){
                bufferArr.push(nums[i]);
                bufferArr.push(nums[first])
                bufferArr.push(nums[end])

                answerArr.push(bufferArr);
                ++first;
                --end;
                break;

            } else if((nums[i] + nums[first] + nums[end]) > 0){
                --end;
            } else if((nums[i] + nums[first] + nums[end]) < 0){
                ++first;
            }
        }
    }
        
    return answerArr;
}

console.log(sum([-1,0,1,2,-1,-4]))