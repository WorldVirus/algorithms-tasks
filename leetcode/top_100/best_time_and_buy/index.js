/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3287/
 *
 *  EXAMPLES:
 *  Input: [7,1,5,3,6,4]
 *  Output: 7
 */
function maxProfit(prices) {
    let answer = 0;
    for(let i=1; i < prices.length; ++i){
        if(prices[i] > prices[i -1]){
            answer += prices[i] - prices[i-1];
        }
    }
    
    return answer;
};

console.log(maxProfit([7,1,5,3,6,4]));