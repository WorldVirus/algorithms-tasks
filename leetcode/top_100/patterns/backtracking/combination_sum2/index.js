/** LINK: https://leetcode.com/problems/combination-sum-ii/
 * 
 *  EXAMPLES:
 *  Input: [10,1,2,7,6,1,5], 8
 *  Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
 */
const backtrack = (candidates, target, idx = 0, subset = [], res = []) => {
    if (target < 0) { return res; }
    if (target === 0) { 
        res.push(subset.slice(0));
        return res;
    }
    
    for (let i = idx; i < candidates.length; i++) {
        if (i > idx && candidates[i] === candidates[i - 1]) { continue; }
        
        subset.push(candidates[i]);
        backtrack(candidates, target - candidates[i], i + 1, subset, res);
        subset.pop();
    }
    
    return res;
}

const combinationSum2 = (candidates, target) => {
    candidates.sort((a, b) => a - b);
    return backtrack(candidates, target);
};

console.log(backtrack([10,1,2,7,6,1,5], 8))