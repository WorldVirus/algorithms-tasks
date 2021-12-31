/** LINK: https://leetcode.com/problems/number-of-islands
 *
 *  EXAMPLES:
 *  Input: grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
 *  Output: 1
 */

function numberOfIslands(grid) {
    if(!grid || !grid.length){ return 0;}
    let answer = 0;
    let rowSize = grid.length;
    let columnSize = grid[0].length;
    
    function dfs(i,j){
        if(j >= columnSize || i >= rowSize || j < 0 || i< 0 || grid[i][j] === '0'){
            return;
        }
        
        grid[i][j] = '0';
        dfs(i+1,j);
        dfs(i-1,j);
        dfs(i,j-1);
        dfs(i,j+1);

    }
    
    for(let i=0; i<rowSize; ++i){
        for(let j=0; j< columnSize; ++j){
            if(grid[i][j] === '1'){
               dfs(i,j);
                ++answer;
           }
        }
    }
    
    return answer;
}

console.log(numberOfIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))