/** LINK: https://leetcode.com/problems/decode-string/
 *
 *  EXAMPLES:
 *  Input: "3[a]2[bc]"
 *  Output: "aaabcbc"
 */
function decodeString(s) {
    let digitAr = [];
    let indexAr = [];
    let answer = '';
    for(let i=0; i < s.length; ++i){
        if(s[i] >= '0' && s[i] <= '9'){
            let curStr = s[i];
            while(s[i+1]!=='['){
                ++i;
                curStr +=s[i];
            }
            digitAr.push(parseInt(curStr))
        } else if(s[i] === '['){
            indexAr.push(answer.length);
        } else if(/[a-zA-Z]/.test(s[i])){
            answer +=s[i];
        } else{
            let concatStr = answer.substring(indexAr.pop(), answer.length);
            let numberAd = digitAr.pop() - 1;
            while(numberAd){
                answer += concatStr;
                --numberAd;
            }
        }
    }
    
    return answer;
};

console.log(decodeString("3[a]2[bc]"));