/** NOT SUBMITTED 
 * LINK: https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/
 * 
 *  EXAMPLES:
 *  Input: A = [0,1,0], K = 1
 *  Output: 2
 */

function minKBitFlips(A, K) {
  let first = 0;
  let last = K - 1;
  let answer = 0;
  while (first <= last) {
    if (!A[first]) {
      if (last - first + 1 < K) {
        return -1;
      }
      let bufI = first;
      while (bufI <= last) {
        A[bufI] ^= 1;
        ++bufI;
      }

      ++answer; 
    }

    ++first; 
    if (last !== A.length - 1) {
      ++last; 
    }
  }

  return answer;
}

console.log(minKBitFlips([0,1,0],1))