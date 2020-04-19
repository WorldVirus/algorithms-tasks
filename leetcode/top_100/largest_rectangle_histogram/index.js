/** NOT SUBMITTED (Time Limit Exceeded) 94/96
 * LINK: https://leetcode.com/problems/largest-rectangle-in-histogram/
 * 
 *  EXAMPLES:
 *  Input: [2,1,5,6,2,3]
 *  Output: 10
 */

function largestRectangleArea(heights) {
    let checker = {};
    let max = 0;
    
    for(let i=0; i < heights.length; ++i){
        if(!checker[`${heights[i]}`]){
            checker[`${heights[i]}`] = [];
        }
        checker[`${heights[i]}`].push(i);
    }
    
    for(let key in checker){
        let bufA = checker[key];
        for(let i=0; i < bufA.length; ++i){
            let cur = heights[bufA[i]];
            let left = bufA[i]-1;
            let right = bufA[i] + 1;
            while(left !== -1 || right !== -1){
                if(heights[left] >= heights[bufA[i]] && left >=0){
                    cur += heights[bufA[i]];
                    --left;
                } 
                else{
                    left = -1;
                }
                
                if(heights[right] >= heights[bufA[i]] && right < heights.length){
                    cur += heights[bufA[i]];
                    ++right;
                }
                else{
                    right = -1;
                }
            }
            
            max = Math.max(max,cur);
        }
    }
    
    return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));