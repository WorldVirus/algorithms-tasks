/** LINK: https://leetcode.com/problems/word-pattern/
 * 
 *  EXAMPLES:
 *  Input: "abba", "dog cat cat fish"
 *  Output: "True"
 */

var wordPattern = function (pattern, str) {
    let arr = str.split(" "); 
    if (arr.length !== pattern.length) { return false; }

    let h = {};
    let curV = 96;
    pattern = pattern.split("");
    for (let i = 0; i < pattern.length; ++i) {
        if (h[pattern[i]]) {
            let v = h[pattern[i]];
            pattern[i] = v;
        } else {
            curV += 1;  
            let val = String.fromCharCode(curV);
            h[pattern[i]] = val; 
            pattern[i] = val; 
        }
    }

    let last = 96;
    let cur = "";
    let checker = {};

    for (let start = 0; start < arr.length; ++start) {
        if (checker[arr[start]]) {
            cur += checker[arr[start]];
        } else {
            last += 1;
            let val = String.fromCharCode(last); 
            cur += val; 
            checker[arr[start]] = val; 
        }

        if (pattern[start] !== cur[start]) {
            return false
        }
    }
    return true
};

console.log(wordPattern("abba","dog cat cat fish"));