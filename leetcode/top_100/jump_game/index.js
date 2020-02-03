/** LINK: https://leetcode.com/problems/jump-game
 * 
 *  EXAMPLES:
 *  Input: nums=[2,3,1,1,4]
 *  Output: true
 * 
 *  NEEDS OPTIMIZTION !
 */

function jumpGame(nums) {
  function findEl(index) {
    if (index === nums.length - 1) {
      return true;
    }
    let indexBuffer = Math.min(nums[index] + index, nums.length - 1);
    for (let i = indexBuffer; i > index; --i) {
      if (findEl(i)) {
        return true;
      }
    }
    return false;
  }

  return findEl(0);
}

console.log(jumpGame([2,3,1,1,4]));