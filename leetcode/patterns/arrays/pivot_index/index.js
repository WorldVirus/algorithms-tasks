/** LINK: https://leetcode.com/problems/find-pivot-index/
 * 
 *  EXAMPLES:
 *  Input: nums = [1,7,3,6,5,6]
 *  Output: 3
 */

var pivotIndex = function(nums) {
    if(nums.length < 3){return -1;}
	let prev = 0;
	let cur = 0;

	for(let i=0; i < nums.length; ++i){
		cur += nums[i];
    }

	for(let i = 0; i < nums.length; ++i){
		  if(prev === cur - prev - nums[i]){
              return i;
          }
        
          prev += nums[i];
    }

	return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));