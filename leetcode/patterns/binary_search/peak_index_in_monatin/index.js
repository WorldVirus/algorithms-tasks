/** LINK: https://leetcode.com/problems/peak-index-in-a-mountain-array/
 * 
 *  EXAMPLES:
 *  Input: [0,2,1,0]
 *  Output: 1
 */

peakIndexInMountainArray = function (A) {
  let first = 0;
  let last = A.length - 1; // 5
  while (first <= last) {
    let mid = first + Math.floor((last - first) / 2); // 2

    if (A[mid - 1] < A[mid] && A[mid] > A[mid + 1]) {
      return mid;
    } else if (A[mid] < A[mid + 1]) {
      first = mid + 1; // 3
    } else {
      last = mid - 1;
    }
  }
};

console.log(peakIndexInMountainArray([0,2,1,0]));