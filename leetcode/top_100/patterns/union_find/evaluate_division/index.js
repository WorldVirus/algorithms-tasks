/** LINK: https://leetcode.com/problems/evaluate-division/
 * 
 *  EXAMPLES:
 *  Input: [["a","b"],["b","c"]],[2.0,3.0][["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
 *  Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]
 */
var calcEquation = function (equations, values, queries) {

    let parent = {};
    let vals = {};
    let answer = [];
    for (let i = 0; i < equations.length; ++i) {
        union(equations[i][0], equations[i][1], values[i]);
    }

    for (let i = 0; i < queries.length; ++i) {
        let bufF = queries[i][0];
        let bufS = queries[i][1];
        let res = parent[bufF] && parent[bufS] && find(bufS) === find(bufF) ? vals[bufF] / vals[bufS] : -1;
        answer.push(res);

    }


    function add(val) {
        if (parent[`${val}`]) {
            return;
        }

        parent[`${val}`] = val;
        vals[`${val}`] = 1;
    }

    function union(x, y, curVal) {
        add(x);
        add(y);

        let px = find(x);
        let py = find(y);
        parent[px] = py;
        vals[px] = (curVal * vals[y]) / vals[x];
    };
    function find(cur) {
        let el = parent[`${cur}`];
        if (el !== cur) {
            let pp = find(el);
            vals[`${cur}`] = vals[`${cur}`] * vals[`${el}`];
            parent[`${cur}`] = pp;
        }

        return parent[cur];
    }
    return answer;
};

console.log(calcEquation([["a","b"],["b","c"]],[2.0,3.0][["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]));