/** LINK: https://leetcode.com/problems/minimum-window-substring
 *
 *  EXAMPLES:
 *  Input: "ADOBECODEBANC", "ABC"
 *  Output: "BANC"
 */

function minWindow(s, t) {
    let mapSearching = {};
    for(let i = 0; i < t.length; ++i){
        if(!mapSearching[`${t[i]}`]){
           mapSearching[`${t[i]}`] = 0;
           };
        ++mapSearching[`${t[i]}`];
    }
    
    let right = 0; let left = 0;
    let answerArr = [-1, 0, 0];
    let numbersUniq = Object.keys(mapSearching).length;
    let windowMap = {};
    let formed = 0;
    while(right < s.length){
        let rightBuf = s[right];
        if(!windowMap[`${rightBuf}`]){windowMap[`${rightBuf}`] = 0;}
        ++windowMap[`${rightBuf}`];
        if(mapSearching[`${rightBuf}`] && mapSearching[`${rightBuf}`] === windowMap[`${rightBuf}`]){
            ++formed;
        }
          while( left <= right && formed === numbersUniq){
             let leftBuf = s[left];
             if(answerArr[0] === -1 || answerArr[0] > right-left+1){
                 answerArr[0] =  right-left+1;
                 answerArr[1] =  left;
                 answerArr[2] =  right;
             }
               --windowMap[`${leftBuf}`];
              if(mapSearching[`${leftBuf}`] && mapSearching[`${leftBuf}`] > windowMap[`${leftBuf}`]){
                 --formed;
               }
             ++left;
          }
         ++right;
    }
    
    return answerArr[0] === -1 ? "": s.substring(answerArr[1], answerArr[2] + 1);
}

console.log(minWindow("ADOBECODEBANC","ABC"));