/** LINK: https://leetcode.com/problems/find-k-pairs-with-smallest-sums/
 *
 *  EXAMPLES:
 *  Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 *  Output: [[1,2],[1,4],[1,6]]
 */

function kSmallestPairs(nums1, nums2, k) {
  let checker = {};
  let answer = [];

  for (let i = 0; i < nums1.length; ++i) {
    for (let j = 0; j < nums2.length; ++j) {
      let buf = nums1[i] + nums2[j]; //3
      if (!checker[`${buf}`]) {
        checker[`${buf}`] = [];
      }
      checker[`${buf}`].push([nums1[i], nums2[j]]);
    }
  }

  let keysAr = Object.keys(checker).sort((a, b) => a - b);

  for (let index = 0; index < keysAr.length; ++index) {
    if (answer.length >= k) {
      break;
    }

    answer = answer.concat(checker[keysAr[index]]);
  }

  if (answer.length > k) {
    while (answer.length !== k) {
      answer.pop();
    }
  }
  return answer;
}

console.log(kSmallestPairs([1,7,11],[2,4,6],3));