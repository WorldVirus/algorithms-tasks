/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3311/
 *
 *  EXAMPLES:
 *  Input: text1 = "abcde", text2 = "ace" 
 *  Output: 3
 */

function longestCommonSubsequence(text1, text2) {
    let curAr = [];
    let big = 0;
    let small = 0;
    let strB='';
    let strS ='';
    if(text1.length < text2.length){
        big = text2.length;
        small = text1.length;
        strS = text1;
        strB = text2;
    } else{
        big = text1.length;
        small = text2.length;
        strS = text2;
        strB = text1;
    }
    
    for(let i=0; i < big; ++i){
        curAr[i] = 0;
    }
    
    for(let i=0; i < small; ++i){
        let buf = [];
        buf[0] = 0;
        for(let j=0; j < big; ++j){
            if(strS[i] === strB[j]){
                let val = j-1 >=0 ? curAr[j-1]:0;
                buf[j] = 1 + val;
            } else {
                let val = j-1 >=0 ? buf[j-1]:0;
                buf[j] = Math.max(val,curAr[j]);
            }
        }
        curAr.length = 0;
        curAr = buf.slice();
    }
    
    return curAr[curAr.length - 1];
};

console.log(longestCommonSubsequence("abcde","ace"))