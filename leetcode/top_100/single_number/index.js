/** LINK: https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3283/
 *
 *  EXAMPLES:
 *  Input: [4,1,2,1,2]
 *  Output: 4
 */

function singleNumber (nums) {
    let checkerObj = {};
    for(let i=0; i < nums.length; ++i){
        if(!checkerObj[`${nums[i]}`]){ checkerObj[`${nums[i]}`] = 0;}
        ++checkerObj[`${nums[i]}`];
    }
    
    for(let key in checkerObj){
        if(checkerObj[key] === 1){return key;}
    }
    
    return 0;

// beautiful solution a^a=0; b^0=b; a^b^a=b;
//     let answer = 0;
//     for (let i = 0; i < nums.length; ++i) {
//       answer ^= nums[i];
//     }
//     return answer;
//   }

};

console.log(singleNumber([4,1,2,1,2]))