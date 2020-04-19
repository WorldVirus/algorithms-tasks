/** LINK: https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 *  EXAMPLES:
 *  Input:[4,5,6,7,0,1,2], 0
 *  Output: 4
 */

function search(nums, target) {
    let first = 0;
    let last = nums.length -1;
    while(first <= last){
        let mid = first + Math.floor((last - first)/2);
        if(nums[mid] === target){return mid;}
        else if(nums[mid] >= nums[first]){
            if(nums[first] <= target && nums[mid] > target){
                last = mid - 1;
            } else{
                first = mid + 1;
            }
        } else {
            if(nums[last] >= target && target > nums[mid]){
                first = mid + 1;
            } else{
                last = mid - 1;
            }
        }
    }
    
    return -1;
};

console.log(search([4,5,6,7,0,1,2],0))