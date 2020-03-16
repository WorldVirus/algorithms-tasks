/** LINK: https://leetcode.com/problems/generate-parentheses
 * 
 *  EXAMPLES:
 *  Input: n = 3
 *  Output: ["((()))","(()())","(())()","()(())","()()()"]
 */

function generateParentless(n) {
    let answer = [];
    function parenLess(curStr, open, close){
        if(open === n && close === n && curStr.length === n * 2){
            answer.push(curStr); return;
        }
        if(open > n || close > n || close > open){
           return;
        }
        
        parenLess(curStr + '(', open + 1, close);
        parenLess(curStr + ')', open, close + 1);
    };
    
    parenLess('', 0, 0);
    
    return answer;
}

console.log(generateParentless(3));