/** LINK: https://leetcode.com/problems/subsets/
 * 
 *  EXAMPLES:
 *  Input: nums = [1,2,3]
 *  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

function subsets(nums) {
    let answer = [];
    for(let i = Math.pow(2,nums.length); i < Math.pow(2,nums.length + 1); ++i){
        let bitMask = (i >>> 0).toString(2).substring(1);
        let bufAr = [];
        for(let j = 0; j < nums.length; ++j){
            if(bitMask[j] === '1'){bufAr.push(nums[j])}
        }
        answer.push(bufAr)
    }
    
    return answer;
}

console.log(subsets([1,2,3]));