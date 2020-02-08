/** LINK: https://leetcode.com/problems/minimum-path-sum
 * 
 *  EXAMPLES:
 *  Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
 *  Output: 7
 */

function minimumPathSum(grid) {
    let maxRow = grid.length - 1;
    let maxCol = grid[0].length - 1;    
    for(let i = maxRow; i >= 0; --i){
        for(let j = maxCol; j >= 0; --j){
            if(j !== maxCol && i === maxRow){
               grid[i][j] += grid[i][j+1];
            } else if(i !== maxRow && j === maxCol){
               grid[i][j] += grid[i+1][j];    
            } else if(j !== maxCol && i !== maxRow){
                grid[i][j] += Math.min(grid[i+1][j], grid[i][j+1]);
            }
        }
    }
    
    return grid[0][0];
}

console.log(minimumPathSum([[1,3,1],[1,5,1],[4,2,1]]));