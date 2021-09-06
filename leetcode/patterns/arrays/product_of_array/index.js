/** LINK: https://leetcode.com/problems/product-of-array-except-self
 * 
 *  EXAMPLES:
 *  Input: nums = [1,2,3,4]
 *  Output: [24,12,8,6]
 */

function productOfArray(nums) {
  // First Approach
  if (!nums.length) {
    return [];
  }
  let leftArr = [1];
  let rightCoefficient = 1;

  for (let i = 1; i < nums.length; ++i) {
    leftArr[i] = leftArr[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; --i) {
    leftArr[i] = leftArr[i] * rightCoefficient;
    rightCoefficient *= nums[i];
  }

  return leftArr;

  // Second Approach

  //     if(!nums.length){ return [];}
  //     let leftArr = [1];
  //     let rightArr = [];

  //     for(let i = 1; i < nums.length; ++i){
  //        leftArr[i] = leftArr[i - 1] * nums[i - 1];
  //     }

  //     rightArr[nums.length - 1] = 1;
  //     for(let i = nums.length - 2; i >= 0; --i){
  //        rightArr[i] = rightArr[i + 1] * nums[i + 1];
  //     }

  //     for(let i = 0; i < nums.length; ++i){
  //         nums[i] = leftArr[i] *rightArr[i];
  //     }

  //     return nums;
}

console.log(productOfArray([1, 2, 3, 4]));