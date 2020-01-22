/** LINK: https://leetcode.com/problems/word-break
 * 
 *  EXAMPLES:
 *  Input: matrix = [[7,4,1],[8,5,2],[9,6,3]]
 *  Output: [[7,4,1],[8,5,2],[9,6,3]]
 */

function rotateImage(matrix) {
    for(let i=0; i < matrix.length; ++i){
        for(let j=i; j < matrix.length; ++j){
            let swap = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = swap;
        }
    }
      
    for(let i=0; i < matrix.length; ++i){
       for(let j=0; j < matrix.length/2; ++j){
            let swap = matrix[i][matrix.length - 1 - j];
            matrix[i][matrix.length - 1 - j] = matrix[i][j];
            matrix[i][j] = swap;
        }
    }
    return matrix;
}

console.log(rotateImage([[1,2,3],[4,5,6],[7,8,9]]))