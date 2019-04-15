/** LINK: https://www.hackerrank.com/challenges/common-child/problem
 * 
 *  DESCRIPTION: Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both

    EXAMPLES: 

    Sample Input

    HARRY
    SALLY

    Sample Output

    2
 */

function commonChild(s1, s2) {
    let sizeFirst = s1.length+1;
    let sizeSecond = s2.length+1;
    let counterValue = [];
    for (let i = 0; i < sizeFirst+1; ++i) {
        counterValue[i] = [];
        for (let j = 0; j < sizeSecond; ++j) {
            counterValue[i][j] = 0;
        }
    }

    for(let i = 0; i < sizeFirst; ++i){
        for(let j = 0; j < sizeSecond; ++j){
            if(i === 0 || j === 0)
                counterValue[i][j] = 0;
            else if(s1[i-1] === s2[j-1]){
                counterValue[i][j] = counterValue[i-1][j-1]+1;
            } else {
                counterValue[i][j] = Math.max(counterValue[i-1][j],counterValue[i][j-1])
            }
        }
    }

    return counterValue[sizeFirst-1][sizeSecond-1];
}

console.log(commonChild('TERRACED','CRATERED'))
