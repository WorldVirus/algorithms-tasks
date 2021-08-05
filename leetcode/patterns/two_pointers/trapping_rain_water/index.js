/** LINK: https://leetcode.com/problems/trapping-rain-water
 * 
 *  EXAMPLES:
 *  Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 *  Output: 6
 */

function trappingRainWater(height) {
    let answer = 0;
     let left = 0;
     let right = height.length - 1;
     let leftMax = 0;
     let rightMax = 0;
     while(left < right){
         if(height[left] > height[right]){
            if(height[right] > rightMax){ rightMax = height[right]}
             else{ answer += (rightMax - height[right] )}
             --right;
         } else{
            if(height[left] > leftMax){ leftMax = height[left]}
            else{ answer += (leftMax - height[left] )}
             ++left;
         }
     }
     
     return answer;
}

console.log(trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]))