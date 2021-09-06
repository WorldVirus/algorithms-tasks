/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3297/
 * 
 *  EXAMPLES:
 *  Input: [2,7,4,1,8,1]
 *  Output: 1
 */

function lastStoneWeight (stones) {
    while(stones.length > 1){
        let checker = {};
        for(let i=0; i < stones.length; ++i){
            if(!checker[`${stones[i]}`]){
                checker[`${stones[i]}`] = [];
            }
            checker[`${stones[i]}`].push(i);
        }
        
        let maxAr = Object.values(checker);
        let indexY = maxAr[maxAr.length - 1][0];
        let indexX = maxAr[maxAr.length - 1].length > 1 ?  maxAr[maxAr.length - 1][1]: maxAr[maxAr.length - 2][0];

        if(stones[indexX] === stones[indexY]){
            stones.splice(indexX,1);
            stones.splice(indexY,1);
        } else{
            stones[indexY] = stones[indexY] - stones[indexX];
            stones.splice(indexX,1)
        }
    }
    
    return stones.length ? stones[0]: 0;
};

console.log(lastStoneWeight([2,7,4,1,8,1]));