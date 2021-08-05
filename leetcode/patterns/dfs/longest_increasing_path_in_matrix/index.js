/** LINK: https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 *
 *  EXAMPLES:
 *  Input: [[9,9,4],[6,6,8],[2,1,1]]
 *  Output: 4
 */

var longestIncreasingPath = function (matrix) {
  let cache = [];
  let max = 0;

  let p = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  for (let i = 0; i < matrix.length; ++i) {
    cache[i] = [];
    for (let j = 0; j < matrix[0].length; ++j) {
      cache[i][j] = 0;
    }
  }

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[0].length; ++j) {
      max = Math.max(max, dfs(i, j));
    }
  }

  function dfs(indexI, indexJ) {
    if (cache[indexI][indexJ]) {
      return cache[indexI][indexJ];
    }

    for (let i = 0; i < p.length; ++i) {
      let row = p[i][0] + indexI;
      let cell = p[i][1] + indexJ;

      if (
        row < matrix.length &&
        row >= 0 &&
        cell < matrix[0].length &&
        cell >= 0 &&
        matrix[indexI][indexJ] < matrix[row][cell]
      ) {
        cache[indexI][indexJ] = Math.max(cache[indexI][indexJ], dfs(row, cell));
      }
    }

    return ++cache[indexI][indexJ];
  }

  return max;
};

console.log(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]]))