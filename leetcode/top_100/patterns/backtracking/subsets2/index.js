/** LINK: https://leetcode.com/problems/subsets-ii/
 *
 *  EXAMPLES:
 *  Input: [1,2,2]
 *  Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
 */
var subsetsWithDup = function (nums) {
    function helper(res = [], arr = [], index = 0) {
        //let cop = arr.slice(0);
        res.push(arr.slice(0));
        for (let i = index; i < nums.length; ++i) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }

            arr.push(nums[i]);

            helper(res, arr, i + 1);
            arr.pop();
        }

        return res
    }
    nums = nums.sort((a, b) => a - b);
    return helper();
};

console.log(subsetsWithDup([1,2,2]));