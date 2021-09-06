/** LINK: https://leetcode.com/problems/perfect-squares/
 * 
 *  EXAMPLES:
 *  Input: [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ], 3
 *  Output: true
 */

function searchMatrix(matrix, target) {
  if (!matrix.length || !matrix[0].length) {
    return false;
  }
  let columnSize = matrix[0].length;
  let rowSize = matrix.length;
  let first = 0;
  let last = columnSize * rowSize - 1;

  while (first <= last) {
    let mid = Math.floor((last - first) / 2) + first;
    let midRow = Math.floor(mid / columnSize);
    let midColumn = mid % columnSize;
    if (matrix[midRow][midColumn] === target) {
      return true;
    } else if (matrix[midRow][midColumn] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }

  return false;
}

console.log(searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ],3))