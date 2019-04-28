/** LINK: https://www.hackerrank.com/challenges/connected-cell-in-a-grid/problem
 *  
 *  DESCRIPTION: Given an  matrix, find and print the number of cells in the largest region in the matrix.
 *  Note that there may be more than one region in the matrix.
 * 
 *  EXAMPLES: 
 * 
 *  Sample Input

    1 1 0 0
    0 1 1 0
    0 0 1 0
    1 0 0 0

    Sample Output

    5
 * 
 */

function seacherMax(grid, row, col, matrixSizeRow,matrixSizeCol) {

    if (row < 0 || row >= matrixSizeRow || col < 0 || col >= matrixSizeCol) {
        return 0;
    } else if (grid[row][col] == 0) {
        return 0;
    }

    grid[row][col] = 0;

    let size = 1;
    for (let i = row - 1; i <= row + 1; ++i) {
        for (let j = col - 1; j <= col + 1; ++j) {
            size += seacherMax(grid, i, j, matrixSizeRow,matrixSizeCol);
        }
    }

    return size;
}

function connectedCell(matrix) {
    let matrixSizeRow = matrix.length;
    let matrixSizeCol = matrix[0].length
    let max = 0;
    for (let row = 0; row < matrixSizeRow; ++row) {
        for (let col = 0; col < matrixSizeCol; ++col) {
            if (matrix[row][col] == 1) {
                let size = seacherMax(matrix, row, col, matrixSizeRow,matrixSizeCol);
                max = Math.max(max, size);
            }
        }
    }

    return max;
}

console.log(connectedCell([
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1]]));
