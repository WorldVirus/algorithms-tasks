/** LINK: https://leetcode.com/problems/unique-paths/
 * 
 *  EXAMPLES:
 *  Input: m = 3, n = 2
 *  Output: 3
 */

function uniquePaths(m, n) {
    let matrix = [];
    for(let i=0; i < m; ++i){
        matrix[i] = [];
        for(let j=0; j < n; ++j){
            matrix[i][j] = 1;
        }
    }
      
    for(let i=1; i < n; ++i){
        for(let j=1; j < m; ++j){
            matrix[j][i] = matrix[j-1][i] + matrix[j][i-1];
        }
    }
    
    return matrix[m-1][n-1];
};

console.log(uniquePaths(3, 2));