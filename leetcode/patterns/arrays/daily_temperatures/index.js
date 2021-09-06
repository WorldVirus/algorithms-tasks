/** LINK: https://leetcode.com/problems/daily-temperatures
 * 
 *  EXAMPLES:
 *  Input: nums = [73,74,75,71,69,72,76,73]
 *  Output: [1,1,4,2,1,1,0,0]
 */

function dailyTemputers(T) {
    let answer = [];
    
    for(let i = 0; i < T.length; ++i){
        let index = i + 1;
        let counter = 1;
        let findFl = false;
        while( index <  T.length){
            if(T[index] > T[i]){
               findFl = true;
               break;
            }
            ++counter;
            ++index;
        }
        let value = findFl ? counter: 0;
        answer.push(value)
    }
    
    return answer;
}

console.log(dailyTemputers([73,74,75,71,69,72,76,73]));