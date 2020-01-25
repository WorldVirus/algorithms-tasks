/** LINK: https://leetcode.com/problems/subarray-sum-equals-k
 * 
 *  EXAMPLES:
 *  Input: nums=[1,1,1], k=2
 *  Output: 2
 */

function sumEquals(nums, k) {
    let answer = 0;
    for(let i=0; i < nums.length; ++i){
        let bufferValue = 0;
        for(let j=i; j < nums.length; ++j){
            bufferValue+= nums[j];
            if(bufferValue === k){ ++answer;}
        }
    }
    
    return answer;
}

console.log(sumEquals([1,1,1], 2));