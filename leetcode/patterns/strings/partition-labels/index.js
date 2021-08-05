/** LINK: https://leetcode.com/problems/partition-labels
 *  EXAMPLES: 
 *  Input: S = "ababcbacadefegdehijhklij"
 *  Output: [9,7,8] ("ababcbaca", "defegde", "hijhklij")
 * 
 */
function partionLabels(S) {
    let counterArr = [];
    let max = 0;
    let index = 0;
    let checkerObj = {};
    for(let i = 0; i < S.length; ++i){
        checkerObj[S[i]] = i;
    }
    
    for(let i = 0; i < S.length; ++i){
        max = Math.max(checkerObj[S[i]],max);
        if(i === max){
            let sizeSubstring = 0;
            index = counterArr.length ? index + counterArr[counterArr.length - 1]  : 0 ;
       
            sizeSubstring = S.substring(index,max+1).length
   
            counterArr.push(sizeSubstring);
        }
        
    }
    
    return counterArr;
}