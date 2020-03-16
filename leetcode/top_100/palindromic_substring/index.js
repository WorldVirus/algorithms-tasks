/** LINK:https://leetcode.com/problems/palindromic-substrings/
 *
 *  EXAMPLES:
 *  Input: "abc"
 *  Output: 3
 */

function palindromicSubstring(s) {
    let answer = 0;
    for(let center = 0; center < s.length*2; ++center ){
        let left = Math.floor(center/2);
        let right = center%2 + left;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            ++answer;  
            --left;
            ++right;
        }
    }
    
    return answer;
};


console.log(palindromicSubstring("abc"));