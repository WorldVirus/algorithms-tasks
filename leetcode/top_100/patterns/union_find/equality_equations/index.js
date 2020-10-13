/** LINK: https://leetcode.com/problems/satisfiability-of-equality-equations/
 * 
 *  EXAMPLES:
 *  Input: ["c!=j","b!=i","j==c","c==k","d!=f","b==k","e!=h"]
 *  Output: false
 */

var equationsPossible = function (equations) {
    let g = {};
    let marked = [];
    for (let i = 0; i < 26; ++i) {
        g[`${i}`] = [];
        marked[i] = 0;
    }

    for (let i = 0; i < equations.length; ++i) {
        let f = equations[i][0];
        let s = equations[i][3];
        if (equations[i][1] === '=') {
            g[`${f.charCodeAt() - 'a'.charCodeAt()}`].push(s.charCodeAt() - 'a'.charCodeAt());
            g[`${s.charCodeAt() - 'a'.charCodeAt()}`].push(f.charCodeAt() - 'a'.charCodeAt());
        }
    }

    let val = 0;

    for (let i = 0; i < 26; ++i) {
        ++val;
        if (!marked[i]) {
            let stack = [i];
            while (stack.length) {
                let cur = stack.pop();
                let buf = g[`${cur}`];
                for (let i = 0; i < buf.length; ++i) {
                    if (!marked[buf[i]]) {
                        stack.push(buf[i]);
                        marked[buf[i]] = val;
                    }
                }
            }

        }
    }

    for (let i = 0; i < equations.length; ++i) {
        if (equations[i][1] === '!') {
            let f = equations[i][0].charCodeAt() - 'a'.charCodeAt();
            let s = equations[i][3].charCodeAt() - 'a'.charCodeAt();
            if (f === s || marked[f] && marked[f] === marked[s]) {
                return false;
            }
        }
    }

    return true;
};

console.log(equationsPossible(["c!=j","b!=i","j==c","c==k","d!=f","b==k","e!=h"]));