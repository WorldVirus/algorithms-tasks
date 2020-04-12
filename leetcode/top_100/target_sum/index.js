/** LINK: https://leetcode.com/problems/target-sum/
 *
 *  EXAMPLES:
 *  Input: nums = [1,1,1,1,1] S = 3
 *  Output: 5
 */

function countElements (arr, S) {
    
    // brute-force
    // let answer = 0; 
    // function calcVars(index,curVal){
    //     if(index === nums.length && curVal === S){
    //         ++answer;
    //         return ;
    //     }
        
    //     if(index === nums.length){
    //         return;
    //     }
        
    //     calcVars(index +1, curVal-nums[index]);
    //     calcVars(index +1, curVal + nums[index]);
    // }
    
    // calcVars( 0, 0);

    // return answer;
};

console.log(countElements([1,1,1,1,1],3));