/** LINK: https://leetcode.com/problems/search-a-2d-matrix-ii/
 *
 *  EXAMPLES:
 *  Input: [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
  ], 5
 *  Output: true
 */

function searchMatrix(matrix, target) {
  //     if(matrix.length === 0) { return false;}
  //     const m = matrix.length;
  //     const n = matrix[0].length;

  //     function binarySearch(arr){
  //         let first = 0;
  //         let last = arr.length - 1;

  //         while(first <= last){
  //             let mid = first + Math.floor((last - first)/2);
  //             if(arr[mid] === target){ return true;}
  //             if(arr[mid] > target){ last = mid - 1;}
  //             else if(arr[mid] < target) { first = mid + 1;}
  //         }

  //         return false;
  //     };

  //     for(let i=0; i < m; ++i){
  //         if(matrix[i][0] > target) { return false;}
  //         if(matrix[i][n -1] < target) { continue; }
  //         if(binarySearch(matrix[i])) { return true;}
  //     }

  let row = matrix.length - 1;
  let column = 0;
  while (row >= 0 && column < matrix[0].length) {
    if (matrix[row][column] > target) {
      --row;
    } else if (matrix[row][column] < target) {
      ++column;
    } else {
      return true;
    }
  }
  return false;
};

console.log(searchMatrix([[-1,3]],3));