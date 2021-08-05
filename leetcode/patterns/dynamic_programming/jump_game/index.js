/** LINK: https://leetcode.com/problems/jump-game
 * 
 *  EXAMPLES:
 *  Input: nums=[2,3,1,1,4]
 *  Output: true
 */

function jumpGame(nums) {
  // BACKTRACKING
  // function findEl(index) {
  //   if (index === nums.length - 1) {
  //     return true;
  //   }
  //   let indexBuffer = Math.min(nums[index] + index, nums.length - 1);
  //   for (let i = indexBuffer; i > index; --i) {
  //     if (findEl(i)) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // return findEl(0);

  // GREEDY
    let last = nums.length - 1;
    for(let i=nums.length - 1; i >= 0; --i){
        if(nums[i] + i >= last){
            last = i;
        }
    }
    
    return last === 0;
}

console.log(jumpGame([2,3,1,1,4]));