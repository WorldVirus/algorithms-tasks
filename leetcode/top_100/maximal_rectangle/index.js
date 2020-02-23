/** LINK: https://leetcode.com/problems/maximal-rectangle
 *
 *  EXAMPLES:
 *  Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 *  Output: 6
 */

function maximalRectangle(matrix) {
    let max = 0;
    let bufAr = [];
    for(let i=0; i < matrix.length; ++i){
        bufAr[i] = [];
        for(let j=0; j < matrix[0].length; ++j){
           bufAr[i][j] = 0; 
        }
    }
    
    for(let i=0; i < matrix.length; ++i){
        for(let j=0; j < matrix[0].length; ++j){
            if(matrix[i][j] === '1'){
                bufAr[i][j] = j === 0 ? 1: bufAr[i][j-1] + 1;
                
                let width = bufAr[i][j];
                for(let k=i; k >= 0; --k ){
                    width =  Math.min(width,bufAr[k][j]);
                    max = Math.max(width*(i - k + 1), max);
                }
            }
        }
    }
    
    return max;
}

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]))