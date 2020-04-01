/** LINK: https://leetcode.com/problems/burst-balloons
 *
 *  EXAMPLES:
 *  Input: [3,1,5,8]
 *  Output: 167
 */
function maxCoins(nums) {
    let memoAr = [];
    for(let i = 0; i < nums.length; ++i){
        memoAr[i] = [];
        for(let j = 0; j < nums.length; ++j){
             memoAr[i][j] = 0;
        }
    }
    
    let bufArr = [];
    for(let i = 1; i < nums.length + 1; ++i){
        bufArr[i] = nums[i - 1];
    }
    
    bufArr[0] = 1;
    bufArr[nums.length + 1] = 1;

    function calcMaxBurst(left,right){
        if(left + 1 === right){return 0;}
        if(memoAr[left][right]){return memoAr[left][right]}
        
        let answer = 0;
        for(let i = left + 1; i < right; ++i){
            answer = Math.max(answer, bufArr[left]*bufArr[i]*bufArr[right]  + calcMaxBurst(left, i) + calcMaxBurst(i, right));
        }
        memoAr[left][right] = answer;
        return answer;
    }
    
    return calcMaxBurst(0,nums.length + 1);
};

console.log(maxCoins([3,1,5,8]));