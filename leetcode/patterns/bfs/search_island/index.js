/** LINK: https://leetcode.com/problems/max-area-of-island/
 *
 *  EXAMPLES:
 *  Input: [[0,0,0,0,0,0,0,0]]
 *  Output: 1
 */
var maxAreaOfIsland = function (grid) {
    if (!grid.length || !grid[0].length) {
        return 0;
    }

    let max = Number.MIN_VALUE;
    let q = [];
    let d = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (grid[i][j] === 1) {
                q.push([i, j]);
                let bufMax = 0;
                grid[i][j] = -1;
                while (q.length) {
                    let cur = q.shift();
                    ++bufMax;
                    for (let k = 0; k < d.length; ++k) {
                        let indexI = d[k][0];
                        let indexJ = d[k][1]
                        if (!(cur[0] + indexI < 0 || cur[0] + indexI >= grid.length || cur[1] + indexJ < 0 || cur[1] + indexJ >= grid[0].length) && grid[cur[0] + indexI][cur[1] + indexJ] === 1) {
                            grid[cur[0] + indexI][cur[1] + indexJ] = -1;
                            q.push([cur[0] + indexI, cur[1] + indexJ]);
                        }
                    }
                }

                max = Math.max(max, bufMax);
            }
        }
    }
    return max;
};

console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]))