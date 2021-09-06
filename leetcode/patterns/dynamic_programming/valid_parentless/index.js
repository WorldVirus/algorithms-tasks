/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3301/
 * 
 *  EXAMPLES:
 *  Input: "(*))"
 *  Output: True
 */

function checkValidString (s) {
    let high = 0;
    let low = 0;
    for(let i=0; i < s.length; ++i){
       low += s[i] === '(' ? +1: -1;
       high += s[i] !== ')' ? +1: -1;
        
        if(high < 0){return false;}
        
        low = Math.max(0,low);
    }
    
    return low === 0;
};

console.log(checkValidString("(*))"));