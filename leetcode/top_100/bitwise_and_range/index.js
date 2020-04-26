/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/531/week-4/3308/
 *
 *  EXAMPLES:
 *  Input: [5,7]
 *  Output: 4
 */

function rangeBitwiseAnd(m, n) {
    let answer = m&n;
    for(let i=m+1; i <n;++i){
        if(!answer){return 0;}
        answer = answer&i;
    }
    
    return answer;
};

console.log(rangeBitwiseAnd(5,7));