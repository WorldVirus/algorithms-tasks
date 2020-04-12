/** LINK: https://leetcode.com/problems/unique-binary-search-trees/
 * 
 *  EXAMPLES:
 *  Input: 3
 *  Output: 5
 */

function numTrees(n) {
    let answer = [];
   
      for(let i=0; i <= n; ++i){
        answer[i] = 0;
    }
     answer[0] = 1;
    answer[1] = 1;
    for(let i=2; i <= n; ++i){
        for(let j=1; j <= i; ++j){
            answer[i] += answer[i-j] * answer[j-1];
        }
    }
    
    return answer[n];
};

console.log(numTrees(3));