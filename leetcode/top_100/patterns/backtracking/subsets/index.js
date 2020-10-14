/** LINK: https://leetcode.com/problems/subsets/
 *
 *  EXAMPLES:
 *  Input: nums = [1,2,3]
 *  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

function subsets(nums) {
  let answer = [];
  for (
    let i = Math.pow(2, nums.length);
    i < Math.pow(2, nums.length + 1);
    ++i
  ) {
    //2^N because the number of subsets equal 2^N
    let bitMask = (i >>> 0).toString(2).substring(1); // convert int to binary
    console.log(bitMask);
    let bufAr = [];
    for (let j = 0; j < nums.length; ++j) {
      if (bitMask[j] === "1") {
        bufAr.push(nums[j]);
      }
    }
    answer.push(bufAr);
  }

  return answer;

// backtracking
//   let answer = [];
//   let indexG = 0;
//   function searcher(ar, index) {
//     if (ar.length === indexG) {
//       answer.push(ar);
//     }
//
//     for (let i = index; i < nums.length; ++i) {
//       ar.push(nums[i]);
//       searcher(ar, index + 1);
//       ar.pop();
//     }
//   }
//   for (indexG = 0; indexG < nums.length + 1; ++indexG) {
//     searcher([], 0);
//   }
//   return answer;
}

console.log(subsets([1, 2, 3]));
