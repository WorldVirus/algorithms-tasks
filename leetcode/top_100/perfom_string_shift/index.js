/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3299/
 * 
 *  EXAMPLES:
 *  Input: "abcdefg", [[1,1],[1,1],[0,2],[1,3]]
 *  Output: "efgabcd"
 */

function stringShift (s, shift) {
    for(let i=0; i < shift.length; ++i){
        if(shift[i][0]){
            let plus = s.substring(s.length - shift[i][1],s.length);
            s = s.substring(0,s.length - shift[i][1]);
            s = plus + s;
        } else{
           let plus = s.substring(0, shift[i][1]);
           s = s.substring( shift[i][1],s.length); 
           s = s + plus;
        }
    }
    
    return s;
};

console.log(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]]));