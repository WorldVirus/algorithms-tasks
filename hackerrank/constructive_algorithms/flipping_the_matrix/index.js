/** LINK: https://www.hackerrank.com/challenges/flipping-the-matrix/problem
 *  
 *  DESCRIPTION: Complete the flippingMatrix function in the editor below. It should return an integer that represents the maximum sum possible for the top NxN matrix.
    flippingMatrix has the following parameters: 
    matrix: a 2Nx2N  array of integers
 * 
 *  EXAMPLES:
 *  Sample Input
    112 42 83 119
    56 125 56 49
    15 78 101 43
    62 98 114 108

    Sample Output
    414
 */

function flippingMatrix(matrix) {
    let sum = 0;
    let sizeHalf = matrix.length/2;
    for (let i = 0; i < sizeHalf; ++i) {
        for (let j = 0; j < sizeHalf; ++j) {
            sum += Math.max(matrix[i][j], matrix[2 * sizeHalf - 1 - i][j], matrix[i][2 * sizeHalf - 1 - j], matrix[2 * sizeHalf - 1 - i][2 * sizeHalf - 1 - j])
         }
    }

    return sum;
}
