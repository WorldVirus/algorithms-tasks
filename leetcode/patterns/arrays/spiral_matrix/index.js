/** LINK: https://leetcode.com/problems/spiral-matrix/
 *
 *  EXAMPLES:
 *  Input: [[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12]]
 *  Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */
var spiralOrder = function (matrix) {
    if (!matrix.length || !matrix[0].length) { return []; }
    let answer = [matrix[0][0]]; // [1]
    matrix[0][0] = 'X';
    let flag = true;
    let i = 0;
    let j = 0;

    while (flag) {
        flag = false
        // up move
        while (i - 1 >= 0 && matrix[i - 1][j] != 'X') {
            --i
            answer.push(matrix[i][j]) //[1,2,3,6,9,8,7,4]
            matrix[i][j] = 'X'
            flag = true
        }
        // right move
        while (j + 1 < matrix[0].length && matrix[i][j + 1] != 'X') {
            ++j
            answer.push(matrix[i][j]) //[1,2,3,6,9,8,7,4,5]
            matrix[i][j] = 'X'
            flag = true
        }
        // left 
        while (j - 1 >= 0 && matrix[i][j - 1] != 'X') {
            --j
            answer.push(matrix[i][j]) //[1,2,3,6,9,8,7]
            matrix[i][j] = 'X'
            flag = true
        }
        // down
        while (i + 1 < matrix.length && matrix[i + 1][j] != 'X') {
            ++i
            answer.push(matrix[i][j]) // [1,2,3,6,9]
            matrix[i][j] = 'X'
            flag = true
        }
    }

    return answer;
};

console.log(spiralOrder([[1, 2, 3, 4],[5, 6, 7, 8],[9,10,11,12]]));