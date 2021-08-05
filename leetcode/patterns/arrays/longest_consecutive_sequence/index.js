/** LINK: https://leetcode.com/problems/longest-consecutive-sequence/
 *
 *  EXAMPLES:
 *  Input: [100,4,200,1,3,2]
 *  Output: 4
 */
var longestConsecutive = function (nums) {
    let answer = 0;
    let h = {};

    for (let i = 0; i < nums.length; ++i) {
        h[`${nums[i]}`] = 1;
    }

    for (let i = 0; i < nums.length; ++i) {
        if (!h[`${nums[i] - 1}`]) {
            let cur = 1;
            let curNum = nums[i];

            while (h[`${curNum + 1}`]) {
                ++curNum;
                ++cur;
            }

            answer = Math.max(answer, cur);
        }
    }

    return answer;
};

console.log(longestConsecutive([100,4,200,1,3,2]));