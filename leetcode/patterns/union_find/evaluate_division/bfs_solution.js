/** LINK: https://leetcode.com/problems/evaluate-division/
 * 
 *  EXAMPLES:
 *  Input: [["a","b"],["b","c"]],[2.0,3.0][["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 *  Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
 */

var calcEquation = function (equations, values, queries) {
    let g = {};
    let answer = [];

    for (let i = 0; i < equations.length; ++i) {
        let bufF = equations[i][0]
        let bufS = equations[i][1];

        if (!g[bufF]) {
            g[bufF] = {};
        }

        g[bufF][bufS] = values[i];


        if (!g[bufS]) {
            g[bufS] = {};
        }

        g[bufS][bufF] = 1 / values[i];
    }

    for (let i = 0; i < queries.length; ++i) {
        let f = queries[i][0];
        let s = queries[i][1];
        if (!g[f] || !g[s]) { answer.push(-1); continue; }

        let visited = {};
        let history = [1];
        let q = [f];
        let flag = true;
        while (q.length) {
            let cur = g[q.shift()];
            let val = history.shift();
            if (cur[s]) {
                answer.push(val * cur[s]);
                flag = false;
                break;
            }
            if (visited[cur]) { continue; }
            Object.keys(cur).forEach((index) => {
                q.push(index);
                history.push(val * cur[index]);
            });

            visited[cur] = true;
        }

        if (flag) {
            answer.push(-1);
        }
    }

    return answer;
};

console.log(calcEquation([["a","b"],["b","c"]],[2.0,3.0][["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]));