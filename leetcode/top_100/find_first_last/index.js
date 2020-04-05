/** LINK: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 *  EXAMPLES:
 *  Input: nums = [5,7,7,8,8,10], target = 8
 *  Output: [3,4]
 */

function searchRange(nums, target) {
    function searcher(leftFlag){
        let start = 0;
        let end = nums.length;
        while(start < end){
            let mid = Math.floor((end + start)/2) ;
            if(nums[mid] > target || (leftFlag && nums[mid] === target)){
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        
        return start;
    }
    
    let left = searcher(true);
    if(left === nums.length || nums[left] !== target){return [-1,-1]};
    let right = searcher(false);
    return [left,  right -1];
};

console.log(searchRange([5,7,7,8,8,10],8))