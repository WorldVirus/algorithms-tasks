/** LINK: https://leetcode.com/problems/permutations
 * 
 *  EXAMPLES:
 *  Input: nums = [1,2,3]
 *  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]
 */

function permutations (nums) {
    let answer = [];
    answer.push()
    function swapper(indexA, indexB){
        let tmp = nums[indexA];
        nums[indexA] = nums[indexB];
        nums[indexB] = tmp;
    }
    
    function permutation(start, end){
        
        if( start === end){
            let bufferArr = nums.slice();
            answer.push(bufferArr);
        }else{
            for(let i = start; i <= end; ++i){
            swapper(i, start);
            permutation(start+1,end);
            swapper(start, i);
          }
       }
    }
    
    permutation(0, nums.length - 1);
    return answer;
}

console.log(permutations([1,2,3]));