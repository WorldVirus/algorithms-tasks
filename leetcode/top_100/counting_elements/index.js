/** LINK: https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3289/
 *
 *  EXAMPLES:
 *  Input: arr = [1,2,3]
 *  Output: 2
 */
function countElements (arr) {
    let checkerObj = {};
    let answer = 0;
    for(let i=0; i < arr.length; ++i){
        if(!checkerObj[`${arr[i]}`]){checkerObj[`${arr[i]}`] = 0;}
        ++checkerObj[`${arr[i]}`];
    }
    
    let arKeys = Object.keys(checkerObj);
    for(let i=0; i < arKeys.length - 1; ++i){
        let bufVal = parseInt(arKeys[i]) + 1;
        if(checkerObj[`${bufVal}`]){
            answer += checkerObj[`${arKeys[i]}`];
        }
    }
    
    return answer;
};

console.log(countElements([1,2,3]));