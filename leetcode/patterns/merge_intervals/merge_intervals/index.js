/** LINK: https://leetcode.com/problems/merge-intervals/
 *  EXAMPLES:
 *  Input: intervals = [[15,18],[6,10],[1,3],[4,7]]
 *  Output: [[1,3],[4,10],[15,18]]
 */

function mergeIntervals(intervals) {
  let answerArr = [];

  intervals.sort((a, b) => (a[0] - b[0]));

  for (let i = 0; i < intervals.length; ++i) {
    let bufferArr = intervals[i];
    let lastArr = answerArr[answerArr.length - 1];
    if (!answerArr.length || lastArr[1] < bufferArr[0]) {
      answerArr.push(bufferArr);
    } else {
      answerArr[answerArr.length - 1][1] = Math.max(lastArr[1], bufferArr[1]);
    }
  }

  return answerArr;
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
);
