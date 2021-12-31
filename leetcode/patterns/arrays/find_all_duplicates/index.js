/** LINK: https://leetcode.com/problems/find-all-duplicates-in-an-array/
 *
 *  EXAMPLES:
 *  Input: [[2,1,1],[2,3,1],[3,4,1]],4,2
 *  Output: 2
 */
var findDuplicates = function (nums) {
    let answer = [];

    for (let i = 0; i < nums.length; ++i) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            answer.push(Math.abs(nums[i]));
        }
        nums[Math.abs(nums[i]) - 1] *= -1;
    }

    return answer;
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]));