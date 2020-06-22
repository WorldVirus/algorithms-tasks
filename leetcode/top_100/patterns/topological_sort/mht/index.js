/** LINK: https://leetcode.com/problems/minimum-height-trees/
 * 
 *  EXAMPLES:
 *  Input: 6, [[0,1],[0,2],[0,3],[3,4],[4,5]]
 *  Output: 3
 */


var findMinHeightTrees = function (n, edges) {
    if (!edges.length) { return [0]; }

    let g = {};

    for (let i = 0; i < n; ++i) {
        g[`${i}`] = [];
    }
    for (let i = 0; i < edges.length; ++i) {
        g[`${edges[i][0]}`].push(edges[i][1]); g[`${edges[i][1]}`].push(edges[i][0]);
    }

    let arr = [];
    for (let i = 0; i < n; ++i) {
        if (g[`${i}`].length === 1) {
            arr.push(i);
        }
    }

    while (n > 2) {
        let buf = [];
        n -= arr.length;
        for (let i = arr.length - 1; i >= 0; --i) {
            let cur = g[`${arr[i]}`][0];
            g[`${cur}`] = g[`${cur}`].filter((item) => item !== arr[i]);
            if (g[`${cur}`].length === 1) {
                buf.push(cur);
            }
            delete g[`${arr[i]}`];
        }
        arr.length = 0;
        arr = buf;
    }

    return arr;
};

console.log(findMinHeightTrees(6, [[0,1],[0,2],[0,3],[3,4],[4,5]]))