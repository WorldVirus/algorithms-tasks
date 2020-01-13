/** LINK: https://leetcode.com/problems/word-break
 * 
 *  EXAMPLES:
 *  Input: s = leetcode, wordDict = ["leet","code"]
 *  Output: true
 */

function wordBreaker(s, wordDict) {
    let queArr = [];
    let visitedArr = []
    for(let i = 0; i < s.length; ++i){
        visitedArr[i] = 0;
    }
    
    let checkerTree = new Set(wordDict);
    
    queArr.push(0);
    while(queArr.length){
         let start = queArr.shift()
         if(visitedArr[start] === 0 ){
             for(let end = start + 1; end <= s.length; ++end){
                 if(checkerTree.has(s.substring(start, end))){
                    queArr.push(end);
                    if(end === s.length){
                     return true;
                    }    
                }
             }
         }
        visitedArr[start] = 1;
    }
    
    return false;
}

console.log(wordBreaker("leetcode",["leet","code"]));