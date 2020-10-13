/** LINK: https://leetcode.com/problems/set-matrix-zeroes/
 *
 *  EXAMPLES:
 *  Input: [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
 *  Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */
var setZeroes = function(matrix) {
    if (!matrix.length || !matrix[0].length) return;
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            if (!matrix[i][j]) {
                matrix[i][j] = 'x'
                let bufI = i;
                let bufJ = j;
                while (bufI + 1 < matrix.length) {
                    ++bufI
                    if (matrix[bufI][bufJ]) {
                        matrix[bufI][bufJ] = 'x'
                    }
                }
                bufI = i;

                while (bufI - 1 >= 0) {
                    --bufI
                    if (matrix[bufI][bufJ]) {
                        matrix[bufI][bufJ] = 'x'
                    }
                }
                bufI = i;

                while (bufJ + 1 < matrix[0].length) {
                    ++bufJ;
                    if (matrix[bufI][bufJ]) {
                        matrix[bufI][bufJ] = 'x'
                    }
                }
                
                bufJ = j;

                while (bufJ - 1 >= 0) {
                    --bufJ
                    if (matrix[bufI][bufJ]) {
                        matrix[bufI][bufJ] = 'x'
                    }

                }
            }
        }


    }
    
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[0].length; ++j) {
            if (matrix[i][j] === 'x')
                matrix[i][j] = 0;
        }
    }
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));